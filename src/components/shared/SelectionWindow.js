import React from 'react';
import Top from './selectionWindow/Top';

const SelectionWindow = ({ title, subtitle, children }) => {
    return (
        <div style={containerStyle}>
            <Top {...{ title, subtitle }} />
            {children}
        </div>
    );
}

const containerStyle = {
    width: '100%',
    backgroundColor: 'white',
    boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 8,
    margin: '30px 0',
    overflow: 'hidden'
}

export default SelectionWindow;
