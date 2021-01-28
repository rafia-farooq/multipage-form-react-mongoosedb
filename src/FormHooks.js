import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

export default function FormHooks(){
    const[name, setName] = useState('')
    const[password, setPassword] = useState('')
    const[age, setAge] = useState('')

    const changeName = (event) => {
        setName(event.target.value)
    }
    const changePassword = (event) => {
        setPassword(event.target.value)
    }
    const changeAge = (event) => {
        setAge(event.target.value)
    }

    const saveData = (event) => {
        event.preventDefault();
        const myData = {
            name: name,
            password: password,
            age: age
        }

        setName('')
        setPassword('')
        setAge('')

        axios.post('http://localhost:4000/site/addStudent', myData)
            .then(response => console.log(response.data))
    }

    return(
        <>
            <Box mt={4} className="w-50 d-flex justify-content-center">
                <form onSubmit={saveData}>
                    <TextField label="Name" className="mb-3" required fullWidth onChange={changeName} value={name}/>
                    <TextField label="Password" className="mb-3" type="password" fullWidth onChange={changePassword}value={password}/>
                    <TextField label="Age" className="mb-5" type="number" fullWidth onChange={changeAge} value={age}/>
                    <Button type="submit" variant="outlined" color="primary" className="mb-5">Submit</Button>
                </form>                
            </Box>

            <Grid container>
                <Grid md item className="bg-info text-light p-3 text-center">
                    <Typography variant="p">Name: <br/> {name}</Typography>
                </Grid>
                <Grid md item className="bg-info text-light p-3 text-center">
                    <Typography variant="p">Password: <br/> {password}</Typography>
                </Grid>
                <Grid md item className="bg-info text-light p-3 text-center">
                    <Typography variant="p">Age: <br/> {age}</Typography>
                </Grid>
            </Grid>
        </>
    )
}