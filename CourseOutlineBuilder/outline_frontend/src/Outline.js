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
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid'
import { Dialog, DialogTitle, DialogContent, DialogActions, Divider, makeStyles } from '@material-ui/core';
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default Outline;


const useStyles = makeStyles((theme) => ({
    background: {
        color: 'primary'
    }

}));

function Outline(props) {

    const classes = useStyles;

    const { faculty, number, term, section, description } = props;

    const handleSaveOpen = () => setSaveOpen(true);
    const handleSaveClose = () => setSaveOpen(false);
    const [open, setSaveOpen] = useState(false);

    return (

        <div className="Outline">
            <MenuBar handleSaveOpen={handleSaveOpen} />
            <Grid container justify='center'>
                <Grid item align='center'>
                    <Box component={Paper} align='left'>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h1>
                            University of Calgary Course Outline Builder
                        </h1>
                        <br></br>

                        <Box border={2} align='center'>
                            <CalendarInfo />
                        </Box>
                        <br></br>
                        <br></br>

                        <Box border={2} align='center'>
                            <LearningOutcomes />
                        </Box>
                        <br></br>
                        <br></br>

                        <Box border={2} align='center'>
                            <Timetable />
                        </Box>
                        <br></br>
                        <br></br>

                        <Box border={2} align='center'>
                            <CourseInstructors />
                        </Box>
                        <br></br>
                        <br></br>

                        <Box border={2} align='center'>
                            <Examinations />
                        </Box>
                        <br></br>
                        <br></br>

                        <Box border={2} align='center'>
                            <UseOfCalculators />
                        </Box>
                        <br></br>
                        <br></br>

                        <Box border={2} align='center'>
                            <FinalGradeDetermination />
                        </Box>
                        <br></br>
                        <br></br>

                        <Box border={2} align='center'>
                            <Textbook />
                        </Box>
                        <br></br>
                        <br></br>

                        <Box border={2} align='center'>
                            <CoursePolicies />
                        </Box>
                        <br></br>
                        <br></br>

                        <CreateSaveDialog open={open} handleSaveClose={handleSaveClose} />
                    </Box>
                </Grid>
            </Grid>
        </div >
    );
}

function CalendarInfo() {

    const [courseDesc, setCourseDesc] = useState("");
    const [courseHours, setCourseHours] = useState("");
    const [courseCredits, setCourseCredits] = useState("");
    const [calendarRef, setCalendarRef] = useState("");

    return (
        <Box width="95%" align='left'>
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
                border={1}
            />

            <br></br>
            <br></br>
        </Box>
    );
};

