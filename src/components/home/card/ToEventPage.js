import React from 'react';
import { NavLink } from 'react-router-dom';

const ToEventPage = props => {
    return (
        <NavLink to={`/Event/${props.id}`} style={containerStyle}>
            <div style={textStyle}>To event page</div>
        </NavLink>
    );
}
const containerStyle = {
    position: 'absolute',
    width: '40%',
    height: '40px',
    bottom: '20px',
    right: '30px',
    background: '#67366B',
    borderRadius: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    cursor: 'pointer'
}

const textStyle = {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: '14px',
    color: 'white'
}

export default ToEventPage;
