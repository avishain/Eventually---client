import React from 'react';

const Footer = () => {
    return (
        <div {...{style}}>
            &copy; All rights reserved to <span style={{color: '#A0D9FF', fontWeight:'bold'}}>E&&A Ltd.</span>
        </div>
    );
}

const style = {
    position: 'relative',
    left: 50,
    backgroundColor: 'rgba(0,0,0,0.95)',
    fontSize: '14px',
    color: '#EEEEEE'
};

export default Footer;
