import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { Typography, Box, Card, Button, MenuItem , InputLabel , FormControl , Select, TextField, Grid } from '@material-ui/core';
import useStyles from './styles';
import Row from './Row/Row';
import axios from 'axios';

// const reports = [
//     {date: 1, revenue: 123123, orderquatity: 12, productquantity: 20},
//     {date: 2, revenue: 123123, orderquatity: 12, productquantity: 20},
//     {date: 3, revenue: 123123, orderquatity: 12, productquantity: 20},
// ]

function Report() {
    const classes = useStyles();
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(2023);
    const [revenue, setRevenue] = useState();
    const [billCount, setBillCount] = useState();
    const [dailyReports, setdailyReports] = useState([]);

    const handleYearChange = (event) => {
        const inputValue = event.target.value;
        const filteredValue = inputValue.replace(/[^0-9]/g, '');
        setYear(filteredValue);
    };
    const getReports = async() => {
        try{
            await axios.get('http://localhost:8081/api/report/updatedaily');
            if (month !== 0){
                let MonthlyReport = await axios.post('http://localhost:8081/api/report/monthly', {month: month, year: year});
                if (MonthlyReport.data.response[0]){
                    setRevenue(MonthlyReport.data.response[0].revenue)
                    setBillCount(MonthlyReport.data.response[0].count)
                }else{
                    setRevenue(0)
                    setBillCount(0)
                }
                let DailyReport = await axios.post('http://localhost:8081/api/report/daily', {month: month, year: year});
                setdailyReports(DailyReport.data.response);
            }else{

            }
        }catch(e){}
    }
    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel >Tháng</InputLabel>
                <Select className={classes.selectBox} value={month} onChange={e=>setMonth(e.target.value)}>
                    <MenuItem value={0}>Cả năm</MenuItem>
                    <MenuItem value={1}>Tháng 1</MenuItem>
                    <MenuItem value={2}>Tháng 2</MenuItem>
                    <MenuItem value={3}>Tháng 3</MenuItem>
                    <MenuItem value={4}>Tháng 4</MenuItem>
                    <MenuItem value={5}>Tháng 5</MenuItem>
                    <MenuItem value={6}>Tháng 6</MenuItem>
                    <MenuItem value={7}>Tháng 7</MenuItem>
                    <MenuItem value={8}>Tháng 8</MenuItem>
                    <MenuItem value={9}>Tháng 9</MenuItem>
                    <MenuItem value={10}>Tháng 10</MenuItem>
                    <MenuItem value={11}>Tháng 11</MenuItem>
                    <MenuItem value={12}>Tháng 12</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <TextField className={classes.selectBox} label="Năm" value={year} onChange={e=>handleYearChange(e)}/>
            </FormControl>
            <Button className={classes.button} onClick={()=>getReports()}>Xem</Button>
            <Grid container spacing={5} className={classes.grid}>
                <Card className={classes.root}>
                    <Box className={classes.Box}>
                        <Typography className={classes.typo}>
                            <div>Số đơn hàng</div>
                        </Typography>
                        <Typography className={classes.typo}>
                            <div>{billCount}</div>
                        </Typography>
                    </Box>
                </Card>
                <Card className={classes.root}>
                    <Box className={classes.Box}>
                        <Typography className={classes.typo}>
                            <div>Doanh thu</div>
                        </Typography>
                        <Typography className={classes.typo}>
                            <div>{revenue} vnd</div>
                        </Typography>
                    </Box>
                </Card>
            </Grid>
            
            <TableContainer component={Paper} style={{ maxWidth: 1200 }}>
                <Table  aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Ngày</TableCell>
                            <TableCell>Số đơn hàng</TableCell>
                            <TableCell>Doanh thu</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { dailyReports.length > 0 && 
                            dailyReports.map((report) => (<Row report={report} />))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Report;