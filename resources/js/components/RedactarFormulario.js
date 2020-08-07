import React from 'react';
import InputEmail from './InputEmail';
import Axios from 'axios';

const RedactarFormulario = (props) => {

    const [to, setTo] = React.useState(props.to ? props.to : []);
    const [cc, setCc] = React.useState(props.cc ? props.cc : []);
    const [cco, setCco] = React.useState(props.cco ? props.cco : []);
    const [subject, setSubject] = React.useState(props.subject ? props.subject : '');
    const [body, setBody] = React.useState(props.body ? props.body : '');
    const [emailEnviadoCorrectamente, setEmailEnviadoCorrectamente] = React.useState(false);
    const [error, setError] = React.useState(null);

    const enviarEmail = async () => {
        try {
            const response = await Axios.post(
                'api/mail',
                { to, cc, cco, subject, body }
            );
            if (response.data.success) setEmailEnviadoCorrectamente(true);
        } catch (error) {
            setError(error.response.data.message);
        }
    }

    if (emailEnviadoCorrectamente) {
        return (
            <div className="container text-center">
                <div className="alert alert-success" role="alert">
                    <h3 className="alert-heading">Mensaje enviado</h3>
                    <button className="btn btn-primary" onClick={props.ocultar}>Cerrar</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">New Mail</div>
                            <div className="card-body">
                                <div className={error ? "alert alert-warning" : "d-none"} role="alert">
                                    {error}
                                </div>
                                <div className="form-group">
                                    <label>To<sup> *</sup></label>
                                    <InputEmail emails={to} actualizar={setTo} />
                                </div>
                                <div className="form-group">
                                    <label>Cc</label>
                                    <InputEmail emails={cc} actualizar={setCc} />
                                </div>
                                <div className="form-group">
                                    <label>Cco</label>
                                    <InputEmail emails={cco} actualizar={setCco} />
                                </div>
                                <div className="form-group">
                                    <label>Subject<sup> *</sup></label>
                                    <input type="text" className="form-control" value={subject} onChange={(e) => setSubject(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Body<sup> *</sup></label>
                                    <textarea type="text" className="form-control" value={body} onChange={(e) => setBody(e.target.value)} />
                                </div>
                                <div className="float-right">
                                    <button className="btn btn-secundary" onClick={props.ocultar}>Cancelar</button>
                                    <button className="btn btn-primary" onClick={enviarEmail}>Enviar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RedactarFormulario;