import React from "react";
import { useParams } from "react-router";
import  { Button, Title }  from "../components/ui/typography";
//import "./assets/sass/UserDetails.scss";

const users = [
    {
        id: 1,
        name: "Gustavo",
        description: "Uma pessoa"
    },
    {
        id: 2,
        name: "João",
        description: "Outra pessoa"
    },
    {
        id: 3,
        name: "Maria",
        description: "Mais outra pessoa"
    }
]

export default function UserDetails(props) {
    const {id: idStr} = useParams();
    const id = parseInt(idStr)
    const user = users.find(u => u.id === id)
    return (
        <div className="user-details">
            User details
            <Title>
                {user.name}
            </Title>
            <p>
                {user.description}
            </p>
            <Button>Me siga no LinkedIn</Button>
        </div>
    )
}