import React from 'react';
import * as moment from 'moment';
import Popup from '../../components/shared/Popup';

const Info = ({ title, value }) => {
    return (
        <div style={{ textAlign: 'left', marginTop: 10 }} >
            <p style={{ marginBottom: 0, fontWeight: 'bold' }}>{title}</p>
            <p style={{ fontWeight: 'lighter' }}>{value}</p>
        </div>
    )
}

const General = ({ name, admin, time, type }) => {

    const dateFormat = moment(time).format('dddd, MMMM Do, YYYY');
    const hourFormat = moment(time).format('HH:mm');

    return (
        <div style={containerStyle}>
            <Popup />
            <h1 style={titleStyle}>{name}</h1>
            <Info title='Event type' value={type} />
            <Info title='Admin' value={admin} />
            <Info title='Date' value={dateFormat} />
            <Info title='Time' value={hourFormat} />
        </div>
    );
}

const containerStyle = {
    padding: '10vh 10%',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
}

const titleStyle = {
    textAlign: 'left',
    fontSize: 30,
    color: '#557077',
    fontWeight: 'bold',
    fontFamily: 'Heebo',
    letterSpacing: '0.15px',
    textShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)'
}

export default General;