function LearningOutcomes() {

    const createRow = (one, two, three) => {
        return { one, two, three };
    };
    const [tableRows, setTableRows] = useState([createRow("", "", "")]);
    const setValue = (index, column, value) => {
        let newRows = tableRows;
        newRows[index][column] = value;
        setTableRows(newRows);
        console.log(tableRows);
    };
    const deleteRow = (index) => {
        console.log(index)
        console.log(tableRows)

        let arr = [...tableRows]

        arr.splice(index, 1)

        setTableRows(arr)

        console.log(tableRows)

    };
    const addRow = () => {
        setTableRows(tableRows.concat([createRow("", "", "")]));
        console.log(tableRows)
    };
    const [editIdx, setEditIdx] = useState(-1);
    const startEdit = idx => {
        setEditIdx(idx);
    };
    const stopEdit = () => {
        setEditIdx(-1);
    };

    return (
        <Box Box width="95%" align='left'>
            <h2>
                2. Learning Outcomes
            </h2>

            <div>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>Learning Outcome</TableCell>
                                <TableCell>Grade Attribute</TableCell>
                                <TableCell>Instruction Level</TableCell>
                                <TableCell>Edit</TableCell>
                                <TableCell>Delete</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableRows.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell align="left">
                                        {index + "  "}
                                    </TableCell>

                                    {editIdx === index ? (
                                        <TableCell align="left">
                                            <TextField defaultValue={row.one}
                                                onChange={(e) => setValue(index, 'one', e.target.value)} placeholder='Enter Learning Outcome' />
                                        </TableCell>) :
                                        (<TableCell>
                                            {row.one}
                                        </TableCell>)}
                                    {editIdx === index ? (
                                        <TableCell align="left">
                                            <Select
                                                defaultValue={row.two}
                                                onChange={(e) => setValue(index, 'two', e.target.value)} >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={"A1"}>A1</MenuItem>
                                                <MenuItem value={"A2"}>A2</MenuItem>
                                                <MenuItem value={"A3"}>A3</MenuItem>
                                                <MenuItem value={"A4"}>A4</MenuItem>
                                                <MenuItem value={"A5"}>A5</MenuItem>
                                                <MenuItem value={"A6"}>A6</MenuItem>
                                                <MenuItem value={"A7"}>A7</MenuItem>
                                                <MenuItem value={"A8"}>A8</MenuItem>
                                                <MenuItem value={"A9"}>A9</MenuItem>
                                                <MenuItem value={"A10"}>A10</MenuItem>
                                                <MenuItem value={"A11"}>A11</MenuItem>
                                                <MenuItem value={"A12"}>A12</MenuItem>
                                            </Select>
                                        </TableCell>) :
                                        (<TableCell>
                                            {row.two}
                                        </TableCell>)}
                                    {editIdx === index ? (
                                        <TableCell align="left">
                                            <Select
                                                defaultValue={row.two}
                                                onChange={(e) => setValue(index, 'two', e.target.value)} >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={"I"}>I</MenuItem>
                                                <MenuItem value={"D"}>D</MenuItem>
                                                <MenuItem value={"A"}>A</MenuItem>
                                            </Select>
                                        </TableCell>) :
                                        (<TableCell>
                                            {row.three}
                                        </TableCell>)}
                                    <TableCell>
                                        {editIdx !== index ? (
                                            <EditIcon onClick={() => startEdit(index)} style={{ cursor: "pointer" }} />
                                        ) : (
                                                <CheckIcon onClick={stopEdit} style={{ cursor: "pointer" }} />
                                            )}
                                    </TableCell>
                                    <TableCell>
                                        {editIdx !== index ? (
                                            <DeleteIcon onClick={(e) => deleteRow(index)} style={{ cursor: "pointer" }} />
                                        ) : (
                                                <CloseIcon onClick={stopEdit} style={{ cursor: "pointer" }} />
                                            )}
                                    </TableCell>
                                </TableRow>
                            ))}
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

            <br></br>
            <br></br>
        </Box>
    );
};

