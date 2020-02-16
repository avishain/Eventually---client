import React from 'react';

const Title = props => {
    return (
        <div style={containerStyle}>
            <div style={{...textStyle, ...topTitle}}>
                {props.title}
            </div>
            <div style={{...textStyle, ...subTitle}}>
                {props.subTitle}
            </div>
        </div>
    );
}
const containerStyle = {
    position: 'relative',
    top: '40px',
    left: '50px',
    right: '50px'
}

const textStyle = {
    textAlign: 'left',
    color: '#3B3E43'
}

const topTitle = {
    fontFamily: 'Heebo',
    fontWeight: 'bold',
    fontSize: '24px'
}

const subTitle = {
    fontSize: '14px'
}

export default Title;
