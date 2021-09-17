//import { useState } from "react";
import About from "./screens/About";
import Home from "./screens/Home";
import Users from "./screens/Users";
import Form from "./screens/Form";
import UserDetails from "./screens/UserDetails";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
        <Link to="/users">Users</Link>
        <Link to="/about">About</Link>
        <Link to="/form">Form</Link>
        <Link to="/">Home</Link>
        <Switch>
          <Route path="/users/:id/details">
            <UserDetails />
          </Route>
          <Route path="/users">
            <Users/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/form">
            <Form/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App