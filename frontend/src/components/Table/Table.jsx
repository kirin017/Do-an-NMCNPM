import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './App.css'
function Table(){
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8081/api/getAllUser`)
            .then(response => response.json())
            .then(data => setData(data.data))   
            .catch(er => console.log(er))
    }, [])
    console.log(data)
    

     const handleDelete =  (username) =>{
        axios.delete('http://localhost:8081/api/user/delete', {
            params: {
              username: username
            }
          })
        .then(res=>{
            window.location.reload()
        })
    }   



    return (

        <div className='container'>
            <Button variant="outlined" color="primary" component={Link} to={`/admin/account/update`}>
                Cấp tài khoản cho Staff
             </Button>
            <table style = {{marginTop : '10px'}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>PhoneNumber</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>TypeUser</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user, index) =>(
                            <tr key = {index}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.phoneNumber}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td>{user.typeUser}</td>
                                <td>
                                    <button onClick={()=>handleDelete(user.username)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Table