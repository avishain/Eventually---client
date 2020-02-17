import React from 'react';
import { connect } from 'react-redux';
import Top from './notificationsWindow/Top';

// import { Route, Link } from 'react-router-dom';

const NotificationsWindow = (props) => {
    return (
        <div style={{ ...containerStyle, height: props.isOpen ? 300 : 0 }}>
            <Top />
        </div>
    );
}

const containerStyle = {
    width: '350px',
    transition: 'height .4s',
    position: 'absolute',
    top: 30,
    right: -40,
    zIndex: 800,
    display: 'flex',
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
