import React, { useEffect } from 'react';
import EventTitle from './generalDetails/EventTitle'
import EventDate from './generalDetails/EventDate'
import EventType from './generalDetails/EventType'
import DatePicker from './generalDetails/DatePicker';
import TimePick from './generalDetails/TimePick';

const General = () => {
    return (
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
            <div style={{ width: '56%' }} id='left'>
                <EventTitle />
                <EventDate />
                <EventType />
            </div>
            <div style={{ width: '42%' }} id='right'>
                <DatePicker />
                <TimePick />
            </div>
        </div>
    );
}

export default General;
