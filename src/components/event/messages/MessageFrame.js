import React from 'react';
import * as moment from 'moment';

const MessageFrame = ({ children, mine, isFirst, time }) => {

    const getStyle = mine ? mineStyle : othersStyle;
    const alignSelf = mine ? 'flex-end' : 'flex-start';
    const marginTop = isFirst ? 0 : 15;

    const timeFormat = time => {
        const timePassed = Date.now() - new Date(time).getTime();
        const todayBeginning = new Date().setHours(0,0,0,0);
        const day = 1000 * 60 * 60 * 24;
        
        if(timePassed > 2 * day) {
            return `${(timePassed/day).toFixed()} days ago`;
        }
        if(timePassed > day || time > todayBeginning ) {
            return 'yesterday';
        }
        return moment(time).format('HH:mm');
    }

    return (
        <div style={{ ...containerStyle, marginTop, alignSelf }}>
            {!mine && <img src={'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg'} alt='' style={imgStyle} />}
            <div style={{ textAlign: 'left' }}>
                <div style={{ ...framStyle, ...getStyle }}>
                    {children}
                </div>
                <span style={{ alignSelf, fontSize: 12, color: 'rgb(150,150,150)' }}>{timeFormat(time)}</span>
            </div>
        </div>
    );
}

const containerStyle = {
    display: 'flex',
    width: 'fit-content',
}

const framStyle = {
    padding: '15px 25px',
    boxShadow: '10px 10px 50px rgba(42, 139, 242, 0.1), 15px 15px 35px rgba(42, 139, 242, 0.05), 10px 10px 25px rgba(42, 139, 242, 0.1)',
    maxWidth: '70%',
    textAlign: 'left'
}

const imgStyle = {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 15,
    objectFit: 'cover'
}

const mineStyle = {
    background: 'white',
    borderRadius: '10px 0px 10px 10px'
}

const othersStyle = {
    background: 'linear-gradient(93.3deg, #60A9F6 0%, #2A8BF2 100%)',
    borderRadius: '0px 10px 10px 10px',
    color: 'white'
}

export default MessageFrame;
