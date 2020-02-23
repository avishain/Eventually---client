import React from 'react';
import InputWindow from '../InputWindow';
import TimePicker from 'rc-time-picker';
import moment from 'moment';

const TimePick = () => {

    const updateTime = timeSelected => {
        console.log('timeSelected: ', timeSelected);
    }

    return (
        <InputWindow title='Time'>
            <TimePicker showSecond={false} defaultValue={moment().hour(0).minute(0)} onChange={updateTime} />
        </InputWindow>
    );
}

export default TimePick;
