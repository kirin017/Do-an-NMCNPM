import React, { useState } from 'react';
import { TableCell, TableRow, Button } from '@material-ui/core';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import OrderDetails from '../OrderDetails/OrderDetails';
import useStyles from './styles';
import { useCookies } from 'react-cookie';
import axios from 'axios';

function OrderRow({order}) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [cookies] = useCookies([]);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const changeStatus = async(newStatusID, currentStatusID) => {
        if (order.statusName !== currentStatusID){
            try {
                await axios.post('http://localhost:8081/api/updateOrderStatus', {BillID : order.BillID, statusID: newStatusID});
            } catch (error) {}
            window.location.reload();
        }
    }
    const CancelOrder = async() => {
        if (order.statusName === 'Đang xử lý'){
            try {
                await axios.post('http://localhost:8081/api/updateOrderStatus', {BillID : order.BillID, statusID: 4});
            } catch (error) {}
            window.location.reload();
        }
    }
    return (
        <>
        <TableRow className={classes.a}>
            {cookies.role > 0 ? (
                <>
                    <TableCell>{order.BillID}</TableCell>
                    <TableCell>{order.name}</TableCell>
                </>
            ) : null}
            <TableCell>{order.customerName}</TableCell>
            <TableCell>{order.customerPhoneNumber}</TableCell>
            <TableCell>{order.customerAddress}</TableCell>
            <TableCell>{order.date}</TableCell>
            <TableCell>{order.totalCost}</TableCell>
            <TableCell>{order.statusName}</TableCell>
            {cookies.role > 0 ? (
                <TableCell>
                    <div>
                        <Button className={classes.button1} onClick={()=>changeStatus(1,'Đang xử lý')}>Đang xử lý</Button>
                    </div>
                    <div>
                        <Button className={classes.button2} onClick={()=>changeStatus(2, 'Đang vận chuyển')}>Đang vận chuyển</Button>
                    </div>
                    <div>
                        <Button className={classes.button3} onClick={()=>changeStatus(3, 'Đã giao hàng')}>Đã giao hàng</Button>
                    </div>
                    <div>
                        <Button className={classes.button4} onClick={()=>changeStatus(4, 'Hủy đơn')}>Hủy đơn</Button>
                    </div>
                </TableCell>
            ) : (
                <TableCell>
                    {order.statusName === 'Đang xử lý' ? (
                        <Button className={classes.button4} onClick={()=>CancelOrder()}>Hủy đơn hàng</Button>
                    ):(null)}
                </TableCell>
            )}
            <TableCell>
                <Button className={classes.button5} variant="contained" onClick={handleOpen}>Chi tiết</Button>
                <Dialog open={open} onClose={handleClose}  maxWidth="md" maxHeight="80vh">
                    <DialogTitle>Chi tiết đơn hàng</DialogTitle>
                    <DialogContent>
                        <OrderDetails BillID={order.BillID}/>
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