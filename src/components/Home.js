import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import CreateEventButton from './home/CreateEventButton';
import EventCard from './home/EventCard';

const Home = () => {
    return (
        <Container style={{ width: '60%' }}>
            <CreateEventButton />
            <EventCard />
            <EventCard />
            <EventCard />
        </Container>
    );
}

export default Home;
