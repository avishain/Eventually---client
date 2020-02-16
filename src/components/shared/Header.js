import React from 'react';
import Logo from './header/Logo';
import Tabs from './header/Tabs';
import Notifications from './header/Notifications';
import UserIMage from './header/UserIMage';
// *******************************header*******************
const Header = () => {
    return (
        <header style={headerStyle}>
            <Logo />
            <Tabs />
            <Notifications/>
            <UserIMage />
        </header>
    );
}

const headerStyle = {
    display: 'flex',
    height: '100px',
    position: 'sticky',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: '#67366B',
    boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.16)',
    flexDirection: 'row',
    alignItems: 'center'
};

export default Header;
