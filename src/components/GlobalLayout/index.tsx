import { useRouter } from 'next/router';
import { FC, PropsWithChildren } from 'react';

import Banner from './Banner';
import { NavSearchProvider } from './NavSearchProvider';
import SideBar from './SideBar';
import { Container } from './style';
import useInitUserModeByRoute from './useInitUserModeByRoute';
import useMediaEffect from './useMediaEffect';

const switchOfSearchBar = ['/study'];

const GlobalLayout: FC<PropsWithChildren> = ({ children }) => {
    const router = useRouter();

    useInitUserModeByRoute();
    useMediaEffect();

    const isShowSearch = switchOfSearchBar.includes(router.pathname);

    return (
        <div style={{ display: 'flex' }}>
            <SideBar />
            <NavSearchProvider>
                <Container isShowSearch={isShowSearch}>
                    <Banner isShowSearch={isShowSearch} />
                    {children}
                </Container>
            </NavSearchProvider>
        </div>
    );
};

export default GlobalLayout;
