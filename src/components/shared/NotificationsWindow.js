import React from 'react';

const NotificationsWindow = () => {
    return (
        <div style={containerStyle}>
        </div>
    );
}

const containerStyle = {
    width: '350px',
    height: 100,
    position: 'absolute',
    top: 30,
    right: -40,
    zIndex: 800,
    display: 'flex',
    backgroundColor: '#FFFFFF',
    boxShadow: '2px 4px 3px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px'
};

export default NotificationsWindow;
