import React from 'react';
import calendarImage from '../../../assets/images/calendar.png';

const Logo = () => {
    return (
        <div style={containerStyle}>
            <span style={textStyle}>Eventually</span>
            <img src={calendarImage} alt='Eventually!' style={imageStyle} />
        </div>
    );
}

const containerStyle = {
    width: '150px',
    height: '100%',
    display: 'flex',
    position: 'absolute',
    right: 50,
    alignItems: 'center',
    justifyContent: 'center'
};

const imageStyle = {
    position: 'absolute',
    right: 0,
    transform: 'rotate(-15deg)',
    height: 30,
    aspectRatio: '1',
};

const textStyle = {
    fontFamily: 'Heebo',
    fontWeight: 'bold',
    fontSize: '20px',
    color: '#E5E5E5',
    zIndex: 10,
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
}
export default Logo;
