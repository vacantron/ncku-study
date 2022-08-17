/* eslint-disable import/prefer-default-export */
import { createSelector } from '@reduxjs/toolkit';

import selectSelf from '@/redux/selectors';

export const themeSelector = createSelector(
    selectSelf,
    (state) => state.theme.theme
);
