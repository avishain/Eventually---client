import React from 'react';

const Top = ({ title, subtitle}) => {
    return (
        <div style={containerStyle}>
            <h4 style={titleStyle}>{title}</h4>
            { subtitle && <h5 style={subTitleStyle}>{subtitle}</h5> }
        </div>
    );
}

const containerStyle = {
    width: '100%',
    height: 110,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'left',
    background: 'linear-gradient(259.64deg, #AD78C9 0%, #67366B 63.66%)',
    padding: '0 70px'
}

const titleStyle = {
    fontWeight: 'lighter',
    fontSize: 22,
    color: 'white'
}

const subTitleStyle = {
    fontSize: 16,
    color: 'white'
}

export default Top;
