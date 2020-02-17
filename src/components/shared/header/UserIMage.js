import React from 'react';
import IosArrowDown from 'react-ionicons/lib/IosArrowDown'

const UserImage = props=> {
    return (
        <a href='#\' onClick={() => alert('profile image clicked')} style={containerStyle}>
            <IosArrowDown fontSize='15px' color='rgb(230,230,230)' style={downStyle} />
            <img src={props.imageSource} alt='' style={imageStyle} />
        </a>
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
    marginRight: 5
}

const imageStyle = {
    height: '50px',
    width: '50px',
    borderRadius: '25px',
    objectFit: 'cover',

};

export default UserImage;
