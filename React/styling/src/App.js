import { useState } from "react";
import About from "./screens/About";
import Home from "./screens/Home";
import Users from "./screens/Users";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import UserDetails from "./screens/UserDetails";

function App() {
  return (
    <div>
      <Router>
        <Link to="/users">Users</Link>
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
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App