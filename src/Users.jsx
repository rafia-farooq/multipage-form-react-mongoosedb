import { Box, List, ListItemIcon, ListItemText, ListItem, Container, Divider} from "@material-ui/core";
import axios from "axios";
import React from 'react';
import EditIcon from '@material-ui/icons/EditTwoTone';
import Delete from '@material-ui/icons/DeleteForeverTwoTone';


export default function Users(){
    const[student, setStudent] = React.useState(null)

    axios.get('http://localhost:4000/site/getStudent')
         .then(response => setStudent(response.data))
         .catch(error => console.log.apply(error))

    let studentData
    if (student)
        studentData =  student.map((value) => (
            <Container maxWidth={"md"}>
                <ListItem button>
                    <ListItemIcon>
                        <EditIcon color={"primary"}/>
                        <Delete color={"secondary"}/>
                    </ListItemIcon>
                    <ListItemText>
                        {value.name} -  {value.age} years old
                    </ListItemText>
                </ListItem>
                <Divider/>
            </Container>
            
        ))
    else
        studentData = ''


    return(
        <Box>
            <h1>Our Members</h1>
            <List>
                {studentData}                
            </List>

        </Box>
    )
}