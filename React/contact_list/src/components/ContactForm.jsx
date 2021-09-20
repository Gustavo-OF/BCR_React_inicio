import React from "react";
import Select from "react-select";
import { Label, InputText, ContactsForm } from "./ui/form/form";

const contactTypeOptions = [
    {value: "phone", label: "Telefone"},
    {value: "email", label: "E-mail"}
]

export default function ContactForm({type, value, onChangeType, onChangeValue}) { 
    const typeObject = contactTypeOptions.find(t => t === type )
    function handleTypeChange(e) {
        onChangeType(e.value)
    }
    return (
        <ContactsForm>
            <Label>Tipo</Label>
            <Select 
                options={contactTypeOptions} 
                value={typeObject}
                onChange={handleTypeChange}
            />
            <InputText value={value} onChange={e => onChangeValue(e.target.value)}/>
        </ContactsForm>
    )
} 