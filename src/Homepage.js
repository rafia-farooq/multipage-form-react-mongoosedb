import { Button } from "@material-ui/core";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./About";
import App from "./App";
import FormHooks from "./FormHooks";
import FormClass from "./FormClass";
import Users from "./Users";


export default function Homepage(){

    return(
        <Router>
            <nav style={{backgroundColor: "lightgrey", padding: "10px", display: "flex", justifyContent: "center"}}>
                <Button style={{marginRight: "30px"}}>
                    <Link to={'/'}>Home</Link>
                </Button>

                <Button style={{marginRight: "30px"}}>
                    <Link to={'/about'}>About</Link>
                </Button>

                <Button style={{marginRight: "30px"}}>
                    <Link to={'/getStudents'}>Members</Link>
                </Button>

                <Button style={{marginRight: "30px"}}>
                    <Link to={'/register'}>Register</Link>
                </Button>

                <Button style={{marginRight: "30px"}}>
                    <Link to={'/new-member'}>New Member</Link>
                </Button>
            </nav>

            <Switch>
                <Route path={'/'} exact>
                    <App />
                </Route>
                <Route path={'/about'}>
                    <About />
                </Route>
                <Route path={'/getStudents'}>
                    <Users />
                </Route>
                <Route path={'/register'}>
                    <FormHooks />
                </Route>
                <Route path={'/new-member'}>
                    <FormClass />
                </Route>
            </Switch>
        </Router>
    )
}