import { newPerson } from "./action"
const initialState = [
    {
        id: 1,
        name: "Gustavo",
        contacts: [
            {type: "phone", value: "940028922"},
            {type: "email", value: "teste@teste.com"},
        ]
    },
    {
        id: 2,
        name: "Fabio",
        contacts: [
            {type: "phone", value: "940028922"},
            {type: "email", value: "fabio@bcrcx.com"},
        ]
    },
    {
        id: 3,
        name: "Maria",
        contacts: [
            {type: "phone", value: "940028922"},
        ]
    },
]

export function reducer(state = initialState, action) {
    switch(action.type){
        case action.newPerson:
            return[...person]
        default:
            return state
    }
}