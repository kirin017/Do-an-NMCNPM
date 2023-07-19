import React, {useState, useEffect} from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { Typography, Button, FormControl ,TextField } from '@material-ui/core';
import useStyles from './styles';
import Discount from './Discount/Discount';
import axios from 'axios';

function Discounts() {
    const classes = useStyles();
    const [code, setCode] = useState('');
    const [quanti, setQuanti] = useState('');
    const [value, setValue] = useState('');
    const [warning, setWarning] = useState('');
    const [tableDiscount, setTableDiscount] = useState([]);
    useEffect(() => {
        async function getData() {
            try {
                let table = await axios.get("http://localhost:8081/api/getDiscounts");
                setTableDiscount(table.data.data);
            } catch (error) {} 
        }
        getData();
    }, )
    const NumberOnly = (event) => {
        const inputValue = event.target.value;
        const filteredValue = inputValue.replace(/[^0-9]/g, '');
        return filteredValue;
    };
    const addHandle = async() => {
        if (!(code && quanti && value)){
            setWarning("Hãy nhập đủ thông tin")
        } else {
            try{
                let response  = await axios.post("http://localhost:8081/api/addDiscounts", {code: code, quanti: quanti, promoValue: value});
                setWarning(response.data.errCode);
            } catch (error) {}
        }
    }
    return (
        <div>
            <Typography>Thêm mã khuyến mãi</Typography>
            <FormControl>
                <TextField className={classes.textfield} label="Mã" value={code} onChange={e=>setCode(e.target.value)}></TextField>
            </FormControl>
            <FormControl>
                <TextField className={classes.textfield} label="Số lượng" value={quanti} onChange={e=>setQuanti(NumberOnly(e))}></TextField>
            </FormControl>
            <FormControl>
                <TextField className={classes.textfield} label="Giá trị" value={value} onChange={e=>setValue(NumberOnly(e))}></TextField>
            </FormControl>
            <FormControl>
                <Button className={classes.button} onClick={()=>addHandle()}>Thêm</Button>
            </FormControl>
            <Typography className={classes.textfield} style={{ color: 'red' }}>{warning}</Typography>
            <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>                      
                            <TableCell className={classes.tableCell}>Mã khuyến mãi</TableCell>
                            <TableCell className={classes.tableCell}>Số lượng</TableCell>
                            <TableCell className={classes.tableCell}>Giá trị</TableCell>
                            <TableCell className={classes.tableCell}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { tableDiscount.length > 0 && 
                            tableDiscount.map((discount) => (<Discount discount={discount} />))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Discounts;