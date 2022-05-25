import { createAction } from '@reduxjs/toolkit';

export const updateMatchesDarkMode = createAction<{ matchesDarkMode: boolean }>('user/updateMatchesDarkMode');
export const updateUserDarkMode = createAction<{ userDarkMode: boolean }>('user/updateUserDarkMode');
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const toggleURLWarning = createAction<void>('app/toggleURLWarning');
