import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from "react";
import axios from 'axios';

export default class FormClass extends Component {

    constructor() {
        super();
        this.state = {
            name : '',
            password : '',
            age : ''
        }

        this.changeName = this.changeName.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.changeAge = this.changeAge.bind(this)
        this.saveData = this.saveData.bind(this)
    }
    
    changeName(event){
        this.setState({
            name: event.target.value
        })       
    }

    changePassword(event){
        this.setState({
            password: event.target.value
        })       
    }

    changeAge(event){
        this.setState({
            age: event.target.value
        })       
    }

    saveData(event){
        event.preventDefault();
        const myData = {
            name: this.state.name,
            password: this.state.password,
            age: this.state.age
        }

        axios.post('http://localhost:4000/site/addStudent', myData)
            .then(response => console.log(response.data))

        this.setState({
            name: '',
            password: '',
            age: ''
        })
    }

    render() {
        return(
            <>
                <Box mt={4} className="w-50 d-flex justify-content-center">
                    <form onSubmit={this.saveData}>
                        <TextField label="Name" className="mb-3" required fullWidth onChange={this.changeName} value={this.state.name}/>
                        <TextField label="Password" className="mb-3" type="password" fullWidth onChange={this.changePassword} value={this.state.password}/>
                        <TextField label="Age" className="mb-5" type="number" fullWidth onChange={this.changeAge} value={this.state.age}/>
                        <Button type={"submit"} variant="outlined" color="primary" className="mb-5">Submit</Button>
                    </form>              
                </Box>
    
                <Grid container>
                    <Grid md item className="bg-info text-light p-3 text-center">
                        <Typography variant="p">Name: <br/> {this.state.name}</Typography>
                    </Grid>
                    <Grid md item className="bg-info text-light p-3 text-center">
                        <Typography variant="p">Password: <br/> {this.state.password}</Typography>
                    </Grid>
                    <Grid md item className="bg-info text-light p-3 text-center">
                        <Typography variant="p">Age: <br/> {this.state.age}</Typography>
                    </Grid>
                </Grid>
            </>
        )  
    }  
}