import React, { useState } from 'react';
import { connect } from 'react-redux';
import Popup from '../shared/Popup';

const Button = ({ submit, onClick }) => {

    const text = submit ? 'Submit' : 'Irrelevant. I’m not attending';
    const backgroundColor = submit ? '#2A8BF2' : '#557077';

    return (
        <div {...{ onClick }} style={{ ...buttonStyle, backgroundColor }}>{text}</div>
    );
}

const Buttons = ({ userID, dateSelection, dates }) => {
    const [popupVisible, setPopupVisibility] = useState(false);

    const handleSubmit = () => {
        const availableDates = [], maybeDates = [];

        for (let i = 0; i < dateSelection.length; i++) {
            if (dateSelection[i] === 0) {
                availableDates.push(dates[i]);
            } else if (dateSelection[i] === 2) {
                maybeDates.push(dates[i]);
            }
        }

        // const body = {
        //     user: userID,
        //     availableDates: availableDates,
        //     maybeDates: maybeDates,
        //     extraWeight: true
        // }

        const body = {
            user: "5e2616c84f1ce248f9fd09e5",
            availableDates: ["2020-01-18T01:32:41Z", "2020-01-19T01:32:41Z"],
            maybeDates: ["2020-01-24T01:32:41Z"],
            extraWeight: true
        }

        fetch(`https://aqueous-fortress-81697.herokuapp.com/events/suggestion/5e273c234f1ce248f9b1f293/5e29cc9084051d36585e68ce`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: { "Content-type": "application/json" }
        })
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(e => console.log(e));

        setPopupVisibility(true);
    }

    return (
        <div style={containerStyle}>
            {
                popupVisible &&
                <Popup
                    type='notification'
                    title='Your selection was sent. The decision of the final date of the event will be received once all the participants will answe or within 4 days.'
                />
            }
            <Button submit onClick={handleSubmit} />
            <Button submit={false} />
        </div>
    );
}

const containerStyle = {
    display: 'flex'
}

const buttonStyle = {
    display: 'table-caption',
    width: 'auto',
    padding: '12px 80px',
    color: 'white',
    fontSize: 14,
    marginBottom: 100,
    marginRight: 30,
    boxShadow: '2px 2px 4px rgba(0,0,0,.25)',
    borderRadius: 6,
    cursor: 'pointer'
}

function mapStateTpProps(state) {
    return {
        userID: state.user.data._id,
        dateSelection: state.event.dateSelection,
        dates: state.event.dates
    }
}

export default connect(mapStateTpProps, null)(Buttons);
