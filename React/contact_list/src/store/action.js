const NEW_PERSON = "NEW_PERSON";

function newPerson(pessoa) { 
    return {type: NEW_PERSON, pessoa}
}

export { newPerson }