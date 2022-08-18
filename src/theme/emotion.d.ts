/* eslint-disable @typescript-eslint/no-empty-interface */
import '@emotion/react';
import type { Theme as MuiTheme } from '@mui/material/styles';

declare module '@emotion/react' {
    export interface Theme extends MuiTheme {}
}
