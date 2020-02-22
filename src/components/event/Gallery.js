import React from 'react';
import './Gallery.css';
import UploadButton from './UploadButton';

const Image = ({ src }) => {
    return (
        <div className="responsive" style={{ cursor: 'pointer' }}>
            <div className="gallery">
                <img {...{ src }} alt="" style={{ objectFit: 'cover' }} />
            </div>
        </div>
    );
}


const Gallery = ({ Images }) => {

    return (
        <div style={containerStyle}>
            <UploadButton />
            {Images.map((image, key) => <Image src={image.url} {...{ key }} />)}
        </div>
    );
}

const containerStyle = {
    margin: '10vh 2%'
}

export default Gallery;
