import { Typography, Button, TextField } from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import App from "./App";

export default function About(){

    const save = (event) => {

    }
    
    return(
        <center>
        <Typography variant={"h4"} color={"primary"}>Cart</Typography>

        <form onSubmit={save}>
            <TextField select className={"form-control"} SelectProps={{native:true}}>
                <option>Select Item</option>
                <option value={45}>Juice</option>
                <option value={30}>Chocolate</option>
                <option value={40}>Milk</option>
                <option value={20}>Chips</option>
            </TextField>

            <Button type={"submit"} variant={"contained"} color={"primary"}>Place Order</Button>
        </form>




        <Router>
            <Button>
                <Link to={'/'}>Back to HomePage</Link> 
            </Button>
        </Router>

        <Switch>
            <Route path={'/'} exact><App /></Route>
        </Switch>
        
        </center>
    )
}