import React, { Fragment, useState } from "react";
import { Title } from "../ui/Typography"
import { Label, InputText, ContactsForm, Button} from "../ui/form/form";
import ContactForm from "../ContactForm";
import { newPerson } from "../../store/action";

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
    const history = useHistory();
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
    function handleNameChange(e) {
        setPerson[{...person, name: e.target.value}]
    }
    function addContact(e) {
        e.preventDefault();
        setPerson[{...person, contacts: [...person.contacts, initialStateContact]}]
    }
    function save() {
        dispatch(newPerson(person))
        history.push('/')
    }
    return (
        <Fragment>
            <Title>Adicionar pessoa</Title>
            <form>
                <Label>Nome </Label>
                <InputText value={person.name} onChange={handleNameChange}></InputText>
                {
                    person.contacts.map((contact, index) => (
                        <ContactsForm>
                           <ContactForm {...contact} 
                                onChangeType={type => handleTypeChange(type, index)}
                                onChangeValue={value => handleValueChange(value, index)} />
                        </ContactsForm>
                    ))
                }
                <Button onClick={addContact}>Adicionar contato</Button>
                <Button onClick={save}></Button>
            </form>
        </Fragment>
    )
}

export { PersonAdd }