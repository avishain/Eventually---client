import React from 'react';

const tabs = [
    { title: 'About', url: "#\\" },
    { title: 'Contact us', url: "#\\" },
    { title: 'Privacy', url: "#\\" },
    { title: 'Careers', url: "#\\" }
]

const Tab = props => {
    const { url, title } = props.tab;
    return (
        <a href={url} style={{ flex: 1, fontSize: '1em', color: '#F5F5F5' }}>
            {title}
        </a>
    )
}

const Tabs = () => {
    return (
        <nav style={containerStyle}>
            {tabs.map((tab, key) => <Tab {...{ tab, key }} />)}
        </nav>
    );
}

const containerStyle = {
    marginLeft: 150,
    width: '40%',
    display: 'flex',
};

export default Tabs;
