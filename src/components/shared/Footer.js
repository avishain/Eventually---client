import React from 'react';
import Rights from './footer/Rights';
import Tabs from './footer/Tabs';
import Logo from './footer/Logo';

const Footer = () => {
    return (
        <footer style={containerStyle}>
            <Rights />
            <Tabs />
            <Logo />
        </footer>
    );
}

const containerStyle = {
    height: '50px',
    position: 'relative',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.95)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
};

export default Footer;
