import React from 'react';
import ReactDOM from 'react-dom';

function Person(){
    return (
        <div class='Person'>
            <h1>Mandla</h1>
            <p>Your age: 28</p>
        </div>
    );
}

ReactDOM.render(<Person/>, 
document.querySelector('#'))
