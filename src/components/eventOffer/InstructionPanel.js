import React from 'react';

const InstructionPanel = () => {
    return (
        <div style={containerStyle}>
            <p style={textStyle}>Please pick the dates you are available in</p>
        </div>
    );
}

const containerStyle = {
    width: '100%',
    height: 75,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    background: '#EEEEEE',
    padding: '0 70px'
}

const textStyle = {
    paddingTop: 11,
    fontSize: 22,
    color: '#141923'
}

export default InstructionPanel;
