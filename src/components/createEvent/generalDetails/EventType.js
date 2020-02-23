import React from 'react';
import InputWindow from '../InputWindow';
import { connect } from 'react-redux';
import { setEventType } from '../../../redux/actions';

const labels = [
    'Barbeque',
    'Hiking',
    'Birthday',
    'Engagement',
    'Bachelor / Bachelorette',
    'Babyshower'
]

const RadioInput = ({ value, onChange }) => {
    return (
        <div style={{ alignSelf: 'left', textAlign: 'left'}}>
            <input type="radio" name="EventTypeSelect" {...{ value, onChange }} />
            <label style={{ marginLeft: 8 }}>{value}</label>
        </div>
    )
}

const EventType = ({ setEventType }) => {

    const updateEventType = event => setEventType(event.target.value);

    return (
        <InputWindow title='Event Type' >
            { labels.map((value, key) => <RadioInput {...{ value, key }} onChange={updateEventType} /> )}
        </InputWindow>
    );
}

export default connect(null, { setEventType })(EventType);
