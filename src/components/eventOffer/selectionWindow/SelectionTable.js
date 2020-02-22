import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { resetEventDateSelection } from '../../../redux/actions';
import TableRow from './TableRow';

const SelectionTable = props => {

    const [ready, setReady] = useState(false);
    const [wasSelectionReset, selectionReset] = useState(false);
    const [dates, setDates] = useState();

    useEffect(() => {
        if (!ready && props.eventID) {
            fetch(`https://aqueous-fortress-81697.herokuapp.com/events/${props.eventID}`)
                .then(response => response.json())
                .then(event => {
                    setDates(event.timeSelection.dates);
                    setReady(true);
                })
                .catch(error => console.log(error));
        }
        if (!wasSelectionReset && ready) {
            props.resetEventDateSelection(dates);
            selectionReset(true);
        }
    }, [ready, wasSelectionReset, props, dates]);

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
                    {dates.map((date, key) => <TableRow {...{ date, key }} index={key} />)}
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

function mapStateToProps(state) {
    return {
        eventID: state.inbox.selectedNotification.event
    }
}

export default connect(mapStateToProps, { resetEventDateSelection })(SelectionTable);
