import React from 'react';
import InputWindow from '../InputWindow';
import TimePicker from 'rc-time-picker';
import moment from 'moment';
import 'rc-time-picker/assets/index.css';
import { connect } from 'react-redux';
import { setEventTime } from '../../../redux/actions';

const TimePick = props => {
    return (
        <InputWindow title='Time'>
            <TimePicker
                showSecond={false} 
                defaultValue={moment().hour(0).minute(0)}
                onChange={time => props.setEventTime(time.format('HH:mm'))}
            />
        </InputWindow>
    );
}

export default connect(null, { setEventTime })(TimePick);
