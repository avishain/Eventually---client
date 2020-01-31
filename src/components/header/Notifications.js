import React from 'react';
var FontAwesome = require('react-fontawesome')

const Notifications = () => {

    const onClick = () => {
        alert('onClick!')
    }
    
    return (
        <a href='\#' style={containerStyle} {...{onClick}}>
            <FontAwesome 
                name="bell"
                size='2x'
                style={bellStyle}
            />
            <div style={notificationsContainer}>
                <div style={{ fontSize: '10px', color: 'rgba(240,240,240,1)', fontWeight: 'bold' }} >2</div>
            </div>
        </a>
    )
}

const containerStyle = {
    position: 'absolute',
    padding: 10,
    width: '40px',
    height: '45px',
    right: '190px',
};

const notificationsContainer = {
    position: 'absolute',
    display: 'flex',
    right: 5,
    bottom: 10,
    height: 20,
    width: 20,
    borderRadius: 10, 
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
}

const bellStyle = {
    color: 'rgb(230,230,230)',
    height: 30, 
    width: 40
}

export default Notifications;
