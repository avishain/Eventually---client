import React from 'react';

const ToEventPage = props => {
    return (
        <a onClick={() => alert('To event page')} href='#\' style={containerStyle}>
            <div style={textStyle}>To event page</div>
        </a>
    );
}
const containerStyle = {
    position: 'absolute',
    width: '40%',
    height: '40px',
    bottom: '20px',
    right: '30px',
    background: '#67366B',
    borderRadius: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
}

const textStyle = {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: '14px',
    color: 'white'
}

export default ToEventPage;
