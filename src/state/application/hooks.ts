import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NetworkInfo } from '../../constants/networks';
import { useActiveWeb3 } from '../../hooks/useActiveWeb3';
import { AppDispatch, AppState } from '../index';
import { addPopup, ApplicationModal, PopupContent, removePopup, setOpenModal, updateActiveNetworkVersion, updateSubgraphStatus } from './actions';

export function useBlockNumber(): number | undefined {
	const { activeChain } = useActiveWeb3();

	return useSelector((state: AppState) => state.application.blockNumber[activeChain?.id ?? -1]);
}

export function useModalOpen(modal: ApplicationModal): boolean {
	const openModal = useSelector((state: AppState) => state.application.openModal);
	return openModal === modal;
}

export function useToggleModal(modal: ApplicationModal): () => void {
	const open = useModalOpen(modal);
	const dispatch = useDispatch<AppDispatch>();
	return useCallback(() => dispatch(setOpenModal(open ? null : modal)), [dispatch, modal, open]);
}

export function useOpenModal(modal: ApplicationModal): () => void {
	const dispatch = useDispatch<AppDispatch>();
	return useCallback(() => dispatch(setOpenModal(modal)), [dispatch, modal]);
}

export function useCloseModals(): () => void {
	const dispatch = useDispatch<AppDispatch>();
	return useCallback(() => dispatch(setOpenModal(null)), [dispatch]);
}

export function useWalletModalToggle(): () => void {
	return useToggleModal(ApplicationModal.WALLET);
}

export function useToggleSettingsMenu(): () => void {
	return useToggleModal(ApplicationModal.SETTINGS);
}

// returns a function that allows adding a popup
export function useAddPopup(): (content: PopupContent, key?: string) => void {
	const dispatch = useDispatch();

	return useCallback(
		(content: PopupContent, key?: string) => {
			dispatch(addPopup({ content, key }));
		},
		[dispatch]
	);
}

// returns a function that allows removing a popup via its key
export function useRemovePopup(): (key: string) => void {
	const dispatch = useDispatch();
	return useCallback(
		(key: string) => {
			dispatch(removePopup({ key }));
		},
		[dispatch]
	);
}

// get the list of active popups
export function useActivePopups(): AppState['application']['popupList'] {
	const list = useSelector((state: AppState) => state.application.popupList);
	return useMemo(() => list.filter((item) => item.show), [list]);
}

// returns a function that allows adding a popup
export function useSubgraphStatus(): [
	{
		available: boolean | null;
		syncedBlock: number | undefined;
		headBlock: number | undefined;
	},
	(available: boolean | null, syncedBlock: number | undefined, headBlock: number | undefined) => void
] {
	const dispatch = useDispatch();
	const status = useSelector((state: AppState) => state.application.subgraphStatus);

	const update = useCallback(
		(available: boolean | null, syncedBlock: number | undefined, headBlock: number | undefined) => {
			dispatch(updateSubgraphStatus({ available, syncedBlock, headBlock }));
		},
		[dispatch]
	);
	return [status, update];
}

// returns a function that allows adding a popup
export function useActiveNetworkVersion(): [NetworkInfo, (activeNetworkVersion: NetworkInfo) => void] {
	const dispatch = useDispatch();
	const activeNetwork = useSelector((state: AppState) => state.application.activeNetworkVersion);
	const update = useCallback(
		(activeNetworkVersion: NetworkInfo) => {
			dispatch(updateActiveNetworkVersion({ activeNetworkVersion }));
		},
		[dispatch]
	);
	return [activeNetwork, update];
}
