import React from 'react';

const EventTitle = props => {
    return (
        <div style={containerStyle}>
            <h2 style={titleStyle}>{props.title}</h2>
            {props.children}
        </div>
    );
}

const containerStyle = {
    width: '100%',
    padding: '30px',
    backgroundColor: 'white',
    boxShadow: '2px 3px 6px rgba(0, 0, 0, 0.25)', 
    marginBottom: 15
}

const titleStyle = {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: 'Heebo'
}

export default EventTitle;
