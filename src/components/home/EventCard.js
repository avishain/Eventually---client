import React from 'react';
import Title from './card/Title';
import Info from './card/Info';
import ToEventPage from './card/ToEventPage';
import * as moment from 'moment';

const EventCard = ({ event }) => {
    const { name, time, profileImage, _id } = event;
    const title = name;

    const subTitle = moment(time).format('dddd, DD/MM/YYYY') + ' at ' + moment(time).format('HH:mm');

    return (
        <div style={containerStyle}>
            <div style={{ width: '50%', height: '100%', position: 'relative' }}>
                <Title {...{ title, subTitle }} />
                <Info participants={12} photos={82} messages={14} />
                <ToEventPage id={_id} />
            </div>
            <img style={imageStyle} src={profileImage} alt='barbeque' />
        </div>
    );
}
const containerStyle = {
    width: '100%',
    height: '300px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #E5E5E5',
    boxShadow: '1px 2px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px',
    marginBottom: '50px',
    display: 'flex',
    flexDirection: 'row'
}

const imageStyle = {
    marginRight: '0px',
    display: 'flex',
    height: '100%',
    width: '50%',
    objectFit: 'cover',
    borderRadius: '0px 10px 10px 0px',
    border: '4px solid #FFFFFF',
    boxSizing: 'border-box'
}

export default EventCard;
