import React from 'react';
import { TableCell, TableRow, Button } from '@material-ui/core';
import axios from 'axios';

function Discount({discount}) {
    const deleteHanlde = async(promoID) => {
        try{
            await axios.post("http://localhost:8081/api/upadteDiscounts",{promoID:promoID, quanti:0})
        }catch(e){}
    }
    return (
        <TableRow>
            <TableCell>{discount.code}</TableCell>
            <TableCell>{discount.quanti}</TableCell>
            <TableCell>{discount.promoValue}</TableCell>
            <TableCell>
                <Button onClick={() => deleteHanlde(discount.promoID)}>Xóa</Button>
            </TableCell>
        </TableRow>
    );
}

export default Discount;