import React from 'react';
import { Provider } from 'react-redux';
// import { Subtitle, Title } from './components/ui/Typography';
// import { InputText, Label } from './components/ui/form/form';
import { 
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'

import { Route } from 'react-router';
import Home from '../src/components/screens/Home';
import { PersonAdd } from '../src/components/screens/PersonAdd';
import PersonDetails from '../src/components/screens/PersonDetails'
import { PersonEdit } from '../src/components/screens/PersonEdit'
import { Search } from '../src/components/screens/Search'
import store from './store';

/**
 * Person:
 *  - Name
 *  - Contacts
 * Contacts:
 *  - Type: Phone, Email
 *  - Value
 * 
 * / - List all users
 * /search - Show all users founded with value
 * /person/:id - Show user details
 * /person/:id/edit - Edit form
 * /person/add - Form to add a person
 * 
 * Input:
 *  - h1
 *  - h2
 *  - label
 * 
 */


function App() {
  return (
    <Provider store = {store}>
      <Router>
        {/* <Link to="/">Home</Link>
        <Link to="/person/add">Add a person </Link>
        <Link to="/person/:id">Person Details </Link>
        <Link to="/person/:id/edit">Person Edit </Link>
        <Link to="/search">Search</Link> */}
        <Switch>
          <Route path="/person/:id/edit">
            <PersonEdit />
          </Route>
          <Route path="/person/:id/details">
            <PersonDetails />
          </Route>
          <Route path="/person/add">
            <PersonAdd />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/">
            <Home />
              {/* <Title>Olá mundo</Title>
              <Subtitle>Olá mundo</Subtitle>
              <Label>Username</Label>
              <InputText />  */}
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App;
