import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated/';
import 'bootstrap/dist/css/bootstrap.css';
import SelectionWindow from '../shared/SelectionWindow';

const options = [
    { value: 'elad', label: 'elad | www@www,com' },
    { value: 'eli', label: 'eli | wwwWww.com' },
    { value: 'vanilla', label: 'Vanilla' }
]

const Participants = () => {
    return (
        <div style={{ width: '100%' }}>
            <SelectionWindow title='Invite people to event' >
                <div style={{ marginBottom: 300, padding: 50 }}>
                    <Select options={options} isMulti placeholder="name or email" noOptionsMessage={() => "No users found"} components={makeAnimated()} className="friendsSelect" />
                </div>
            </SelectionWindow>
        </div>
    );
}

export default Participants;
