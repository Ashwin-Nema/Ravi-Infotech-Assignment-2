import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StyledEngineProvider } from '@mui/material/styles';


export const TableComponent = (props) => {
    const { headers, rowdata } = props
    console.log(headers)
    return (
        <StyledEngineProvider injectFirst>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {headers.map((Item, index) => {
                                return (
                                    <TableCell key={index} align="right">
                                        {typeof Item === 'function' ? <Item /> : <p>{Item}</p>}
                                    </TableCell>
                                )
                            })}


                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowdata.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {row.map((Item, index) => {
                                    return (
                                        <TableCell key={index} align="right">{typeof Item == "function" ? <Item /> : `${Item}`} </TableCell>
                                    )
                                })}

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </StyledEngineProvider>
    );
}
