import React from 'react';
import { useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Input from '@material-ui/core/Input';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { Dialog, DialogTitle, DialogContent, DialogActions, Divider } from '@material-ui/core';


function CreateSaveDialog({ open, handleSaveClose }) {
    return (
        <Dialog open={open}>
            <DialogTitle>
                Outline Created
        </DialogTitle>
            <DialogContent>
                <Box>
                    <body>
                        This is a dummy button to demonstrate that the inputs will be recorded into a database.
            </body>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSaveClose} color="primary">
                    Cancel
                 </Button>
            </DialogActions>
        </Dialog>
    );
}


function Outline(props) {

    const { faculty, number, term, section, description } = props;

    const [courseDesc, setCourseDesc] = useState("");

    const [courseHours, setCourseHours] = useState("");

    const [courseCredits, setCourseCredits] = useState("");

    const [calendarRef, setCalendarRef] = useState("");

    const [examInfo, setExamInfo] = useState("");

    // Rows for Section 2

    const [outcomeRows, setOutcomeRows] = useState([{}]);

    const handleAddRow = () => {
        const item = {
            id: "standard-full-width",
            placeholder: "Enter Learning Outcome",
            inputProps: { 'aria-label': 'description', maxLength: 100 }
        };

        setOutcomeRows([...outcomeRows, item]);
    };

    const handleRemoveRow = () => {
        setOutcomeRows(outcomeRows.slice(0, -1));
    };


    // Rows for section 7

    const createRow = (one, two, three) => {
        return { one, two, three };
    };
    const [gradeRows, setGradeRows] = useState([createRow("", "", "")]);
    const [sum, setSum] = useState(0);
    const setValue = (index, column, value) => {
        let newRows = gradeRows;
        newRows[index][column] = value;
        setGradeRows(newRows);
        console.log(gradeRows);
        updateSum();
    };
    const deleteRow = (index) => {
        console.log(index)
        console.log(gradeRows)
        if (index > 0) {
            setGradeRows(gradeRows.splice(index, 1))
        }
        console.log(gradeRows)
    };
    const addRow = () => {
        setGradeRows(gradeRows.concat([createRow("", "", "")]));
        console.log(gradeRows)
    };
    const updateSum = () => {
        let total = 0;
        for (let i = 0; i < gradeRows.length; i++) {
            console.log(parseInt(gradeRows[i]["three"]));
            total += parseInt(gradeRows[i]["three"]);
        };
        setSum(total);
    };




    const handleSaveOpen = () => setSaveOpen(true);

    const handleSaveClose = () => setSaveOpen(false);

    const [open, setSaveOpen] = useState(false);



    return (
        <Box paddingLeft={2}>
            <div className="Outline">
                <h1>
                    Outline
            </h1>

                <Box width={1 / 2}>
                    <h2>
                        1. Calendar Information
                </h2>

                    <h3>
                        Course Description
                </h3>

                    <TextField
                        multiline={true}
                        rows={12}
                        rowsMax={12}
                        fullWidth={true}
                        placeholder="Enter Course Description"
                        onChange={(e) => setCourseDesc(e.target.value)}
                    />

                    <h3>
                        Course Hours
                </h3>

                    <TextField
                        multiline={true}
                        placeholder="Enter Course Hours"
                        onChange={(e) => setCourseHours(e.target.value)}
                    />

                    <h3>
                        Academic Credit
                </h3>

                    <TextField
                        multiline={true}
                        placeholder="Enter Number of Credits"
                        onChange={(e) => setCourseCredits(e.target.value)}
                    />

                    <h3>
                        Calendar Reference
                </h3>

                    <TextField
                        multiline={true}
                        fullWidth={true}
                        placeholder="Enter Calendar Reference URL"
                        onChange={(e) => setCalendarRef(e.target.value)}
                    />

                </Box>

                <Box width={1 / 2}>
                    <h2>
                        2. Learning Outcomes
                </h2>

                    <TableContainer>
                        <Table>
                            <TableBody>
                                {outcomeRows.map((item, idx) => (
                                    <TableRow id="addr0" key={idx}>
                                        <TableCell align="left">

                                            {idx + "  "}

                                        </TableCell>

                                        <TableCell align="left">

                                            <Input

                                                id="standard-full-width"
                                                placeholder="Enter Learning Outcome"
                                                //control the maximum learning outcome text length
                                                inputProps={{ 'aria-label': 'description', maxLength: 100 }}
                                                value={outcomeRows[idx].mobile}
                                                fullWidth={true}


                                            />

                                        </TableCell>


                                    </TableRow>
                                ))}

                            </TableBody>

                        </Table>

                    </TableContainer>





                    <Button
                        onClick={(e) => handleAddRow()}
                        className="btn btn-primary"
                        variant="contained"
                        color="primary"
                    >
                        Add Row
              </Button>
                    <Button
                        onClick={(e) => handleRemoveRow()}
                        variant="contained"
                        color="secondary"
                        className="btn btn-danger float-right"
                    >
                        Delete Row
              </Button>

                </Box>

                <Box width={1 / 2}>
                    <h2>
                        5. Examinations
                </h2>

                    <h3>
                        Examination Information
                </h3>

                    <TextField
                        multiline={true}
                        rows={12}
                        rowsMax={12}
                        fullWidth={true}
                        placeholder="Enter Examination Information"
                        onChange={(e) => setExamInfo(e.target.value)}
                    />

                </Box>

                <Box width={1 / 2}>
                    <h2>
                        7. Final Grade Determination
                </h2>

                    <div>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Component</TableCell>
                                        <TableCell>Learning Outcomes Evaluated</TableCell>
                                        <TableCell>Weight</TableCell>
                                        <TableCell> </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {gradeRows.map((row, index) => (
                                        <TableRow key={index}>
                                            <TableCell align="left"><TextField defaultValue={row.one}
                                                onChange={(e) => setValue(index, 'one', e.target.value)} placeholder='Enter Component' /></TableCell>
                                            <TableCell align="left"><TextField defaultValue={row.two}
                                                onChange={(e) => setValue(index, 'two', e.target.value)} placeholder='Enter Outcomes'/></TableCell>
                                            <TableCell align="left"><TextField defaultValue={row.three}
                                                onChange={(e) => setValue(index, 'three', e.target.value)} placeholder='Enter Weight'/></TableCell>
                                            <TableCell align="left">
                                                <Button variant='contained' color='secondary' onClick={(e) => deleteRow(index)}>Delete
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    <TableRow>
                                        <TableCell align="left"></TableCell>
                                        <TableCell align="right">Total Weight:</TableCell>
                                        <TableCell align="left">{sum}</TableCell>
                                        <TableCell align="left"></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>

                        <br />

                        <div>
                            <Button onClick={addRow} variant='contained' color='primary'>
                                Create Row
                            </Button>
                        </div>
                    </div>
                </Box>

                <br />

                <Divider />

                <Box width={1 / 2} paddingTop={5}>
                    <Button variant="contained" color="primary" onClick={handleSaveOpen}>
                        Save
                </Button>
                </Box>

                <CreateSaveDialog open={open} handleSaveClose={handleSaveClose} />
            </div>
            <br />
        </Box>

    );
}

export default Outline;