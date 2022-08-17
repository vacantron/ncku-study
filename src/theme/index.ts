import { createTheme } from '@mui/material';
import { color } from './global';

const theme = {
    light: createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: color.darkYellow,
            },
        },
    }),
    dark: createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: color.lightBlack,
            },
        },
    }),
};

export default theme;
