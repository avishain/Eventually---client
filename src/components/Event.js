import React, { useState, useEffect } from 'react';
import SideNavBar from './event/SideNavBar';
import General from './event/General';
import Gallery from './event/Gallery';
import { connect } from 'react-redux';

const Event = props => {
    const [event, setEvent] = useState(null);
    const [eventRetrived, setEventRetreive] = useState(false);

    useEffect(() => {
        if (!eventRetrived) {
            fetch(`https://aqueous-fortress-81697.herokuapp.com/events/${props.match.params.id}`)
                .then(res => res.json())
                .then(data => {
                    setEvent(data);
                    setEventRetreive(true);
                })
                .catch(e => {
                    console.log(e);
                    alert('Problem occured while retreiving event data');
                })
        }
    }, [event, eventRetrived])
    
    if(eventRetrived) {
        var { name, profileImage, admin, time, type, Images } = event;
    }

    const getView = selection => {
        switch(selection) {
            case 0:
                return <General {...{ name, admin, time, type }} />;
            case 1:
                return <p>Messages board</p>;
            case 2:
                return <p>Participants</p>;
            case 3:
                return <Gallery {...{ Images }} />;
            default:
                return <General {...{ name, admin, time, type }} />;
        }
    }

    return (
        eventRetrived &&
        <div style={containerStyle}>
            <SideNavBar image={profileImage} title={name} />
            { getView(props.selectedView) }
        </div>
    );
}

const containerStyle = {
    display: 'flex',
    height: 'calc(100vh - 150px)'
}

function mapStateToProps(state) {
    return {
        selectedView: state.event.eventPageCurrentTab
    }
}

export default connect(mapStateToProps, null)(Event);
