import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

import adduser from './AddUser.css'
import axios from 'axios'
import {Button,
        Container,
        Box,
        TextField,
        IconButton 
       } from '@mui/material';

import PublishIcon from '@mui/icons-material/Publish';

const AddUser = () => {

  const navigate = useNavigate();
 

  const [name,setName]= useState();
  const [phone,setPhone]= useState();
  const [email,setEmail]= useState();

  
  
  const SubmitHandler =async ()=> {

          

    

    const formField = new FormData()
          formField.append('name',name)
          formField.append('phone',phone)
          formField.append('email',email)
          
    

     await  axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/add/',
        data: formField})
       .then (navigate('/'))

            
  }

  return (



    <div>
        <Container maxWidth="sm" className="AddUser">
        <Box






          
      component="form"
      sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
       noValidate

          

        >
          <h1>Add  New User</h1>

          <form className="f_">
              <TextField 
                      id="outlined-basic" 
                      label="Name" 
                      variant="outlined" 
                      type="text"
                      value = {name}
                      onChange={(e)=>setName(e.target.value)}
              />
              <TextField 
                      id="outlined-basic" 
                      label="Phone"
                      variant="outlined" 
                      type="text"
                      value = {phone}
                      onChange={(e)=>setPhone(e.target.value)}
              />
              <TextField 
                      id="outlined-basic" 
                      label="Email" 
                      variant="outlined" 
                      type="text"
                      value = {email}
                      onChange={(e)=>setEmail(e.target.value)}
              
              />
              <Button className = "sub_button" variant="contained"  onClick={SubmitHandler}> Submit </Button>
          </form>
    
        </Box>
      


 


      
        </Container>       
     
   
          
    </div>
  )
}

export default AddUser