import React from 'react';
import IosCheckmarkCircle from 'react-ionicons/lib/IosCheckmarkCircle';

const FriendView = ({ name, email, profileImage, isInvited, onClick, index }) => {
    return (
        <React.Fragment>
            {
                index !== 0 && <div style={{ height: 1, backgroundColor: 'rgb(180,180,180)', width: '100%' }} />
            }
            <div onClick={() => onClick(index)} style={{ ...containerStyle, backgroundColor: isInvited ? 'rgba(0,255,0,0.15)' : null }} >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={profileImage} alt={name} style={imgStyle} />
                    <span>{name} | {email}</span>
                </div>
                {
                    isInvited && <IosCheckmarkCircle color='green' fontSize='30' beat />
                }
            </div>
        </React.Fragment>
    );
}

const containerStyle = {
    padding: 15,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer'
}

const imgStyle = {
    height: 40,
    width: 40,
    borderRadius: 20,
    objectFit: 'cover',
    marginRight: 20
}

export default FriendView;
