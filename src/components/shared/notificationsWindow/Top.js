import React from 'react';
import logo from '../../../assets/images/calendar.png';

const Top = (props) => {
    const numberOfNotifications = 2;
    return (
        <div style={containerStyle}>
            <div style={leftPanelStyle}>
                <p style={{...textStyle, fontWeight: 'bold', fontSize: 14, color: '#3A3B3F'}}>User notifications</p>
                <p style={{...textStyle, fontSize: 12}}>{numberOfNotifications} new notifications</p>
            </div>
            <div style={rightPanelStyle}>
                <img src={logo} alt='Eventually!' style={imageStyle} />
            </div>
        </div>
    );
}

const textStyle = {
    fontFamile: 'Roboto',
    color: '#9EA0A5',
    margin: 0
}

const containerStyle = { 
    backgroundColor: '#F5F5F5',
    height: 100, 
    width: '100%',
    margin: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
}

const rightPanelStyle = {
    width: '60%',
    background: 'radial-gradient(50% 50% at 50% 50%, rgba(103, 54, 107, 0.3) 44.79%, rgba(196, 196, 196, 0) 100%)'
}

const leftPanelStyle = {
    display: 'flex',
const imageStyle = {
    height: 70,
    aspectRatio: 1,
    position: 'relative',
    marginTop: 15
}

export default Top;
