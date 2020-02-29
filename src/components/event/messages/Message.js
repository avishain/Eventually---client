import React from 'react';
import MessageFrame from './MessageFrame';
import { connect } from 'react-redux';

const Message = ({ message, index, userID }) => {
    const { text, time, writer } = message;
    const isFirst = index === 0;
    const mine = writer === userID;

    return (
        <React.Fragment>
            <MessageFrame {...{ mine, isFirst, time }} >
                {text}
            </MessageFrame>
        </React.Fragment>

    );
}

function mapStateToProps(state) {
    return {
        userID: state.user.data._id
    }
}

export default connect(mapStateToProps, null)(Message);
