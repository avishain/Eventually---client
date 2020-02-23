import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import SelectionWindow from './shared/SelectionWindow';
import Buttons from './eventOffer/Buttons';
import InstructionPanel from './eventOffer/InstructionPanel';
import SelectionTable from './eventOffer/SelectionTable';

const EventOffer = () => {
    return (
        <Container style={{ width: '60%' }}>
            <h1 style={titleStyle}>Date selection</h1>
            <SelectionWindow title='Event description' subtitle='"Beach, bears, barbeque and getting some tan..."' >
                <InstructionPanel />
                <SelectionTable />
            </SelectionWindow>
            <Buttons />
        </Container>
    );
}

const titleStyle = {
    marginTop: 50,
    textAlign: 'left',
    fontSize: 22,
    color: '#141923',
    fontWeight: 'bold',
    fontFamily: 'Heebo'
}

export default EventOffer;
