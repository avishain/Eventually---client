import React from 'react';
import MdCloudUpload from 'react-ionicons/lib/MdCloudUpload';

const UploadButton = () => {

    const myWidget = window.cloudinary.createUploadWidget({
        cloudName: 'dextz7jfo',
        uploadPreset: 'c60xooc0',
        apiKey: '867562551187554'
    }, (error, result) => {
        if (!error && result && result.event === "success") {
            console.log('Done! Here is the image url: ', result.info.url);
        }
    });
    
    return (
        <React.Fragment>
            <div style={containerStyle} onClick={() => myWidget.open()}>
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
