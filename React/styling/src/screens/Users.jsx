import React from "react";
import { Link } from "react-router-dom";

export default function Users() {
    return (
        <div className="users">
            <h1>Users</h1>
            <ul>
                <li>
                    <Link to="/users/1/details">Gustavo</Link>              
                </li>
                <li>
                    <Link to="/users/2/details">João</Link>
                </li>
                <li>
                    <Link to="/users/3/details">Maria</Link>
                </li>
            </ul>
        </div>
    )
}