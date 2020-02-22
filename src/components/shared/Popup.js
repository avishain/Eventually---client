import React, { useState } from 'react';
// import MdCloudUpload from 'react-ionicons/lib/MdCloudUpload';

const Button = ({ type }) => {

    const getBackgroundColor = () => {
        switch (type) {
            case 'Done':
                return '#0EB000';
            case 'Back':
                return '#636363';
            case 'Continue':
                return '#67366B';
            default:
                return;
        }
    }

    return (
        <div style={{ ...buttonStyle, backgroundColor: getBackgroundColor() }} >{type}</div>
    )
}

const buttonStyle = {
    padding: '10px 30px',
    boxShadow: '1px 2px 3px rgba(0, 0, 0, 0.3)',
    color: '#EEEEEE',
    fontWeight: 'bold',
    marginRight: 30,
    cursor: 'pointer'
}


const Popup = ({ type, title }) => {
    const [visible, setVisibility] = useState(true);

    return (
        <div style={{ ...containerStyle, display: visible ? 'flex' : 'none' }} onClick={() => setVisibility(!visible)} >
            <div style={boxStyle}>
                {title}
                {
                    type === 'notification' ?
                        <div style={{ display: 'flex', marginTop: 30, justifyContent: 'flex-end' }}>
                            <Button type='Continue' />
                        </div> :
                        <div style={{ display: 'flex', marginTop: 30 }}>
                            <Button type='Done' />
                            <Button type='Back' />
                        </div>
                }
            </div>
        </div>
    );
}

const containerStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,.6)',
    zIndex: 1000,
    justifyContent: 'center',
    alignItems: 'center'
}

const boxStyle = {
    padding: 30,
    backgroundColor: 'white',
    boxShadow: '2px 5px 4px rgba(0, 0, 0, 0.5)',
    maxWidth: '50vw',
    textAlign: 'left',
    fontSize: 13
}

export default Popup;
