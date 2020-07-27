import React, { Component } from 'react';
import {BrowserRouter, Route, NavLink, Switch} from "react-router-dom"; //Define properties on Tag
import UsersPage from "./Pages/UsersPage"; //View All Names Users
import UserPage from "./Pages/UserPage"; //View One User and Date
import EditUserPage from "./Pages/EditUserPage"; //Edit User
import CreateUserPage from "./Pages/CreateUserPage"; //Add User
import NotFound from "./Pages/NotFound"; //Page Error 404 Not Found
import "./App.css";

const HomePage = ()=><div>Home</div>
const AboutPage = ()=><div>About</div>

//Define properties
const MyNavLink = (props) =><NavLink exact activeClassName="active" {...props}>{props.children}</NavLink>

//Start Component
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App"> 
        {/* Start Nav Bar */}
          <MyNavLink to="/">Home</MyNavLink> {" "}
          <MyNavLink to="/about">About</MyNavLink>{" "}
          <MyNavLink to="/users">Users</MyNavLink>{" "}
          <MyNavLink to="/users/create">Create User</MyNavLink>
          {/* End Nav Bar */}

        {/* Start Router Pages */}
          <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/users" exact component={UsersPage} />
          <Route path="/users/create" exact component={CreateUserPage} />
          <Route path="/users/:id" exact component={UserPage} />
          <Route path="/users/edit/:id" exact component={EditUserPage} />
          {/* Page Error 404 Not Found */}
          <Route component={NotFound} /> 

          </Switch>
        {/* End Router Pages */}
        </div>
      </BrowserRouter>
    );
  }
}
// End Component
export default App;
