import { createAction } from '@reduxjs/toolkit';

// fired once when the app reloads but before the app renders
// allows any updates to be applied to store data loaded from localStorage
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const updateVersion = createAction<void>('global/updateVersion');
