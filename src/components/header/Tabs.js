import React from 'react';

const tabs = [
    { title: 'Events', link: '#\\' },
    { title: 'Friends', link: '#\\' },
    { title: 'Groups', link: '#\\' },
    { title: 'Ideas', link: '#\\' }
]

const Tab = tab => {
    const [fontSize, setFontSize] = React.useState('17px');
    const [fontWeight, setFontWeight] = React.useState('normal');
    const { link, title } = tab.tab;

    const mouseEnter = () => {
        setFontWeight('bold');
        setFontSize('19px');
    }

    const mouseLeave = () => {
        setFontWeight('normal');
        setFontSize('17px');
    } 

    return (
        <div style={tabStyle}>
            <a href={link} style={{...aStyle, fontSize, fontWeight }} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>{title}</a>
        </div>
    )
}

const Tabs = () => {
    return (
        <div style={{ marginLeft: 110, display: 'flex', flexDirection: 'row' }}>
            {tabs.map((tab, key) => <Tab {...{ tab, key }} />)}
        </div>
    );
}

const tabStyle = {
    height: '100px',
    width: '120px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
};

const aStyle = {
    textDecoration: 'none',
    fontFamily: 'Calibri',
    color: '#E5E5E5'
};


export default Tabs;
