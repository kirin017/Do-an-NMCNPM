import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import OrderRow from './OrderRow/OrderRow';
import useStyles from './styles';
import { useCookies } from 'react-cookie';
import axios from 'axios';

// const orders = [
//   {BillID: 1, userName: 'ABC', customerName: 'ABC', customerPhoneNumber: '032213', customerAddress: 'D1', date: '21-2-2020', totalCost: 3000000, statusName: 'Đang xử lý'},
//   {BillID: 2, userName: 'ABC', customerName: 'ABC', customerPhoneNumber: '032213', customerAddress: 'D2', date: '21-4-2020', totalCost: 4500000, statusName: 'Đang xử lý'},
//   {BillID: 3, userName: 'ABC', customerName: 'ABC', customerPhoneNumber: '032213', customerAddress: 'D3', date: '27-2-2020', totalCost: 3500000, statusName: 'Đang xử lý'},
// ]

function Ordertable() {
  const classes = useStyles();
  const [orders, setorders] = useState([]);
  const [cookies] = useCookies([]);

  useEffect(() => {
    async function getData() {
      try {
        let res
        if (cookies.role > 0){
          res = await axios.get('http://localhost:8081/api/getAllrOrder');
        } else {
          res = await axios.post('http://localhost:8081/api/userOrder', { userID: cookies.id});
        }
        setorders(res.data.orders);
      } catch (error) {
        setorders([]) 
      } 
    }
    getData();
  }, )
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {cookies.role > 0 ? (
              <>
                <TableCell className={classes.tableCell}>ID</TableCell>
                <TableCell className={classes.tableCell}>Tên tài khoản</TableCell>
              </>
            ) : null}
            <TableCell className={classes.tableCell}>Tên người nhận</TableCell>
            <TableCell className={classes.tableCell}>SĐT</TableCell>
            <TableCell className={classes.tableCell}>Địa chỉ</TableCell>
            <TableCell className={classes.tableCell}>Ngày đặt</TableCell>
            <TableCell className={classes.tableCell}>Tổng tiền</TableCell>
            <TableCell className={classes.tableCell}>Trạng thái</TableCell>
            {cookies.role > 0 ? (
              <TableCell className={classes.tableCell}>Thay đổi trạng thái</TableCell>
            ) : (
              <TableCell className={classes.tableCell}></TableCell>
            )}
            <TableCell className={classes.tableCell}></TableCell>
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