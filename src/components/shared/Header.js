import React from 'react';
import Logo from './header/Logo';
import Tabs from './header/Tabs';
import Notifications from './header/Notifications';
import UserIMage from './header/UserIMage';

const Header = props => {
    const { imageSource } = props;

    return (
        <header style={headerStyle}>
            <Logo />
            <Tabs />
            <Notifications  />
            <UserIMage {...{ imageSource }} />
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
    zIndex: 500,
    backgroundColor: '#67366B',
    boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.16)',
    flexDirection: 'row',
    alignItems: 'center'
};

export default Header;
