import React, { useState } from 'react';
import IosNotifications from 'react-ionicons/lib/IosNotifications'

const Notifications = () => {
    const [shake, setShake] = useState(true);

    setInterval(() => {
        setShake(false);
        setTimeout(() => {
            setShake(true);
        }, 7000);
    }, 8000);

    const onClick = () => {
        alert('onClick!')
    }
    
    return (
        <a href='\#' style={containerStyle} {...{onClick}}>
            <IosNotifications fontSize='38px' color='rgb(230,230,230)' {...{shake}} />
            <div style={notificationsContainer}>
                <div style={{ fontSize: '10px', color: 'rgba(240,240,240,1)', fontWeight: 'bold' }} >2</div>
            </div>
        </a>
    )
}

const containerStyle = {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '45px',
    right: '190px',
};

const notificationsContainer = {
    position: 'absolute',
    display: 'flex',
    right: -3,
    bottom: 0,
    height: 20,
    width: 20,
    borderRadius: 10, 
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
}

export default Notifications;
