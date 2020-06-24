import React from 'react';
// import ReactDom from 'react-dom';

const person = (props) => {
    return (
    <p>I am a {props.name} and I am {props.age} years old.</p>
    );
};

export default person;