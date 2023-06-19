import React, { useState } from 'react';
import DataTable from "react-data-table-component"
import styled from 'styled-components';
import { Box, TextareaAutosize } from '@material-ui/core';

function OrderManagement() {
  const columns = [
    {
      name: 'Customer Name',
      selector: row => row.name,
      sortable: true
    },
    {
      name: "Reference",
      selector: row => row.reference,
      sortable: true
    },
    {
      name: "Status",
      selector: row => row.status,
      sortable: true
    },
    {
      name: "Payment",
      selector: row => row.payment,
      sortable: true
    },
    {
      name: "Date",
      selector: row => row.date,
      sortable: true
    },
    {
      name: "Total",
      selector: row => row.total,
      sortable: true
    },
    {
      name: "Biller",
      selector: row => row.biller,
      sortable: true
    }
  ];

  const data = [
    {
      id: 1,
      name: 'Huy',        // walk-in-customer or user
      reference: 'MS101',
      status: <Box color="white" bgcolor='#01DF3A' TextareaAutosize minWidth={50} textAlign={'center'} p={1} > Complete</Box >, //Completed or Pending
      date: '14 Jun 2023',
      payment: <Box color="white" bgcolor='#01DF3A' TextareaAutosize minWidth={50} textAlign={'center'} p={1}>Paid</Box>,     // paid or due
      total: 100.00,
      biller: 'Employee'
    },
    {
      id: 1,
      name: 'Huy',        // walk-in-customer or user
      reference: 'MS101',
      status: <Box color="white" bgcolor='#01DF3A' TextareaAutosize minWidth={50} textAlign={'center'} p={1}>Complete</Box>, //Completed or Pending
      date: '14 Jun 2023',
      payment: <Box color="white" bgcolor='#01DF3A' TextareaAutosize minWidth={50} textAlign={'center'} p={1}>Paid</Box>,     // paid or due
      total: 100.00,
      biller: 'Employee'
    },
    {
      id: 1,
      name: 'Huy',        // walk-in-customer or user
      reference: 'MS101',
      status: <Box color="white" bgcolor='#FE2E64' TextareaAutosize minWidth={50} textAlign={'center'} p={1}>Pending</Box>, //Completed or Pending
      date: '14 Jun 2023',
      payment: <Box color="white" bgcolor='#01DF3A' TextareaAutosize minWidth={50} textAlign={'center'} p={1}>Paid</Box>,     // paid or due
      total: 100.00,
      biller: 'Employee'
    },
    {
      id: 1,
      name: 'Huy',        // walk-in-customer or user
      reference: 'MS101',
      status: <Box color="white" bgcolor='#FE2E64' TextareaAutosize minWidth={50} textAlign={'center'} p={1}>Pending</Box>, //Completed or Pending
      date: '14 Jun 2023',
      payment: <Box color="white" bgcolor='#01DF3A' TextareaAutosize minWidth={50} textAlign={'center'} p={1}>Paid</Box>,     // paid or due
      total: 100.00,
      biller: 'Employee'
    },
    {
      id: 1,
      name: 'Huy',        // walk-in-customer or user
      reference: 'MS101',
      status: <Box color="white" bgcolor='#FE2E64' TextareaAutosize minWidth={50} textAlign={'center'} p={1}>Pending</Box>, //Completed or Pending
      date: '14 Jun 2023',
      payment: <Box color="white" bgcolor='#FE2E64' TextareaAutosize minWidth={50} textAlign={'center'} p={1}>Due</Box>,     // paid or due
      total: 100.00,
      biller: 'Employee'
    },
    {
      id: 1,
      name: 'Huy',        // walk-in-customer or user
      reference: 'MS101',
      status: <Box color="white" bgcolor='#01DF3A' TextareaAutosize minWidth={50} textAlign={'center'} p={1}>Complete</Box>, //Completed or Pending
      date: '14 Jun 2023',
      payment: <Box color="white" bgcolor='#FE2E64' TextareaAutosize minWidth={50} textAlign={'center'} p={1}>Due</Box>,     // paid or due
      total: 100.00,
      biller: 'Employee'
    },
    {
      id: 1,
      name: 'Messi',        // walk-in-customer or user
      reference: 'MS101',
      status: <Box color="white" bgcolor='#01DF3A' TextareaAutosize minWidth={50} textAlign={'center'} p={1}>Complete</Box>, //Completed or Pending
      date: '14 Jun 2023',
      payment: <Box color="white" bgcolor='#FE2E64' TextareaAutosize minWidth={50} textAlign={'center'} p={1}>Due</Box>,     // paid or due
      total: 100.00,
      biller: 'Employee'
    },
    {
      id: 1,
      name: 'Dang',        // walk-in-customer or user
      reference: 'MS101',
      status: <Box color="white" bgcolor='#01DF3A' TextareaAutosize minWidth={50} textAlign={'center'} p={1}>Complete</Box>, //Completed or Pending
      date: '14 Jun 2023',
      payment: <Box color="white" bgcolor='#FE2E64' TextareaAutosize minWidth={50} textAlign={'center'} p={1}>Due</Box>,     // paid or due
      total: 100.00,
      biller: 'Employee'
    },
  ]

  const [records, setRecords] = useState(data);
  function handleFilter(event) {
    const newData = data.filter(row => {
      return row.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setRecords(newData)
  }
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
  return (
    <div className='container mt-5'>
      <div className='text-end'><input type="text" onChange={handleFilter} /></div>
      <DataTable
        columns={columns}
        data={records}
        // selectableRows
        fixedHeader
        pagination
        selectableRows
        highlightOnHover
        TextareaAutosize
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
export default OrderManagement