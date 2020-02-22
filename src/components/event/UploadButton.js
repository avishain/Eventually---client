import React from 'react';
import MdCloudUpload from 'react-ionicons/lib/MdCloudUpload';
import cloudinary from 'cloudinary-core';
// import useScript from './useScript';

const UploadButton = () => {
    var cl = new cloudinary.Cloudinary({cloud_name: "dextz7jfo", secure: true});

    // useScript("https://widget.cloudinary.com/v2.0/global/all.js");

    return (
        <React.Fragment>
            <div style={containerStyle} id="upload_widget">
                {/* <input id="fileElem" type='file' style={inputStyle} onChange={handleChange} /> */}
                <MdCloudUpload color='white' />
                <span style={{ marginLeft: 15, color: 'white' }}>Upload</span>
            </div>
            <div style={{ display: 'none' }} id="test" />
        </React.Fragment>
    );
}

const containerStyle = {
    padding: '8px 40px',
    backgroundColor: '#231F20',
    borderRadius: 5,
    maxWidth: 200,
    marginBottom: 20,
    position: 'relative'
}

const inputStyle = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    cursor: 'pointer',
    opacity: 0
    // display: 'none'
}

export default UploadButton;
