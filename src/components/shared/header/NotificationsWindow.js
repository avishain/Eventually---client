import React from 'react';
import { connect } from 'react-redux';
import Top from './notificationsWindow/Top';
import Notification from './notificationsWindow/Notification';

// import { Route, Link } from 'react-router-dom';

const NotificationsWindow = props => {
    const { inbox, isOpen } = props;

    const height = isOpen ? inbox.length * 64 + 110 : 0;
    
    return (
        <div style={{ ...containerStyle, height }}>
            <Top />
            { props.inbox.map(notification => <Notification inbox={notification} /> )}
        </div>
    );
}

const containerStyle = {
    width: '350px',
    transition: 'height .4s',
    position: 'absolute',
    top: 85,
    right: 150,
    zIndex: 800,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    boxShadow: '2px 4px 3px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px',
    overflow: 'hidden'
};

function mapStateToProps(state) {
    return {
        isOpen: state.inbox.isOpen
    }
}

export default connect(mapStateToProps, null)(NotificationsWindow);
