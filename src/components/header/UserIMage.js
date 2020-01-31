import React from 'react';
var FontAwesome = require('react-fontawesome')

const UserImage = () => {
    return (
        <div style={containerStyle}>
            <FontAwesome name="chevron-down" size='15px' style={downStyle} />
            <img src={'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg'} alt='' style={imageStyle} />
        </div>
    );
}
const containerStyle = {
    position: 'absolute',
    top: '25px',
    right: '30px',
    alignItems: 'center',
    display: 'flex'
}

const downStyle = {
    color: 'rgb(230,230,230)',
    marginRight: 5
}

const imageStyle = {
    height: '50px',
    width: '50px',
    borderRadius: '25px',
    objectFit: 'cover',

};

export default UserImage;
