import React, { useEffect, useState } from 'react';
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
    return (
        <div className='container'>
            <table>
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
                                    <button>Delete</button>
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