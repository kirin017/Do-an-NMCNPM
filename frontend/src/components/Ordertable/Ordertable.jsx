import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import OrderRow from './OrderRow/OrderRow';
import useStyles from './styles';

const orders = [
  {BillID: 1, userName: 'ABC', customerName: 'ABC', customerPhoneNumber: '032213', customerAddress: 'D1', date: '21-2-2020', totalCost: 3000000, statusName: 'Đang xử lý'},
  {BillID: 2, userName: 'ABC', customerName: 'ABC', customerPhoneNumber: '032213', customerAddress: 'D2', date: '21-4-2020', totalCost: 4500000, statusName: 'Đang xử lý'},
  {BillID: 3, userName: 'ABC', customerName: 'ABC', customerPhoneNumber: '032213', customerAddress: 'D3', date: '27-2-2020', totalCost: 3500000, statusName: 'Đang xử lý'},
]

function Ordertable() {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Tên tài khoản</TableCell>
            <TableCell>Tên người nhận</TableCell>
            <TableCell>SĐT</TableCell>
            <TableCell>Địa chỉ</TableCell>
            <TableCell>Ngày đặt</TableCell>
            <TableCell>Tổng tiền</TableCell>
            <TableCell>Trạng thái</TableCell>
            <TableCell>Thay đổi trạng thái</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { orders.length > 0 && 
            orders.map((order) => (<OrderRow order={order} />))
          }
        </TableBody>
      </Table>
    </TableContainer>
    );
}

export default Ordertable;