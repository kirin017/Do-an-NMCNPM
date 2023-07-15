import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';

function Row({ report }) {
    return (
        <TableRow>
            <TableCell>{report.date}</TableCell>
            <TableCell>{report.orderquatity}</TableCell>
            <TableCell>{report.productquantity}</TableCell>
            <TableCell>{report.revenue}</TableCell>
        </TableRow>
    );
}

export default Row;