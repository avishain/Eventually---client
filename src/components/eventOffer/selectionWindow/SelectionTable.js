import React, { useState, useEffect } from 'react';
import IosRadioButtonOff from 'react-ionicons/lib/IosRadioButtonOff';
import IosRadioButtonOn from 'react-ionicons/lib/IosRadioButtonOn';
import { connect } from 'react-redux';
import TableRow from './TableRow';

const SelectionTable = props => {
    const [ready, setReady] = useState(false);
    const [dates, setDates] = useState();

    useEffect(() => {
        if (!ready) {
            fetch(`https://aqueous-fortress-81697.herokuapp.com/events/${props.eventID}`)
                .then(response => response.json())
                .then(event => {
                    setDates(event.timeSelection.dates);
                    setReady(true);
                })
                .catch(error => console.log(error));
        }
    })

    return (
        ready &&
        <div style={containerStyle}>
            <table style={{ width: '100%' }}>
                <tbody>
                    <tr>
                        <th></th>
                        <th style={titleStyle}>Available</th>
                        <th style={titleStyle}>Not Available</th>
                        <th style={titleStyle}>Might not be Available</th>
                    </tr>
                    {dates.map((date, key) => <TableRow {...{ date, key }} />)}
                </tbody>
            </table>
        </div>
    );
}

const containerStyle = {
    width: '100%',
    display: 'flex',
    padding: '40px 80px'
}

const titleStyle = {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#141923'
}

function notification(state) {
    return {
        eventID: state.inbox.selectedNotification.event
    }
}

export default connect(notification, null)(SelectionTable);
