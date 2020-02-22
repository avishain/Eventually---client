import React, { useState } from 'react';
import { connect } from 'react-redux';
import { selectEventDateSelection } from '../../../redux/actions';
import IosRadioButtonOff from 'react-ionicons/lib/IosRadioButtonOff';
import IosRadioButtonOn from 'react-ionicons/lib/IosRadioButtonOn';
import * as moment from 'moment';

const TableRow = props => {

    const [selected, setSelected] = useState(1);

    const getFormattedDateUpper = () => moment(props.date).format('MMMM Do, YYYY');
    const getFormattedDateLower = () => moment(props.date).format('dddd, HH:mm');

    const getAppearance = i => selected === i ? <IosRadioButtonOn style={{ cursor: 'pointer' }} color='#67366B' /> : <IosRadioButtonOff style={{ cursor: 'pointer' }} />;

    const setSelection = i => {
        setSelected(i);
        props.selectEventDateSelection({ index: props.index, newValue: i });
    }

    return (
        <tr>
            <td style={textStyle}>{getFormattedDateUpper()}<br />{getFormattedDateLower()}</td>
            <td onClick={() => setSelection(0)}>{getAppearance(0)}</td>
            <td onClick={() => setSelection(1)}>{getAppearance(1)}</td>
            <td onClick={() => setSelection(2)}>{getAppearance(2)}</td>
        </tr>
    );
}

const textStyle = {
    textAlign: 'left',
    fontSize: 12,
    color: '#666666',
    padding: '15px 0'
}

export default connect(null, { selectEventDateSelection })(TableRow);
