import React, { Fragment } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import  ShowPerson  from "../ShowPerson";
import { Title } from "../ui/Typography"

export default function PersonDetails() {
    const { id: idStr } = useParams()
    const id = parseInt(idStr)
    const person = useSelector(state => state.find(p => p.id === id))
    return (
        <Fragment>
            <Title>Person details</Title>
            <ShowPerson {...person} expanded/>
        </Fragment>
    )
}
