import React from 'react';
import IosCalendar from 'react-ionicons/lib/IosCalendar';

const Notification = (props) => {
    return (
        <div style={containerStyle}>
            <div style={logoContainerStyle}>
                <IosCalendar color='blue' />
            </div>
            <div style={{ paddingLeft: 10 }}>
                <p style={{ ...textStyle, fontWeight: 'bold' }}>New event offer has been received</p>
                <p style={{ ...textStyle, color: '#9EA0A5' }}>2 hours ago</p>
            </div>
        </div>
    );
}

const containerStyle = {
    height: 64,
    width: '100%',
    padding: 15,
    display: 'flex',
}

const logoContainerStyle = {
    height: 36,
    width: 36,
    borderRadius: 18,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E5E5'
}

const textStyle = {
    fontSize: 13,
    color: '#3A3B3F',
    margin: 0,
    textAlign: 'left'
}

export default Notification;
