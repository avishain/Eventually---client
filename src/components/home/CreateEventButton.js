import React from 'react';
import MdAdd from 'react-ionicons/lib/MdAdd'

const CreateEventButton = () => {
    return (
        <a href='/createEvent/' style={containerStyle}>
            <MdAdd color='white' />
            <div style={{ width: '50%', color: 'white' }}>
                Create event
            </div>
        </a>
    );
}
const containerStyle = {
    width: 250,
    height: 45,
    margin: '50px 0',
    border: '1px solid #C4C4C4',
    boxSizing: 'border-box',
    boxShadow: '6px 6px 10px rgba(103, 54, 107, 0.15)',
    borderRadius: 6,
    background: 'linear-gradient(284.05deg, #BA7CF7 0%, #67366B 44.91%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
}

export default CreateEventButton;
