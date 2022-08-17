import { createAction } from '@reduxjs/toolkit';

export enum Mode {
    light = 'light',
    dark = 'dark',
}

export const updateTheme = createAction<Mode>('UPDATE_THEME');
