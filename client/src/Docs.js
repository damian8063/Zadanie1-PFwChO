import React, { Component } from 'react';
import schema from './schema.png';
import func from './function.png';

export default () => {
    return (
        <div className="container">
            <hr></hr>
            <h3>Schemat budowy systemu</h3>
            <img src={schema} width="100%" alt="dsf" />
            <p>Zadanie wykonane na podsawie laboratorium 9.</p>
           
            <img src={func} width="100%" alt="fsd" />
        </div>
    );
};
