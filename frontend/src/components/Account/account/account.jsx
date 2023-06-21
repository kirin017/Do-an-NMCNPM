import React, { useState } from 'react';
import DataTable from "react-data-table-component"
import { SearchOutlined } from '@material-ui/icons';


function AccountManagement() {
    const columns = [
        {
            name: 'Customer Name',
            selector: row => row.name,
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
        },
        {
            name: "Phone",
            selector: row => row.phone,
            sortable: true
        },
        {
            name: "Email",
            selector: row => row.email,
            sortable: true
        }
    ];
    const data = [
        {
            id: 1,
            name: 'zascf',
            email: 'zascf@gmail.com',
            phone: '0885132150',
            age: '23',
            gender: 'male'
        },
        {
            id: 2,
            name: 'huy',
            email: 'huy@gmail.com',
            phone: '0885132150',
            age: '20',
            gender: 'female'
        },
        {
            id: 3,
            name: 'zascf3',
            email: 'zascf@gmail.com',
            phone: '0885132150',
            age: '26',
            gender: 'male'
        },
        {
            id: 4,
            name: 'zascf4',
            email: 'zascf@gmail.com',
            phone: '0885132150',
            age: '28',
            gender: 'female'
        },
        {
            id: 5,
            name: 'zascf5',
            email: 'zascf4@gmail.com',
            phone: '0885132150',
            age: '29',
            gender: 'male'
        },
        {
            id: 6,
            name: 'test6',
            email: 'test6@gmail.com',
            phone: '0885132150',
            age: '13',
            gender: 'female'
        },
        {
            id: 7,
            name: 'test7',
            email: 'test7@gmail.com',
            phone: '0885132150',
            age: '33',
            gender: 'male'
        },
        {
            id: 1,
            name: 'zascf',
            email: 'zascf@gmail.com',
            phone: '0885132150',
            age: '23',
            gender: 'female'
        },
        {
            id: 2,
            name: 'huy',
            email: 'huy@gmail.com',
            phone: '0885132150',
            age: '20',
            gender: 'female'
        },
        {
            id: 3,
            name: 'zascf3',
            email: 'zascf@gmail.com',
            phone: '0885132150',
            age: '26',
            gender: 'male'
        },
        {
            id: 4,
            name: 'zascf4',
            email: 'zascf@gmail.com',
            phone: '0885132150',
            age: '28',
            gender: 'female'
        },
        {
            id: 5,
            name: 'zascf5',
            email: 'zascf4@gmail.com',
            phone: '0885132150',
            age: '29',
            gender: 'male'
        },
        {
            id: 6,
            name: 'test6',
            email: 'test6@gmail.com',
            phone: '0885132150',
            age: '13',
            gender: 'female'
        },
        {
            id: 7,
            name: 'test7',
            email: 'test7@gmail.com',
            phone: '0885132150',
            age: '33',
            gender: 'male'
        }
    ]
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
    const [records, setRecords] = useState(data);
    function handleFilter(event) {
        const newData = data.filter(row => {
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
            <DataTable
                columns={columns}
                data={records}
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