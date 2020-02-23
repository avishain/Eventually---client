import React from 'react';
import InputWindow from '../InputWindow';
import Calendar from 'react-calendar';
import { connect } from 'react-redux';
import { setEventDate } from '../../../redux/actions';

const DatePicker = ({ setEventDate }) => {

    const updateDate = date => {
        setEventDate(date);
    }
    
    return (
        <InputWindow title='Date'>
            <Calendar onChange={updateDate} className="Calendar" width='100%'  />
        </InputWindow>
    );
}

export default connect(null, { setEventDate })(DatePicker);
