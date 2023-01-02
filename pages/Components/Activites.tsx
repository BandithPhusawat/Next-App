import * as React from 'react';
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
  ) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('มกราคม', 159, 6.0, 24, 999),
    createData('กุมภาพันธ์', 237, 9.0, 37, 999),
    createData('มีนาคม', 262, 16.0, 24, 990),
    createData('เมษายน', 305, 3.7, 67, 999),
    createData('มิถุนายน', 356, 16.0, 49, 3.9),
    createData('กรกฏาคม', 159, 6.0, 24, 4.0),
    createData('สิงหาคม', 237, 9.0, 37, 4.3),
    createData('กันยายน', 262, 16.0, 24, 6.0),
    createData('ตุลาคม', 305, 3.7, 67, 4.3),
    createData('พฤษจิกายน', 356, 16.0, 49, 3.9),
    createData('ธันวาคม', 159, 6.0, 24, 4.0),
  ];
  
  export default function Activites() {
    return (
        <>
            <Navbar />
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                <TableRow style={{ backgroundColor: 'Highlight' }}>
                    <TableCell align='right'>เดือน</TableCell>
                    <TableCell align="right">อุณหภูมิ</TableCell>
                    <TableCell align="right">ความชื่น</TableCell>
                    <TableCell align="right">จำนวน</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    {/* <TableCell align='right' component="th" >
                        {row.name}
                    </TableCell> */}
                    
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </>
    );
  }