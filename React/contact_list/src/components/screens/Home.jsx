import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Title } from "../ui/Typography"
import ShowPerson from "../ShowPerson"

export default function Home(){
    const persons = useSelector(state => state)
    return (
        <Fragment>
            <Title>Todos os contatos</Title>
            {persons.map(person => (
                <ShowPerson {...person} />
            ))}
        </Fragment>
     )
}

