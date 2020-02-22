import React from 'react';
import './Gallery.css';

const Image = ({ src }) => {
    return (
        <div className="responsive" style={{ cursor: 'pointer' }}>
            <div className="gallery">
                <img {...{ src }} alt="" style={{ objectFit: 'cover' }} />
            </div>
        </div>
    );
}

export default Image;
