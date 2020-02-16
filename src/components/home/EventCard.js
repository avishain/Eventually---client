import React from 'react';
import Title from './card/Title';
import Info from './card/Info';
import ToEventPage from './card/ToEventPage';

const EventCard = () => {
    return (
        <div style={containerStyle}>
            <div style={{ width: '50%', height: '100%', position: 'relative' }}>
                <Title title="Celebrating John's birthday" subTitle="Saturday, 21/11/2019 at 17:30" />
                <Info participants={12} photos={82} messages={14} />
                <ToEventPage />
            </div>
            <img style={imageStyle} src='https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F48535668%2F70158655713%2F1%2Foriginal.jpg?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C401%2C4816%2C2408&s=5cd8ad851f2e032e31bea87450f07e26' alt='barbeque' />
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
