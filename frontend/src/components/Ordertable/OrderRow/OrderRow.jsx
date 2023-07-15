import React, { useState } from 'react';
import { TableCell, TableRow, Button } from '@material-ui/core';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import OrderDetails from '../OrderDetails/OrderDetails';
import useStyles from './styles';

function OrderRow({order}) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return (
        <>
        <TableRow className={classes.a}>
        {console.log(order)}
            <TableCell>{order.BillID}</TableCell>
            <TableCell>{order.name}</TableCell>
            <TableCell>{order.customerName}</TableCell>
            <TableCell>{order.customerPhoneNumber}</TableCell>
            <TableCell>{order.customerAddress}</TableCell>
            <TableCell>{order.date}</TableCell>
            <TableCell>{order.totalCost}</TableCell>
            <TableCell>{order.statusName}</TableCell>
            <TableCell>
                <div>
                    <Button className={classes.button1}>Đang xử lý</Button>
                    {/* <Button className={classes.button2}>Đang vận chuyển</Button> */}
                </div>
                <div>
                    <Button className={classes.button2}>Đang vận chuyển</Button>
                </div>
                <div>
                    <Button className={classes.button3}>Đã giao hàng</Button>
                    {/* <Button className={classes.button4}>Đã hủy đơn</Button> */}
                </div>
                <div>
                    <Button className={classes.button4}>Đã hủy đơn</Button>
                </div>
            </TableCell>
            <TableCell>
                <Button className={classes.button5} variant="contained" onClick={handleOpen}>Chi tiết</Button>
                <Dialog open={open} onClose={handleClose}  maxWidth="md" maxHeight="80vh">
                    <DialogTitle>Chi tiết đơn hàng</DialogTitle>
                    <DialogContent>
                        <OrderDetails/>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                    </DialogActions>
                </Dialog>
            </TableCell>
        </TableRow>
        </>
    );
}

export default OrderRow;