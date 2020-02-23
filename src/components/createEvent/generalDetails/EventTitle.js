import React, { useState } from 'react';
import InputWindow from '../InputWindow';
import { connect } from 'react-redux';
import { setEventTitle } from '../../../redux/actions';

const EventTitle = ({ setEventTitle }) => {

    const [title, setTitle] = useState('');

    const updateTitleText = event => {
        setTitle(event.target.value);
        setEventTitle(event.target.value);
    }

    return (
        <InputWindow title='Title'>
            <input
                value={title}
                type="text"
                placeholder="Enter event title here"
                style={inputStyle}
                onChange={text => updateTitleText(text)}
            />
        </InputWindow>
    );
}

const inputStyle = {
    fontWeight: '500',
    display: 'flex',
    border: 'none',
    borderBottom: '1px solid grey',
    width: '100%'
}

export default connect(null, { setEventTitle})(EventTitle);
