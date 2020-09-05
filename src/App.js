import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from './Home';
import { About } from './About';
import { NoMatch } from './NoMatch';
import Sidebar from './components/Sidebar/Sidebar';
import Contacts from './components/Contacts/Contacts';
import AddContacts from './components/Contacts/AddContacts';
import EditContacts from './components/Contacts/EditContacts';
import ViewDetails from './components/Contacts/ViewDetails';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Sidebar />

        <Switch>
        <Route exact path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/" component={Contacts} />
          <Route exact path="/users/add" component={AddContacts} />
          <Route exact path="/users/edit/:id" component={EditContacts} />
          <Route exact path="/users/:id" component={ViewDetails} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
