import React from 'react';
import IosCalendar from 'react-ionicons/lib/IosCalendar';
import MdImages from 'react-ionicons/lib/MdImages';
import IosBeer from 'react-ionicons/lib/IosBeer';
import IosClose from 'react-ionicons/lib/IosClose';
import { NavLink } from 'react-router-dom';
import { toggleNotificationsWindow, setSelectedNotification } from '../../../../redux/actions';
import { connect } from 'react-redux';

const Notification = props => {
    const { notification, toggleNotificationsWindow, setSelectedNotification } = props;

    const getIcon = type => {
        switch (type) {
            case 'dateSelection':
                return <IosCalendar color='blue' />;
            case 'invitation':
                return <IosBeer color='red' />;
            case 'news':
                return <MdImages color='green' />;
            default:
                return <IosClose color='black' />
        }
    }

    const getTextMessage = type => {
        switch (type) {
            case 'dateSelection':
                return 'New event offer has been received';
            case 'invitation':
                return 'New event invitation has been received';
            case 'news':
                return 'New photos in event group';
            default:
                return '';
        }
    }

    const onClick = () => {
        toggleNotificationsWindow();
        setSelectedNotification(notification);
    }

    return (
        <NavLink {...{ onClick }} to={"/EventOffer"} style={containerStyle}>
            <div style={logoContainerStyle}>
                {getIcon(notification.type)}
            </div>
            <div style={{ paddingLeft: 10 }}>
                <p style={{ ...textStyle, fontWeight: 'bold' }}>{getTextMessage(notification.type)}</p>
                <p style={{ ...textStyle, color: '#9EA0A5' }}>2 hours ago</p>
            </div>
        </NavLink>
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
    textAlign: 'left',
    textDecoration: 'none'
}

export default connect(null, { toggleNotificationsWindow, setSelectedNotification })(Notification);
