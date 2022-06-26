

import React,{useState,useEffect} from 'react'

import userlist from './userlist.css'

import {Link,useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'

import {IconButton, 
        Box,
        Button,
        Container,
        Stack} 
              from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const UserList = () => {

    
  const [data,setData]=useState([])
  const [name,setName]= useState();
  const [phone,setPhone]= useState();
  const [email,setEmail]= useState();
   

    const columns = [
        { field: 'id',    headerName: 'ID',    width: 70 },
        { field: 'name',  headerName: 'Name',  width: 130 },
        { field: 'phone', headerName: 'Phone', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        { field: 'action', headerName: 'Action', width: 260 },
        


    ]
  


    const fetchUserList = async ()=> {

      const result = await axios.get('http://127.0.0.1:8000/api/');

      setData(result.data)
    } 


    useEffect(()=>{

      fetchUserList();

    /*

        fetch("http://127.0.0.1:8000/api/")
          .then(resp =>resp.json())
          .then(resp => {setData(resp)})
    */


    
    },[])

    const navigate = useNavigate();
    const {id} = useParams(); 

    const Delete_User = async (id) => {

      if ( window.confirm(" Are you Sure ? "))
       {
        const res = await axios.delete (`http://127.0.0.1:8000/api/delete/${id}/`);
        fetchUserList();
        }
      else {

      } 


      
   
    }

  return (
 
    <div class="container">

<Button className= "add_b"  variant="contained"  href="/add">Create</Button>


        <h2>User List From Data Base</h2>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>

            <table class="table table-bordered ">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Action</th>     
                    </tr>
                </thead>
                <tbody>
                    
                        {data && data.map((item,i)=>(    

                        <tr>
                              <td key={i}>{item.id} </td>
                              <td key={i}>{item.name} </td>
                              <td key={i}>{item.phone} </td>
                              <td key={i}>{item.email} </td>
                                <td> 

                                  <Stack spacing={2} direction="row"> 
                    
                                    <Button variant="contained"
                                        component={Link}
                                        to= {`/${item.id}/update`}
                                    >Update</Button>
                                 
                                    
                                    <Button 
                                          variant="contained" 
                                          onClick = {()=>{Delete_User(item.id)}}  
                                          >Del
                                    </Button>     
                                    
                                  </Stack>    
                              </td>    
                        </tr>
                        )) }               
                </tbody>
            </table>
        </Box>
     
    </div>
   
  )
}

export default UserList
