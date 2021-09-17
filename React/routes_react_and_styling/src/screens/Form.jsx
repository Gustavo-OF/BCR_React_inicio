import { func } from "prop-types";
import React, { useState } from "react";
import { Title } from "../components/ui/typography";

function Form() {
    const [email, setEmail ] = useState('');
    const [allowed, setAllowed] = useState(true)
    function handleEmailChange(event) {
        setEmail(event.target.value);
    }
    function handleAllowedChange(event) {
        setAllowed(event.target.checked);
    }
    function handleSubmit(event) {
        event.preventDefault();
        alert(`${email} - ${allowed}`);
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <Title>Inscreva-se na melhor Newsletter de Atendimento do Brasil</Title>
            <p>
                <input 
                    type="email" 
                    value={email} 
                    onChange={handleEmailChange}
                    placeholder="teste@teste.com"
                />
            </p>
            <p>
                <input 
                    type="checkbox" 
                    onChange={handleAllowedChange} 
                    checked={allowed} 
                />
                Aceito receber e-mails.
            </p>
            <button type="submit">
                Enviar
            </button>
        </form>
    )
}

export default Form