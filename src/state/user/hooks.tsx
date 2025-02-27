import { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from '../index';
import { toggleURLWarning, updateUserDarkMode } from './actions';

export function useIsDarkMode(): boolean {
	const { userDarkMode, matchesDarkMode } = useSelector<AppState, { userDarkMode: boolean | null; matchesDarkMode: boolean }>(
		({ user: { matchesDarkMode, userDarkMode } }) => ({
			userDarkMode,
			matchesDarkMode
		}),
		shallowEqual
	);

	return userDarkMode === null ? matchesDarkMode : userDarkMode;
}

export function useDarkModeManager(): [boolean, () => void] {
	const dispatch = useDispatch<AppDispatch>();
	const darkMode = true;

	const toggleSetDarkMode = useCallback(() => {
		dispatch(updateUserDarkMode({ userDarkMode: !darkMode }));
	}, [darkMode, dispatch]);

	return [darkMode, toggleSetDarkMode];
}

export function useURLWarningVisible(): boolean {
	return useSelector((state: AppState) => state.user.URLWarningVisible);
}

export function useURLWarningToggle(): () => void {
	const dispatch = useDispatch();
	return useCallback(() => dispatch(toggleURLWarning()), [dispatch]);
}
