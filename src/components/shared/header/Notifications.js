import React from 'react';
import IosNotifications from 'react-ionicons/lib/IosNotifications';
import NotificationsWindow from './NotificationsWindow';
import { connect } from 'react-redux';
import { toggleNotificationsWindow } from '../../../redux/actions';

const Notifications = (props) => {
    const { toggleNotificationsWindow, inbox } = props;

    const onClick = () => toggleNotificationsWindow();

    return (
        <React.Fragment>
            <div style={containerStyle} {...{ onClick }}>
                <IosNotifications fontSize='38px' color='rgb(230,230,230)' shake />
                <div style={notificationsContainer}>
                    <div style={{ fontSize: '10px', color: 'rgba(240,240,240,1)', fontWeight: 'bold' }} >{inbox.length}</div>
                </div>
            </div>
            <NotificationsWindow {...{ inbox }} />
        </React.Fragment>
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
    cursor: 'pointer'
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

export default connect(null, { toggleNotificationsWindow })(Notifications);