function Timetable() {

    const createRow = (one, two, three, four) => {
        return { one, two, three, four };
    };
    const [tableRows, setTableRows] = useState([createRow("", "", "", "")]);
    const setValue = (index, column, value) => {
        let newRows = tableRows;
        newRows[index][column] = value;
        setTableRows(newRows);
        console.log(tableRows);
    };
    const deleteRow = (index) => {
        console.log(index)
        console.log(tableRows)

        let arr = [...tableRows]

        arr.splice(index, 1)

        setTableRows(arr)

        console.log(tableRows)

    };
    const addRow = () => {
        setTableRows(tableRows.concat([createRow("", "", "", "")]));
        console.log(tableRows)
    };
    const [editIdx, setEditIdx] = useState(-1);
    const startEdit = idx => {
        setEditIdx(idx);
    };
    const stopEdit = () => {
        setEditIdx(-1);
    };

    return (
        <Box Box width="95%" align='left'>
            <h2>
                3. Timetable
            </h2>

            <div>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Section</TableCell>
                                <TableCell>Day(s) of Week</TableCell>
                                <TableCell>Time</TableCell>
                                <TableCell>Location</TableCell>
                                <TableCell>Edit</TableCell>
                                <TableCell>Delete</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableRows.map((row, index) => (
                                <TableRow key={index}>
                                    {editIdx === index ? (
                                        <TableCell align="left">
                                            <TextField defaultValue={row.one}
                                                onChange={(e) => setValue(index, 'one', e.target.value)} placeholder='Enter Section' />
                                        </TableCell>) :
                                        (<TableCell>
                                            {row.one}
                                        </TableCell>)}

                                    {editIdx === index ? (
                                        <TableCell align="left">
                                            <TextField defaultValue={row.two}
                                                onChange={(e) => setValue(index, 'two', e.target.value)} placeholder='Enter Day(s) of Week' />
                                        </TableCell>) :
                                        (<TableCell>
                                            {row.two}
                                        </TableCell>)}
                                    {editIdx === index ? (
                                        <TableCell align="left">
                                            <TextField defaultValue={row.three}
                                                onChange={(e) => setValue(index, 'three', e.target.value)} placeholder='Enter Time' />
                                        </TableCell>) :
                                        (<TableCell>
                                            {row.three}
                                        </TableCell>)}
                                    {editIdx === index ? (
                                        <TableCell align="left">
                                            <TextField defaultValue={row.four}
                                                onChange={(e) => setValue(index, 'four', e.target.value)} placeholder='Enter Location' />
                                        </TableCell>) :
                                        (<TableCell>
                                            {row.four}
                                        </TableCell>)}
                                    <TableCell>
                                        {editIdx !== index ? (
                                            <EditIcon onClick={() => startEdit(index)} style={{ cursor: "pointer" }} />
                                        ) : (
                                                <CheckIcon onClick={stopEdit} style={{ cursor: "pointer" }} />
                                            )}
                                    </TableCell>
                                    <TableCell>
                                        {editIdx !== index ? (
                                            <DeleteIcon onClick={(e) => deleteRow(index)} style={{ cursor: "pointer" }} />
                                        ) : (
                                                <CloseIcon onClick={stopEdit} style={{ cursor: "pointer" }} />
                                            )}
                                    </TableCell>
                                </TableRow>
                            ))}
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

            <br></br>
            <br></br>
        </Box>
    );
};

function CourseInstructors() {

    const createRow = (one, two, three, four, five, six) => {
        return { one, two, three, four, five, six };
    };
    const [tableRows, setTableRows] = useState([createRow("", "", "", "", "", "")]);
    const setValue = (index, column, value) => {
        let newRows = tableRows;
        newRows[index][column] = value;
        setTableRows(newRows);
        console.log(tableRows);
    };
    const deleteRow = (index) => {
        console.log(index)
        console.log(tableRows)

        let arr = [...tableRows]

        arr.splice(index, 1)

        setTableRows(arr)

        console.log(tableRows)

    };
    const addRow = () => {
        setTableRows(tableRows.concat([createRow("", "", "", "", "", "")]));
        console.log(tableRows)
    };
    const [editIdx, setEditIdx] = useState(-1);
    const startEdit = idx => {
        setEditIdx(idx);
    };
    const stopEdit = () => {
        setEditIdx(-1);
    };

    return (
        <Box Box width="95%" align='left'>
            <h2>
                4. Course Instructors
            </h2>

            <div>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Section</TableCell>
                                <TableCell>First Name</TableCell>
                                <TableCell>Family Name</TableCell>
                                <TableCell>Phone</TableCell>
                                <TableCell>Office</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Edit</TableCell>
                                <TableCell>Delete</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableRows.map((row, index) => (
                                <TableRow key={index}>
                                    {editIdx === index ? (
                                        <TableCell align="left">
                                            <TextField defaultValue={row.one}
                                                onChange={(e) => setValue(index, 'one', e.target.value)} placeholder='Enter Section' />
                                        </TableCell>) :
                                        (<TableCell>
                                            {row.one}
                                        </TableCell>)}

                                    {editIdx === index ? (
                                        <TableCell align="left">
                                            <TextField defaultValue={row.two}
                                                onChange={(e) => setValue(index, 'two', e.target.value)} placeholder='Enter First Name' />
                                        </TableCell>) :
                                        (<TableCell>
                                            {row.two}
                                        </TableCell>)}
                                    {editIdx === index ? (
                                        <TableCell align="left">
                                            <TextField defaultValue={row.three}
                                                onChange={(e) => setValue(index, 'three', e.target.value)} placeholder='Enter Family Name' />
                                        </TableCell>) :
                                        (<TableCell>
                                            {row.three}
                                        </TableCell>)}
                                    {editIdx === index ? (
                                        <TableCell align="left">
                                            <TextField defaultValue={row.four}
                                                onChange={(e) => setValue(index, 'four', e.target.value)} placeholder='Enter Phone' />
                                        </TableCell>) :
                                        (<TableCell>
                                            {row.four}
                                        </TableCell>)}
                                    {editIdx === index ? (
                                        <TableCell align="left">
                                            <TextField defaultValue={row.five}
                                                onChange={(e) => setValue(index, 'five', e.target.value)} placeholder='Enter Office' />
                                        </TableCell>) :
                                        (<TableCell>
                                            {row.five}
                                        </TableCell>)}
                                    {editIdx === index ? (
                                        <TableCell align="left">
                                            <TextField defaultValue={row.four}
                                                onChange={(e) => setValue(index, 'six', e.target.value)} placeholder='Enter Email' />
                                        </TableCell>) :
                                        (<TableCell>
                                            {row.six}
                                        </TableCell>)}
                                    <TableCell>
                                        {editIdx !== index ? (
                                            <EditIcon onClick={() => startEdit(index)} style={{ cursor: "pointer" }} />
                                        ) : (
                                                <CheckIcon onClick={stopEdit} style={{ cursor: "pointer" }} />
                                            )}
                                    </TableCell>
                                    <TableCell>
                                        {editIdx !== index ? (
                                            <DeleteIcon onClick={(e) => deleteRow(index)} style={{ cursor: "pointer" }} />
                                        ) : (
                                                <CloseIcon onClick={stopEdit} style={{ cursor: "pointer" }} />
                                            )}
                                    </TableCell>
                                </TableRow>
                            ))}
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

            <br></br>
            <br></br>
        </Box>
    );
};

