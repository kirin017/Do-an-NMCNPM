import React, { useEffect, useState } from 'react';
import DataTable from "react-data-table-component"
import { SearchOutlined } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function AccountManagement() {
    
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8081/api/getAllUser`)
            .then(response => response.json())
            .then(data => setUser(data.data))
    }, [])
    console.log(user)
    
    const columns = [   
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true
        },
        {
            name: "Username",
            selector: row => row.username,
            sortable: true
        },
        {
            name: "PhoneNumber",
            selector: row => row.phoneNumber,
            sortable: true
        },
        {
            name: "Email",
            selector: row => row.email,
            sortable: true
        },
        {
            name: "Gender",
            selector: row => row.gender,
            sortable: true
        },
        {
            name: "TypeUser",
            selector: row => row.typeUser,
            sortable: true
        }
    ];

    const tableStyle = {
        borderCollapse: 'collapse',
    };

    const headerCellStyle = {
        backgroundColor: '#f5f5f5',
        borderBottom: '1px solid #ddd',
    };

    const rowCellStyle = {
        borderBottom: '1px solid #ddd',
    };

    const evenRowStyle = {
        backgroundColor: '#f2f2f2',
    };

    // const hoverRowStyle = {
    //     backgroundColor: '#f5f5f5',
    // };
    const [records, setRecords] = useState(user);
    function handleFilter(event) {
        const newData = records.filter(row => {
            return row.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
    }
    return (
        <div className='container mt-5'>
            <div className='text-end' style={{
                display: 'flex',
                alignItems: 'center',
                border: '0.5px solid lightgray',
                padding: '3px',
                maxWidth: '190px'
            }}><input type="text" placeholder='Search...' onChange={handleFilter} style={{
                border: 'none',
                outline: 'none',
                backgroundColor: 'transparent'
            }} /><SearchOutlined />
            </div>
            <Button variant="outlined" color="primary" component={Link} to={`/admin/account/update`}>
                Cấp tài khoản cho Staff
            </Button>
            <DataTable
                columns={columns}
                data={user}
                selectableRows
                fixedHeader
                highlightOnHover
                pagination
                style={tableStyle}
                customStyles={{
                    headRow: { style: headerCellStyle },
                    rows: { style: rowCellStyle },
                    rowsEven: { style: evenRowStyle },
                    rowsSelected: {},
                    rowCursor: {},
                    pagination: {},
                }}
            ></DataTable>
        </div >
    )
}
export default AccountManagement