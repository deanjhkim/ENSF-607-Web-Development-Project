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

import { Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';

function Outline() {

    const [courseDesc, setCourseDesc] = useState("");

    const [courseHours, setCourseHours] = useState("");

    const [courseCredits, setCourseCredits] = useState("");

    const [calendarRef, setCalendarRef] = useState("");

    const [examInfo, setExamInfo] = useState("");

    const [rows, setRows] = useState([{}]);

    const handleAddRow = () => {
        const item = {
            id: "standard-full-width",
            placeholder: "Enter Learning Objective",
            inputProps: { 'aria-label': 'description', maxLength: 100 }
        };

        setRows([...rows, item]);
    };

    const handleRemoveRow = () => {
        setRows(rows.slice(0, -1));
    };

    const handleRemoveSpecificRow = (idx) => {
        const newRows = [...rows]
        newRows.splice(idx, 1)
        setRows(newRows)
    };

    const handleSaveOpen = () => setSaveOpen(true);

    const handleSaveClose = () => setSaveOpen(false);

    const [open, setSaveOpen] = useState(false);

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

    return (
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
                    Calendar Reference
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

                <table
                    className="table table-bordered table-hover"
                    id="tab_logic"
                >
                    <tbody>
                        {rows.map((item, idx) => (
                            <tr id="addr0" key={idx}>
                                <td>

                                    {idx + "  "}

                                    <Input

                                        id="standard-full-width"
                                        placeholder="Enter Learning Objective"
                                        //control the maximum learning outcome text length
                                        inputProps={{ 'aria-label': 'description', maxLength: 100 }}
                                        value={rows[idx].mobile}

                                    />

                                </td>
                                <Button
                                    className="btn btn-outline-danger btn-sm"
                                    color="secondary"
                                    onClick={(e) => handleRemoveSpecificRow(idx)}
                                >
                                    Remove
                                </Button>
                                <td>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <Button
                    onClick={(e) => handleAddRow()}
                    className="btn btn-primary"
                    variant="contained"
                    color="primary"
                >
                    Add Learning Outcome
              </Button>
                <Button
                    onClick={(e) => handleRemoveRow()}
                    variant="contained"
                    color="secondary"
                    className="btn btn-danger float-right"
                >
                    Delete Learning Outcome
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

            </Box>


            <Box width={1 / 2}>
                <Button variant="contained" color="primary" onClick={handleSaveOpen}>
                    Save
                </Button>
            </Box>

            <CreateSaveDialog open={open} handleSaveClose={handleSaveClose} />


        </div>
    );
}


export default Outline;