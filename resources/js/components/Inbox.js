import React from 'react';
import ReactDOM from 'react-dom';
import RedactarEmail from './RedactarEmail';

const Inbox = () => {

    return (
        <div className="container">
            <h1>Inbox</h1>
            <RedactarEmail />
        </div>
    )
}

export default Inbox;

if (document.getElementById('inbox')) {
    ReactDOM.render(<Inbox />, document.getElementById('inbox'));
}