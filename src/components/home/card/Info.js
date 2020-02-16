import React from 'react';


const InfoItem = props => {
    return (
        <div style={{ flex: 1, borderRight: props.index === 2 ? 'none' : '1px #89a8b0 solid' }}>
            <div style={amountStyle}>{props.item.amount}</div>
            <div style={titleStyle}>{props.item.title}</div>
        </div>
    );
}

const Info = props => {
    const { participants, photos, messages } = props;
    
    const items = [
        { title: 'attendees', amount: participants },
        { title: 'photos', amount: photos },
        { title: 'messages', amount: messages }
    ];

    return (
        <div className="container" style={containerStyle}>
            { items.map((item, key) => <InfoItem {...{ item, key }} index={key} />) }
        </div>
    );
}
const containerStyle = {
    position: 'relative',
    top: '85px',
    width: '70%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const amountStyle = {
    fontWeight: 800,
    fontSize: '23px'
}

const titleStyle = {
    fontFamily: 'Rubik',
    fontWeight: 300,
    fontSize: '15px'
}

export default Info;
