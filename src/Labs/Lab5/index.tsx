import React from 'react';
import EncodingParametersInURLs from './EncodingParameterslnURLs';
import EnvironmentVariables from './EnvironmentVariables';
import WorkingWithObjects from './WorkingWithObjects';
import WorkingWithArrays from './WorkingWithArrays';

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function Lab5() {
    return (
        <div>
            <h2>Lab 5</h2>
            <a href={`${REMOTE_SERVER}/lab5`}>Hello</a>
            <EnvironmentVariables />
            <h2>Calculator</h2>
            <EncodingParametersInURLs />
            <WorkingWithArrays />
            <WorkingWithObjects />
        </div>
    );
}
