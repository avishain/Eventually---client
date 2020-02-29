import React from 'react';
import MdCloudUpload from 'react-ionicons/lib/MdCloudUpload';
import { connect } from 'react-redux';
import { setEventRetreive } from '../../../redux/actions';

const UploadButton = ({ eventID, userID, setEventRetreive }) => {

    const myWidget = window.cloudinary.createUploadWidget({
        cloudName: 'dextz7jfo',
        uploadPreset: 'c60xooc0',
        apiKey: '867562551187554'
    }, (error, result) => {

        const body = {
            url: result.info.url,
            uploader: userID
        };

        if (!error && result && result.event === "success") {
            fetch(`https://aqueous-fortress-81697.herokuapp.com/events/image/${eventID}`, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: { "Content-type": "application/json" }
            })
            .then(response => response.text())
            .then(json => setEventRetreive(false))
            .catch(e => console.log(e));
        }
    });

    return (
        <React.Fragment>
            <div style={containerStyle} onClick={() => myWidget.open()}>
                <MdCloudUpload color='white' />
                <span style={{ marginLeft: 15, color: 'white' }}>Upload</span>
            </div>
        </React.Fragment>
    );
}

const containerStyle = {
    padding: '8px 40px',
    backgroundColor: '#231F20',
    borderRadius: 5,
    maxWidth: 200,
    marginBottom: 20,
    position: 'relative',
    cursor: 'pointer'
}

export default connect(null, { setEventRetreive })(UploadButton);
