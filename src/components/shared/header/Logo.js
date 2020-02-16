import React from 'react';
import logo from '../../../assets/images/calendar.png';

const Logo = () => {
    return (
        <div style={textStyle}>
            <span style={{ zIndex: 1 }}>Eventually</span>
            <img src={logo} alt='Eventually!' style={imageStyle} />
        </div>
    );
}
const imageStyle = {
    position: 'absolute',
    left: '170px',
    transform: 'rotate(-15deg)',
    height: '50px',
    aspectRatio: '1',
};

const textStyle = {
    width: '200px',
    height: '100%',
    fontFamily: 'Heebo',
    fontWeight: 'bold',
    fontSize: '32px',
    lineHeight: '47px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#E5E5E5',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
};

export default Logo;
