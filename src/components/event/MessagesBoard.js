import React from 'react';
import Message from './messages/Message';
import bgImage from '../../assets/images/mbbg.jpg';

const MessagesBoard = ({ Messages }) => {
    return (
        <div style={bgImageStyle}>
            <div style={containerStyle}>
                {Messages.map((message, key) => <Message {...{ message, key }} index={key} />)}
            </div>
        </div>
    );
}

const bgImageStyle = { 
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex', 
    flex: 1 
}

const containerStyle = {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    padding: '20px 2%',
    backgroundColor: 'rgba(243,235,227,.7)'
}

export default MessagesBoard;
