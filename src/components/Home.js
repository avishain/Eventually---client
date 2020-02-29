import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import Container from 'react-bootstrap/Container';
import CreateEventButton from './home/CreateEventButton';
import EventCard from './home/EventCard';

const Home = props => {

    const [eventsReady, setEventsReady] = useState(false);
    const [events, setEvent] = useState();

    useEffect(() => {
        if (!eventsReady && props.userEvents.length ) {
            let query = `https://aqueous-fortress-81697.herokuapp.com/events/?ids=${props.userEvents[0]}`;
            for (let i = 1; i < props.userEvents.length; ++i) {
                query += `&ids=${props.userEvents[i]}`;
            }
            fetch(query)
                .then(res => res.json())
                .then(data => { 
                    setEvent(data)
                    setEventsReady(true);
                })
                .catch(e => console.log(e))
        }
    }, [ eventsReady, props.userEvents ])

    return (
        eventsReady &&
        <Container style={{ width: '60%' }}>
            <CreateEventButton />
            { events.map((event, key) => <EventCard {...{event, key}} />) }
        </Container>
    );
}

function mapStateToProps(state) {
    return {
        userEvents: state.user.data.events
    }
}

export default connect(mapStateToProps, null)(Home);
