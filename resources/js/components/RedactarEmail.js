import React from 'react';
import RedactarFormulario from './RedactarFormulario';

const RedactarEmail = () => {

    const [mostrarRedactar, setMostrarRedactar] = React.useState(false);

    const mostrarFormulario = () => {
        setMostrarRedactar(true);
    }

    const ocultarFormulario = () => {
        setMostrarRedactar(false);
    }

    return (
        <div>
            <button className="btn btn-success" onClick={mostrarFormulario}>Redactar</button>
            <div className="row">
                {mostrarRedactar ? <RedactarFormulario ocultar={ocultarFormulario}/> : null }
            </div>
        </div>
    )
}

export default RedactarEmail;