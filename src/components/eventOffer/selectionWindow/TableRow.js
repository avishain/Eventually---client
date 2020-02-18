import React from 'react';
import IosRadioButtonOff from 'react-ionicons/lib/IosRadioButtonOff';
import IosRadioButtonOn from 'react-ionicons/lib/IosRadioButtonOn';
import * as moment from 'moment';

const TableRow = props => {

    const getFormattedDateUpper = () => moment(props.date).format('MMMM Do, YYYY');
    const getFormattedDateLower = () => moment(props.date).format('dddd, HH:mm');

    return (
        <tr>
            <td style={textStyle}>{getFormattedDateUpper()}<br />{getFormattedDateLower()}</td>
            <td><IosRadioButtonOn color='#67366B' /></td>
            <td><IosRadioButtonOff /></td>
            <td><IosRadioButtonOff /></td>
        </tr>
    );
}

const textStyle = {
    textAlign: 'left',
    fontSize: 12,
    color: '#666666',
    padding: '15px 0'
}

export default TableRow;
