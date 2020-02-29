import React, { useEffect } from 'react';
import SelectionWindow from '../shared/SelectionWindow';
import { connect } from 'react-redux';
import FriendView from './participants/FriendView';
import { addFriendToSelectionList, setFriendInvitation } from '../../redux/actions';

const Participants = ({ friends, friendsList, addFriendToSelectionList, setFriendInvitation }) => {
    const onClick = index => setFriendInvitation(index);

    useEffect(() => {
        if (friendsList < friends.length) {
            friends.forEach(friend => {
                fetch(`https://aqueous-fortress-81697.herokuapp.com/users/${friend}`)
                    .then(res => res.json())
                    .then(data => {
                        const { name, email, profileImage } = data;
                        addFriendToSelectionList({ name, email, profileImage, isInvited: false });
                    })
                    .catch(e => console.log(e))
            });
        }
    })

    return (
        friendsList.length > 0 && 
        <div style={{ width: '100%' }}>
            <SelectionWindow title='Invite people to event' >
                <div style={{ minHeight: 300, padding: '15px 50px' }}>
                    {
                        friendsList.map((friend, key) => {
                            const { name, email, profileImage, isInvited } = friend;
                            return <FriendView {...{ name, email, profileImage, isInvited, onClick, key }} index={key} />;
                        })
                    }
                </div>
            </SelectionWindow>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        friends: state.user.data.friends,
        friendsList: state.createEvent.friends
    }
}

export default connect(mapStateToProps, { addFriendToSelectionList, setFriendInvitation })(Participants);
