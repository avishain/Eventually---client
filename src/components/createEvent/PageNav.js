import React from 'react';
import MdArrowDropright from 'react-ionicons/lib/MdArrowDropright';
import { connect } from 'react-redux';
import { setCreateEventView } from '../../redux/actions';

const tabs = [
    'General details',
    'Participants',
    'Confirmation'
]

const Tab = ({ text, view, setCreateEventView, index }) => {
    return (
        <React.Fragment>
            <div
                style={view === index ? selectedStyle : notSelectedStyle}
                onClick={() => setCreateEventView(index)}
            >
                {text}
            </div>
            { index !== 2 && <MdArrowDropright color='black' style={{ margin: '0 10px' }} />  }
        </React.Fragment>
    )
}

const PageNav = ({ view, setCreateEventView }) => {
    return (
        <div style={{ display: 'flex', marginBottom: 20 }}>
            {tabs.map((text, key) => <Tab {...{ text, view, setCreateEventView, key }} index={key} />)}
        </div >
    );
}

const notSelectedStyle = {
    color: 'grey',
    cursor: 'pointer'
}

const selectedStyle = {
    color: 'black',
    fontWeight: 'bold',
    cursor: 'pointer'
}

function mapStateToProps(state) {
    return {
        view: state.createEvent.view
    }
}

export default connect(mapStateToProps, { setCreateEventView })(PageNav);
