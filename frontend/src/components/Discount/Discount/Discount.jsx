import React from 'react';
import { TableCell, TableRow, Button } from '@material-ui/core';

function Discount({discount}) {
    return (
        <TableRow>
            <TableCell>{discount.code}</TableCell>
            <TableCell>{discount.quanti}</TableCell>
            <TableCell>{discount.promoValue}</TableCell>
            <TableCell>
                <Button>Xóa</Button>
            </TableCell>
        </TableRow>
    );
}

export default Discount;