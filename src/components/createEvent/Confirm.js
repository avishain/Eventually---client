import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ConfirmPageButton from './ConfirmPageButton'
import { connect } from 'react-redux';
import * as moment from 'moment';

const Confirm = ({ eventDetails }) => {
    
    const { title, date, time } = eventDetails;
    const formmatedDate = moment(date).format('dddd, MMMM Do YYYY');
    const eventTime = `${formmatedDate} at ${time}`;

    return (
        <div style={{ width: '100%', marginBottom: 30 }}>
            <div className="EventConfirmationMainMenu" style={containerStyle}>
                <div style={{ height: '100%', backgroundColor: 'rgba(0,0,0,.5)', position: 'relative' }}>
                    <div style={titleStyle}>
                        <h1 style={{ fontSize: 25 }}>{title.toUpperCase()}</h1>
                        <h2 style={{ fontSize: 20 }}>{eventTime}</h2>
                    </div>
                    <div style={{ display: 'flex', position: 'absolute', right: 30, bottom: 30 }} >
                        <ConfirmPageButton text="Attend" />
                        <ConfirmPageButton text="Cannot attend" />
                    </div>
                </div >
            </div>
        </div>
    );
}

const containerStyle = {
    boxSizing: 'border-box',
    boxShadow: '10px 10px 10px rgba(103, 54, 107, 0.15)',
    borderRadius: 4,
    height: 400
}

const titleStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    textAlign: 'left',
    padding: '60px',
    color: 'white'
}

function mapStateToProps(state) {
    return {
        eventDetails: state.createEvent
    }
}

export default connect(mapStateToProps,null)(Confirm);
