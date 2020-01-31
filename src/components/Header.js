import React from 'react';
import Logo from './header/Logo';
import Tabs from './header/Tabs';
import Notifications from './header/Notifications';
import UserIMage from './header/UserIMage';

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
    height: '100px',
    backgroundColor: '#67366B',
    boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.16)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
};

export default Header;