function Examinations() {

    const [examInfo, setExamInfo] = useState("");

    return (
        <Box Box width="95%" align='left'>
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
            <br></br>
            <br></br>
        </Box>
    );

};

function UseOfCalculators() {

    const [calculators, setCalculators] = useState("");

    return (
        <Box width="95%" align='left'>
            <h2>
                6. Use Of Calculators in Examinations
        </h2>

            <TextField

                fullWidth={true}
                placeholder="Enter Calculator Policy"
                onChange={(e) => setCalculators(e.target.value)}
                border={1}
            />

            <br></br>
            <br></br>
        </Box>
    );
};

function FinalGradeDetermination() {

    const createRow = (one, two, three) => {
        return { one, two, three };
    };
    const [tableRows, setTableRows] = useState([createRow("", "", "")]);
    const [sum, setSum] = useState(0);
    const setValue = (index, column, value) => {
        let newRows = tableRows;
        newRows[index][column] = value;
        setTableRows(newRows);
        console.log(tableRows);
        updateSum();
    };
    const deleteRow = (index) => {
        console.log(index)
        console.log(tableRows)

        let arr = [...tableRows]

        arr.splice(index, 1)

        setTableRows(arr)

        console.log(tableRows)

        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            console.log(parseInt(arr[i]["three"]));
            let n = parseInt(arr[i]["three"])
            {
                Number.isInteger(n) ?
                    (total += n) :
                    (total += 0)
            }
        };
        setSum(total);

    };
    const addRow = () => {
        setTableRows(tableRows.concat([createRow("", "", "")]));
        console.log(tableRows)
    };
    const updateSum = () => {
        let total = 0;
        for (let i = 0; i < tableRows.length; i++) {
            console.log(parseInt(tableRows[i]["three"]));
            let n = parseInt(tableRows[i]["three"])
            {
                Number.isInteger(n) ?
                    (total += n) :
                    (total += 0)
            }
        };
        setSum(total);
    };
    const [editIdx, setEditIdx] = useState(-1);
    const startEdit = idx => {
        setEditIdx(idx);
    };
    const stopEdit = () => {
        setEditIdx(-1);
    };


    return (
        <Box Box width="95%" align='left'>
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
                                <TableCell>Edit</TableCell>
                                <TableCell>Delete</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableRows.map((row, index) => (
                                <TableRow key={index}>
                                    {editIdx === index ? (
                                        <TableCell align="left">
                                            <TextField defaultValue={row.one}
                                                onChange={(e) => setValue(index, 'one', e.target.value)} placeholder='Enter Component' />
                                        </TableCell>) :
                                        (<TableCell>
                                            {row.one}
                                        </TableCell>)}
                                    {editIdx === index ? (
                                        <TableCell align="left">
                                            <TextField defaultValue={row.two}
                                                onChange={(e) => setValue(index, 'two', e.target.value)} placeholder='Enter Outcomes' />
                                        </TableCell>) :
                                        (<TableCell>
                                            {row.two}
                                        </TableCell>)}
                                    {editIdx === index ? (
                                        <TableCell align="left">
                                            <TextField defaultValue={row.three}
                                                onChange={(e) => setValue(index, 'three', e.target.value)} placeholder='Enter Weight' />
                                        </TableCell>) :
                                        (<TableCell>
                                            {row.three}
                                        </TableCell>)}
                                    <TableCell>
                                        {editIdx !== index ? (
                                            <EditIcon onClick={() => startEdit(index)} style={{ cursor: "pointer" }} />
                                        ) : (
                                                <CheckIcon onClick={stopEdit} style={{ cursor: "pointer" }} />
                                            )}
                                    </TableCell>
                                    <TableCell>
                                        {editIdx !== index ? (
                                            <DeleteIcon onClick={(e) => deleteRow(index)} style={{ cursor: "pointer" }} />
                                        ) : (
                                                <CloseIcon onClick={stopEdit} style={{ cursor: "pointer" }} />
                                            )}
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

            <br></br>
            <br></br>
        </Box>
    );

};

function Textbook() {

    const createRow = (one, two, three, four, five) => {
        return { one, two, three, four, five };
    };
    const [tableRows, setTableRows] = useState([createRow("", "", "", "", "")]);
    const setValue = (index, column, value) => {
        let newRows = tableRows;
        newRows[index][column] = value;
        setTableRows(newRows);
        console.log(tableRows);
    };
    const deleteRow = (index) => {
        console.log(index)
        console.log(tableRows)

        let arr = [...tableRows]

        arr.splice(index, 1)

        setTableRows(arr)

        console.log(tableRows)

    };
    const addRow = () => {
        setTableRows(tableRows.concat([createRow("", "", "", "", "")]));
        console.log(tableRows)
    };
    const [editIdx, setEditIdx] = useState(-1);
    const startEdit = idx => {
        setEditIdx(idx);
    };
    const stopEdit = () => {
        setEditIdx(-1);
    };

    return (
        <Box Box width="95%" align='left'>
            <h2>
                8. Textbook
            </h2>

            <div>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell>Author</TableCell>
                                <TableCell>Edition, Year</TableCell>
                                <TableCell>Publisher</TableCell>
                                <TableCell>Required/ Recommended</TableCell>
                                <TableCell>Edit</TableCell>
                                <TableCell>Delete</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableRows.map((row, index) => (
                                <TableRow key={index}>
                                    {editIdx === index ? (
                                        <TableCell align="left">
                                            <TextField defaultValue={row.one}
                                                onChange={(e) => setValue(index, 'one', e.target.value)} placeholder='Enter Title' />
                                        </TableCell>) :
                                        (<TableCell>
                                            {row.one}
                                        </TableCell>)}

                                    {editIdx === index ? (
                                        <TableCell align="left">
                                            <TextField defaultValue={row.two}
                                                onChange={(e) => setValue(index, 'two', e.target.value)} placeholder='Enter Author' />
                                        </TableCell>) :
                                        (<TableCell>
                                            {row.two}
                                        </TableCell>)}
                                    {editIdx === index ? (
                                        <TableCell align="left">
                                            <TextField defaultValue={row.three}
                                                onChange={(e) => setValue(index, 'three', e.target.value)} placeholder='Enter Edition, Year' />
                                        </TableCell>) :
                                        (<TableCell>
                                            {row.three}
                                        </TableCell>)}
                                    {editIdx === index ? (
                                        <TableCell align="left">
                                            <TextField defaultValue={row.four}
                                                onChange={(e) => setValue(index, 'four', e.target.value)} placeholder='Enter Publisher' />
                                        </TableCell>) :
                                        (<TableCell>
                                            {row.four}
                                        </TableCell>)}
                                    {editIdx === index ? (
                                        <TableCell align="left">
                                            <Select
                                                defaultValue={row.five}
                                                onChange={(e) => setValue(index, 'five', e.target.value)} >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={"Required"}>Required</MenuItem>
                                                <MenuItem value={"Recommended"}>Recommended</MenuItem>
                                            </Select>
                                        </TableCell>) :
                                        (<TableCell>
                                            {row.five}
                                        </TableCell>)}
                                    <TableCell>
                                        {editIdx !== index ? (
                                            <EditIcon onClick={() => startEdit(index)} style={{ cursor: "pointer" }} />
                                        ) : (
                                                <CheckIcon onClick={stopEdit} style={{ cursor: "pointer" }} />
                                            )}
                                    </TableCell>
                                    <TableCell>
                                        {editIdx !== index ? (
                                            <DeleteIcon onClick={(e) => deleteRow(index)} style={{ cursor: "pointer" }} />
                                        ) : (
                                                <CloseIcon onClick={stopEdit} style={{ cursor: "pointer" }} />
                                            )}
                                    </TableCell>
                                </TableRow>
                            ))}
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

            <br></br>
            <br></br>
        </Box>
    );
};

