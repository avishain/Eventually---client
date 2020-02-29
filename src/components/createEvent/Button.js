import React, { useState } from 'react';
import IosArrowRoundForward from 'react-ionicons/lib/IosArrowRoundForward'
import { connect } from 'react-redux';
import { setCreateEventView } from '../../redux/actions';
import Popup from '../shared/Popup';
import { useHistory } from 'react-router-dom';

const Button = ({ view, setCreateEventView, name, admin, type }) => {
    const [success, setSuccess] = useState(false);
    const [failed, setFailed] = useState(false);

    const history = useHistory();

    const onClick = view => {
        if (view !== 3) {
            setCreateEventView(view);
        }
        else {
            const body = {
                name, admin, type,
                participants: [admin],
                invitations: ["5e2616c84f1ce248f9fd09e4", "5e2616c84f1ce248f9fd09e5", "5e2616c84f1ce248f9fd09e6"]
            }

            fetch(`http://aqueous-fortress-81697.herokuapp.com/events/`, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: { "Content-type": "application/json" }
            })
                .then(response => response.json())
                .then(json => {
                    setSuccess(true);
                    window.Email.send({
                        SecureToken: "9ca0c124-b1fa-4d6c-a028-a624e3223f0d",
                        To: `avishainu@gmail.com`,
                        From: "do_not_reply@isp.com",
                        Subject: "Event invitation",
                        Body: `You were invited celebration named: ${name}`
                    }).then(
                        message => alert(message)
                    );
                })
                .catch(e => {
                    console.log(JSON.stringify(body), e);
                    setFailed(true);
                });

        }
    }

    const ButtonContent = () => {
        return view === 3 ?
            <React.Fragment>
                <div style={{ marginRight: 10, color: 'white' }}>Confirm && send invitations</div>
            </React.Fragment> :
            <React.Fragment>
                <div style={{ marginRight: 10, color: 'white' }}>Next</div>
                <IosArrowRoundForward color='white' />
            </React.Fragment>
    }

    return (
        <React.Fragment>
            {success && <Popup type='notification' title='Event was created successfully and invitations were sent to the invited friends' onClick={() => history.push("/")} />}
            {failed && <Popup type='notification' title='Failed to create event.' onClick={() => history.push("/")} />}
            <div onClick={() => onClick(view)} style={{ ...containerStyle, background: view === 3 ? 'green' : 'linear-gradient(284.05deg, #BA7CF7 0%, #67366B 44.91%)' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                    <ButtonContent />
                </div>
            </div>
        </React.Fragment>
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
