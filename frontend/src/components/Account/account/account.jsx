import React, { useState } from 'react';
import DataTable from "react-data-table-component"


function AccountManagement() {
    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true
        },
        {
            name: "Email",
            selector: row => row.email,
            sortable: true
        },
        {
            name: "Age",
            selector: row => row.age,
            sortable: true
        },
        {
            name: "Gender",
            selector: row => row.gender,
            sortable: true
        }
    ];
    const data = [
        {
            id: 1,
            name: 'zascf',
            email: 'zascf@gmail.com',
            age: '23',
            gender: 'male'
        },
        {
            id: 2,
            name: 'huy',
            email: 'huy@gmail.com',
            age: '20',
            gender: 'female'
        },
        {
            id: 3,
            name: 'zascf3',
            email: 'zascf@gmail.com',
            age: '26',
            gender: 'male'
        },
        {
            id: 4,
            name: 'zascf4',
            email: 'zascf@gmail.com',
            age: '28',
            gender: 'female'
        },
        {
            id: 5,
            name: 'zascf5',
            email: 'zascf4@gmail.com',
            age: '29',
            gender: 'male'
        },
        {
            id: 6,
            name: 'test6',
            email: 'test6@gmail.com',
            age: '13',
            gender: 'female'
        },
        {
            id: 7,
            name: 'test7',
            email: 'test7@gmail.com',
            age: '33',
            gender: 'male'
        },
        {
            id: 1,
            name: 'zascf',
            email: 'zascf@gmail.com',
            age: '23',
            gender: 'female'
        },
        {
            id: 2,
            name: 'huy',
            email: 'huy@gmail.com',
            age: '20',
            gender: 'female'
        },
        {
            id: 3,
            name: 'zascf3',
            email: 'zascf@gmail.com',
            age: '26',
            gender: 'male'
        },
        {
            id: 4,
            name: 'zascf4',
            email: 'zascf@gmail.com',
            age: '28',
            gender: 'female'
        },
        {
            id: 5,
            name: 'zascf5',
            email: 'zascf4@gmail.com',
            age: '29',
            gender: 'male'
        },
        {
            id: 6,
            name: 'test6',
            email: 'test6@gmail.com',
            age: '13',
            gender: 'female'
        },
        {
            id: 7,
            name: 'test7',
            email: 'test7@gmail.com',
            age: '33',
            gender: 'male'
        }
    ]

    const [records, setRecords] = useState(data);
    function handleFilter(event) {
        const newData = data.filter(row => {
            return row.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
    }
    return (
        <div className='container mt-5'>
            <div className='text-end'><input type="text" onChange={handleFilter} /></div>
            <DataTable
                columns={columns}
                data={records}
                selectableRows
                fixedHeader
                pagination
            ></DataTable>
        </div>
    )
}
export default AccountManagement