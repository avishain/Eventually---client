import React from 'react';
import './App.css';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Container from 'react-bootstrap/Container';
import CreateEventButton from './components/home/CreateEventButton';
import EventCard from './components/home/EventCard';

function App() {
    return (
        <div className="App" style={{ backgroundColor: '#F3EBE3' }} >
            <Header />
            <Container style={{ width: '60%' }}>
                <CreateEventButton />
                <EventCard />
                <EventCard />
                <EventCard />
            </Container>
            <Footer />
        </div>
    );
}

export default App;
