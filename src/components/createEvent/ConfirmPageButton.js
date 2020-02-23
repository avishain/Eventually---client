import React from 'react';

const ToEventPage = ({ text }) => {
    return (
        <div
            className='confirmButton'
            style={{ ...textStyle, color: text === 'Attend' ? 'green' : 'red' }}
        >
            {text}
        </div>
    );
}

const textStyle = {
    fontFamily: 'Heebo',
    fontSize: 14,
    backgroundColor: 'white',
    borderRadius: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    fontWeight: 'bold',
    padding: '10px 35px',
    marginRight: 15
}

export default ToEventPage;
