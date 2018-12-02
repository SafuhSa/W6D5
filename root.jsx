import React from 'react';
import Clock from './clock';
import Tabs from './tabs';
import AutoComplete from './auto';

const names = [
    'Abba',
    'Barney',
    'Barbara',
    'Jeff',
    'Jenny',
    'Sarah',
    'Sally',
    'Xander'
];

const panes = [
    { title: 'one', content: 'I am the first' },
    { title: 'two', content: 'Second pane here' },
    { title: 'three', content: 'Third pane here' }
];

const Root = function () {
    return (
        <div>
            <h2>(root)react is working</h2>
            <Clock />
            <Tabs panes={panes} />
            <AutoComplete names={names} />
        </div>);
};

export default Root;