function CoursePolicies() {

    const createRow = (one) => {
        return { one };
    };
    const [tableRows, setTableRows] = useState([createRow("")]);
    const setValue = (index, column, value) => {
        let newRows = tableRows;
        newRows[index][column] = value;
        setTableRows(newRows);
        console.log(tableRows);
    };
    const deleteRow = (index) => {
        console.log(index)
        console.log(tableRows)

        let arr = [...tableRows]

        arr.splice(index, 1)

        setTableRows(arr)

        console.log(tableRows)

    };
    const addRow = () => {
        setTableRows(tableRows.concat([createRow("")]));
        console.log(tableRows)
    };
    const [editIdx, setEditIdx] = useState(-1);
    const startEdit = idx => {
        setEditIdx(idx);
    };
    const stopEdit = () => {
        setEditIdx(-1);
    };

    return (
        <Box Box width="95%" align='left'>
            <h2>
                9. Course Policies
            </h2>

            <div>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Policy</TableCell>
                                <TableCell>Edit</TableCell>
                                <TableCell>Delete</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableRows.map((row, index) => (
                                <TableRow key={index}>
                                    {editIdx === index ? (
                                        <TableCell align="left">
                                            <TextField defaultValue={row.one}
                                                multiline={true}
                                                rows={12}
                                                rowsMax={12}
                                                fullWidth={true}
                                                onChange={(e) => setValue(index, 'one', e.target.value)} placeholder='Enter Policy' />
                                        </TableCell>) :
                                        (<TableCell>
                                            {row.one}
                                        </TableCell>)}
                                    <TableCell>
                                        {editIdx !== index ? (
                                            <EditIcon onClick={() => startEdit(index)} style={{ cursor: "pointer" }} />
                                        ) : (
                                                <CheckIcon onClick={stopEdit} style={{ cursor: "pointer" }} />
                                            )}
                                    </TableCell>
                                    <TableCell>
                                        {editIdx !== index ? (
                                            <DeleteIcon onClick={(e) => deleteRow(index)} style={{ cursor: "pointer" }} />
                                        ) : (
                                                <CloseIcon onClick={stopEdit} style={{ cursor: "pointer" }} />
                                            )}
                                    </TableCell>
                                </TableRow>
                            ))}
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

            <br></br>
            <br></br>
        </Box>
    );
};


function MenuBar({ handleSaveOpen }) {

    return (
        <AppBar Position='static'>
            <Toolbar>
                <section>
                    <Button variant="contained" color="primary" onClick={handleSaveOpen}>
                        Save
                    </Button>
                </section>
            </Toolbar>
        </AppBar>



    );
};

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
};