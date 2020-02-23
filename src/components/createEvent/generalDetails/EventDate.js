import React from 'react';
import InputWindow from '../InputWindow';
import { connect } from 'react-redux';
import { setDateSelectionType } from '../../../redux/actions';

const RadioInput = ({ value, onClick }) => {
    return (
        <div>
            <input style={{ marginLeft: 25, marginRight: 8 }} type="radio" {...{ value, onClick }} name='dateSelection' />
            <label>{value}</label>
        </div>
    )
}

const EventDate = ({ setDateSelectionType }) => {

    const updateDateType = date => setDateSelectionType(date.target.value);

    return (
        <InputWindow title='Date Selection'>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <RadioInput value='Self' name='Self' onClick={updateDateType} />
                <RadioInput value='Public' name='Public' onClick={updateDateType} />
            </div>
        </InputWindow>
    );
}

export default connect(null, { setDateSelectionType })(EventDate);
