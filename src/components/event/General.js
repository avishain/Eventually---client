import React, { useState, useEffect } from 'react';
import * as moment from 'moment';

const Info = ({ title, value }) => {
    return (
        <div style={{ textAlign: 'left', marginTop: 10 }} >
            <p style={{ marginBottom: 0, fontWeight: 'bold' }}>{title}</p>
            <p style={{ fontWeight: 'lighter' }}>{value}</p>
        </div>
    )
}

const General = ({ name, admin, time, type }) => {
    const [adminName, setAdminName] = useState();
    const [retreived, setRetreived] = useState(false);

    const dateFormat = moment(time).format('dddd, MMMM Do, YYYY');
    const hourFormat = moment(time).format('HH:mm');

    useEffect(() => {
        if (!retreived) {
            console.log('5e2616c84f1ce248f9fd09e3', admin);
            fetch(`https://aqueous-fortress-81697.herokuapp.com/users/${admin}`)
                .then(response => response.json())
				.then(data => {
                    setAdminName(data.name);
                    setRetreived(true);
                })
                .catch(e => console.log(e));
        }
    });

    return (
        retreived && 
        <div style={containerStyle}>
            <h1 style={titleStyle}>{name}</h1>
            <Info title='Event type' value={type} />
            <Info title='Admin' value={adminName} />
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
