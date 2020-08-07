import React from 'react';

const InputEmail = (props) => {

    const validarEmail = (email) => {
        /* https://emailregex.com/ */
        const patron = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return patron.test(email);
    }

    const agregarEmail = (e) => {
        const email = e.target.value;
        if ((e.key === 'Enter' || e.key === ' ') && email !== '' && validarEmail(email)) {
            props.actualizar([...props.emails, email])
            e.target.value = '';
        }
    }

    const descartarEmail = (index) => {
        props.emails.splice(index, 1);
        props.actualizar([...props.emails])
    }

    return (
        <div>
            <input type="email" className="form-control" onKeyDown={agregarEmail} />
            <div>
                {props.emails.map((email, index) =>
                    <span key={index} className="label-email">
                        <span className="label-email-close" onClick={() => descartarEmail(index)}>x</span>
                        <span>{email}</span>
                    </span>
                )}
            </div>
        </div>
    )
}

export default InputEmail;
