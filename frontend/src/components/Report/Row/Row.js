import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';

function Row({ report }) {
    return (
        <TableRow>
            <TableCell>{report.stt}</TableCell>
            <TableCell>{report.billCount}</TableCell>
            {/* <TableCell>{report.productquantity}</TableCell> */}
            <TableCell>{report.revenue}</TableCell>
        </TableRow>
    );
}

export default Row;