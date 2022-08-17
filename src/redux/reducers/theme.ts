import { createReducer } from '@reduxjs/toolkit';

import { Mode, updateTheme } from '@/redux/actions/theme';

interface ThemeState {
    theme: Mode;
}

export const initState: ThemeState = {
    theme: Mode.light,
};

const themeReducer = createReducer(initState, (builder) =>
    builder.addCase(updateTheme, (state, action) => {
        state.theme = action.payload;
    })
);

export default themeReducer;
