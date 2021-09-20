import styled from 'styled-components'

const InputText = styled.input `
padding: 10px;
border-radius: 5px;
border: 1px #cecece solid;
&:focus {
    border: 2px #2F80ED solid;
    outline: none;
}
`

const Label = styled.label `
    font-family: sans-serif;
    margin-right: 20px;
    color: #2F80ED;
`

const ContactsForm = styled.div`
    margin-top:10px;
`
const Button = styled.button`
    background: #2F80ED;
    border: none;
    color: #fff;
    padding: 1em;
    border-radius: 5px;
`

export { InputText, Label, ContactsForm, Button }