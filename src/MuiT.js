import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const MuiT = () => {
    // Variable
    const [rows, setRows] = useState([])

    // API
    function viewDataApi() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://jsonplaceholder.typicode.com/albums", requestOptions)
            .then(response => response.json())
            .then(data => {
                //    console.log(data)
                setRows(data)
            })
            .catch(error => console.log('error', error));
    }

    // API Call
    useEffect(() => {
        viewDataApi()
    })

    // Extra Side Effects
    useEffect(() => {
        console.log(rows)
    }, [rows])


    // Extra
    // function createData(
    //     name: string,
    //     calories: number,
    //     fat: number,
    //     carbs: number,
    //     protein: number,
    //     ) {
    //     return { name, calories, fat, carbs, protein };
    // }
    // const rows = [
    //     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    //     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    //     createData('Eclair', 262, 16.0, 24, 6.0),
    //     createData('Cupcake', 305, 3.7, 67, 4.3),
    //     createData('Gingerbread', 356, 16.0, 49, 3.9),
    // ];
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>user ID</TableCell>
                            <TableCell>id</TableCell>
                            <TableCell>title</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))} */}

                        {rows.map(each => {
                            return (
                                <TableRow
                                    key={each.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    {/* <TableCell>{each.userId}</TableCell>
                                <TableCell>{each.id}</TableCell>
                                <TableCell>{each.title}</TableCell> */}
                                    <TableCell>{each.userId}</TableCell>
                                    <TableCell>{each.id}</TableCell>
                                    <TableCell>{each.title}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default MuiT