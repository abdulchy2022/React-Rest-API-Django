



import React, {useState, useEffect} from 'react';
import {useParams, Link,useNavigate } from 'react-router-dom';
import updateuser from './updateuser.css'
import axios from 'axios'
import Avatar from '@mui/joy/Avatar';
import {IconButton, 
  Box,
  Button,
  Container,
  Grid,
  TextField
  } 
        from '@mui/material';

const UpdateUser = () => {

  const [name,setName]= useState();
  const [phone,setPhone]= useState();
  const [email,setEmail]= useState();
  
  const navigate = useNavigate();
  const { id } = useParams();




 const Load_User_Details = async ()=> {

      const {data} = await axios.get(`http://127.0.0.1:8000/api/${id}/`);

      setName(data.name);
      setPhone(data.phone);
      setEmail(data.email);

 } 

 useEffect(()=>{

  Load_User_Details()
},[])




 const UpdateUseDetails = async () => {

  const formField = new FormData()
  formField.append('name',name)
  formField.append('phone',phone)
  formField.append('email',email)

  await  axios({
    method: 'POST',
    url: `http://127.0.0.1:8000/api/update/${id}/`,
    data: formField
  }).then (navigate('/'))

   





 } 


  return (
    <div className="container">

<Container maxWidth="sm" className="AddUser">
        <Box






          
      component="form"
      sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
       noValidate

          

        >
          <h1>Update </h1>

          <form className="f_">
              <TextField 
                      id="outlined-basic" 
         
                      variant="outlined" 
                      type="text"
                      value = {name}
                      onChange={(e)=>setName(e.target.value)}
              />
              <TextField 
                      id="outlined-basic" 
                  
                      variant="outlined" 
                      type="text"
                      value = {phone}
                      onChange={(e)=>setPhone(e.target.value)}
              />
              <TextField 
                      id="outlined-basic" 
         
                      variant="outlined" 
                      type="text"
                      value = {email}
                      onChange={(e)=>setEmail(e.target.value)}
              
              />
              
              <Button className='up_button'  variant="contained" onClick={UpdateUseDetails}>Update</Button>
                            
          </form>
          
        </Box>
      


 


      
        </Container>       
     
   









      
  


    </div>
  )
}

export default UpdateUser