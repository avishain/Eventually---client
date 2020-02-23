import React from 'react';
import Button from './createEvent/Button';
import PageNav from './createEvent/PageNav';
import Container from 'react-bootstrap/Container';
import General from './createEvent/General';
import Participants from './createEvent/Participants';
import Confirm from './createEvent/Confirm';
import { connect } from 'react-redux';

const CreateEvent = ({ view }) => {

    const getView = view => {
        switch(view) {
            case 0:
                return <General />;
            case 1:
                return <Participants />;
            case 2:
                return <Confirm />;
            default:
                return <General />;
        }
    }

    return (
        <Container style={{ width: '60%', marginTop: 50 }}>
            <PageNav title="General details" className="pageNav" />
            { getView(view) }
            <Button view={ view + 1 } />
        </Container>
    );
}

function mapStateToProps(state) {
    return {
        view: state.createEvent.view
    }
}

export default connect(mapStateToProps, null)(CreateEvent);
