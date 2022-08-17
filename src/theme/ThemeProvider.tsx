import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { FC, PropsWithChildren } from 'react';

import { useAppSelector } from '@/redux/hooks';
import { themeSelector } from '@/redux/selectors/theme';
import theme from '.';

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    const mode = useAppSelector(themeSelector);

    return (
        <EmotionThemeProvider theme={theme[mode]}>
            {children}
        </EmotionThemeProvider>
    );
};

export default ThemeProvider;
