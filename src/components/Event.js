import React, { useState, useEffect } from 'react';
import SideNavBar from './event/SideNavBar';
import General from './event/General';
import Gallery from './event/Gallery';
import MessagesBoard from './event/MessagesBoard';
import { connect } from 'react-redux';

const Event = ({ userID, match, selectedView }) => {

    const [event, setEvent] = useState(null);

    const eventID = match.params.id;

    useEffect(() => {
        if (event === null) {
            fetch(`https://aqueous-fortress-81697.herokuapp.com/events/${eventID}`)
                .then(res => res.json())
                .then(data => { setEvent(data) })
                .catch(e => {
                    console.log(e);
                    alert('Problem occured while retreiving event\'s data');
                })
        }
    })

    if (event !== null) {
        var { name, profileImage, admin, time, type, Images, Messages } = event;
    }

    const getView = selection => {
        switch (selection) {
            case 0:
                return <General {...{ name, admin, time, type }} />;
            case 1:
                return <MessagesBoard {...{ Messages }} />;
            case 2:
                return <p>Participants</p>;
            case 3:
                return <Gallery {...{ Images, eventID, userID }} />;
            default:
                return <General {...{ name, admin, time, type }} />;
        }
    }

    return (
        event !== null &&
        <div style={containerStyle}>
            <SideNavBar image={profileImage} title={name} />
            {getView(selectedView)}
        </div>
    );
}

const containerStyle = {
    display: 'flex',
    height: 'calc(100vh - 150px)'
}

function mapStateToProps(state) {
    return {
        selectedView: state.event.eventPageCurrentTab,
        userID: state.user.data._id
    }
}

export default connect(mapStateToProps, null)(Event);
