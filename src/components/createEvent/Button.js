import React from 'react';
import IosArrowRoundForward from 'react-ionicons/lib/IosArrowRoundForward'
import { connect } from 'react-redux';
import { setCreateEventView } from '../../redux/actions';

const Button = ({ view, setCreateEventView, name, admin, type }) => {
    
    const onClick = view => {
        if(view !== 3) {
            setCreateEventView(view);
        }
        else {
            const body = {
                name, admin, type, 
                participants: [admin], 
                invitations: ["5e2616c84f1ce248f9fd09e4","5e2616c84f1ce248f9fd09e5","5e2616c84f1ce248f9fd09e6"]
            }

            fetch(`http://aqueous-fortress-81697.herokuapp.com/events/`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { "Content-type": "application/json" }
        })
            .then(response => response.json())
            .then(json => {
                console.log(json);
                alert('Event was created successfully: ' + json);
            })
            .catch(e => console.log(JSON.stringify(body), e));

        }
    }

    return (
        <div onClick={() => onClick(view)} style={containerStyle}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ marginRight: 10, color: 'white' }}>Next</div>
				<IosArrowRoundForward color='white' />
            </div>
        </div>
    );
}
const containerStyle = {
    width: 250,
    height: 45,
    marginBottom: 50,
    border: '1px solid #C4C4C4',
    boxSizing: 'border-box',
    boxShadow: '6px 6px 10px rgba(103, 54, 107, 0.15)',
    borderRadius: 6,
    background: 'linear-gradient(284.05deg, #BA7CF7 0%, #67366B 44.91%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
}

function mapStateToProps(state) {
    return {
        name: state.createEvent.title,
        admin: state.user.data._id,
        type: state.createEvent.eventType
    }
}

export default connect(mapStateToProps, { setCreateEventView })(Button);
