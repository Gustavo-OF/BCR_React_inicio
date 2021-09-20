import React, { Fragment, useState } from "react";
import { Title } from "../ui/Typography"
import { Label, InputText, ContactsForm} from "../ui/form/form";
import ContactForm from "../ContactForm";

const initialStateContact = {
    type: "phone", value: ""
}

const initialState = {
    name: "",
    contacts: [
       initialStateContact
    ]
}


function PersonAdd(){ 
    const [person, setPerson] = useState(initialState);
    function handleTypeChange(type, index) {
        let tmp = [...person.contacts];
        tmp[index] = {...tmp[index], type: type};
        setPerson({...person, contacts: tmp});
    }
    function handleValueChange(value, index){
        let tmp = [...person.contacts];
        tmp[index] = {...tmp[index], value: value};
        setPerson({...person, contacts: tmp})
    }
    return (
        <Fragment>
            <Title>Adicionar pessoa</Title>
            <form>
                <Label>Nome </Label>
                <InputText value={person.name}></InputText>
                {
                    person.contacts.map((contact, index) => (
                        <ContactsForm>
                           <ContactForm {...contact} 
                                onChangeType={type => handleTypeChange(type, index)}
                                onChangeValue={value => handleValueChange(value, index)} />
                        </ContactsForm>
                    ))
                }
            </form>
        </Fragment>
    )
}

export { PersonAdd }