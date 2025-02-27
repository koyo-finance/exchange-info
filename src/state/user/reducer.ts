import { createReducer } from '@reduxjs/toolkit';
import { updateVersion } from '../global/actions';
import { toggleURLWarning, updateMatchesDarkMode, updateUserDarkMode } from './actions';

const currentTimestamp = () => new Date().getTime();

export interface UserState {
	// the timestamp of the last updateVersion action
	lastUpdateVersionTimestamp?: number;

	userDarkMode: boolean | null; // the user's choice for dark mode or light mode
	matchesDarkMode: boolean; // whether the dark mode media query matches

	timestamp: number;
	URLWarningVisible: boolean;
}

export const initialState: UserState = {
	userDarkMode: true,
	matchesDarkMode: false,
	timestamp: currentTimestamp(),
	URLWarningVisible: true
};

export default createReducer(initialState, (builder) =>
	builder
		.addCase(updateVersion, (state) => {
			state.lastUpdateVersionTimestamp = currentTimestamp();
		})
		.addCase(updateUserDarkMode, (state, action) => {
			state.userDarkMode = action.payload.userDarkMode;
			state.timestamp = currentTimestamp();
		})
		.addCase(updateMatchesDarkMode, (state, action) => {
			state.matchesDarkMode = action.payload.matchesDarkMode;
			state.timestamp = currentTimestamp();
		})
		.addCase(toggleURLWarning, (state) => {
			state.URLWarningVisible = !state.URLWarningVisible;
		})
);
