import React from "react";
import { useParams } from "react-router";

const users = [
    {
        id: 1,
        name: "Gustavo",
        description: "Uma pessoa"
    }
]

export default function UserDetails(props) {
    const {id: idStr} = useParams();
    const id = parseInt(idStr)
    const user = users.find(u => u.id == id)
    return (
        <div className="user-details">
            User details
            <h1>
                {user.name}
            </h1>
            <p>
                {user.description}
            </p>
        </div>
    )
}