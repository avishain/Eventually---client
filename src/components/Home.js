import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import CreateEventButton from './home/CreateEventButton';
import EventCard from './home/EventCard';

function App() {
    return (
            <Container style={{ width: '60%' }}>
                <CreateEventButton />
                <EventCard />
                <EventCard />
                <EventCard />
            </Container>
    );
}

export default App;
