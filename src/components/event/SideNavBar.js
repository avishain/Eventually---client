import React, { useState } from 'react';
import IosListBoxOutline from 'react-ionicons/lib/IosListBoxOutline';
import IosText from 'react-ionicons/lib/IosText';
import MdPeople from 'react-ionicons/lib/MdPeople';
import IosImages from 'react-ionicons/lib/IosImages';
import { connect } from 'react-redux';
import { setEventPageCurrentTab } from '../../redux/actions';

const NavTab = ({ index, text, isSelected, onClick }) => {
    const color = isSelected ? '#2A8BF2' : '#707C97';

    const getIcon = index => {
        switch (index) {
            case 0:
                return <IosListBoxOutline {...{ color }} />;
            case 1:
                return <IosText {...{ color }} />;
            case 2:
                return <MdPeople {...{ color }} />;
            case 3:
                return <IosImages {...{ color }} />;
            default:
                return <IosListBoxOutline {...{ color }} />;
        }
    }

    return (
        <div style={{ display: 'flex', marginBottom: 20, cursor: 'pointer' }} {...{ onClick }} >
            {getIcon(index)}
            <p style={{ paddingLeft: 10, color, textTransform: 'uppercase', fontSize: 13, fontWeight: 'bold' }}>{text}</p>
        </div>
    )
}

const SideNavBar = ({ image, title, setEventPageCurrentTab }) => {
    const [selected, setSelected] = useState(0);
    
    const handleTap = i => {
        setSelected(i);
        setEventPageCurrentTab(i);
    }

    return (
        <div style={containerStyle}>
            <img src={image} style={imageStyle} alt={title} />
            <h2 style={titleStyle}>{title}</h2>
            <div style={{ border: '1px solid #E3E3E3', marginBottom: 30 }} />
            <NavTab text='General' index={0} isSelected={selected === 0} onClick={() => handleTap(0)} />
            <NavTab text='message board' index={1} isSelected={selected === 1} onClick={() => handleTap(1)} />
            <NavTab text='participants' index={2} isSelected={selected === 2} onClick={() => handleTap(2)} />
            <NavTab text='gallery' index={3} isSelected={selected === 3} onClick={() => handleTap(3)} />
        </div>
    );
}

const containerStyle = {
    width: 240,
    minWidth: 240,
    height: '100%',
    backgroundColor: 'white',
    padding: 20
}

const imageStyle = {
    width: '100%',
    borderRadius: 15,
    marginBottom: 20
}

const titleStyle = {
    fontSize: 16,
    color: '#666666',
    marginBottom: 30
}

export default connect(null ,{ setEventPageCurrentTab })(SideNavBar);
