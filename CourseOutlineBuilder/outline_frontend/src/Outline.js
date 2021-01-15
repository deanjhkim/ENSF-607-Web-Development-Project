import React from 'react';
import { useState, useEffect } from "react";
import { ButtonGroup } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
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
import { Dialog, DialogTitle, DialogContent, DialogActions, makeStyles } from '@material-ui/core';
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Save from './Save'
export default Outline;


const useStyles = makeStyles((theme) => ({
    background: {
        color: 'primary'
    },
    toolbarButtons: {
        marginLeft: 'auto',
      }

}));

function Outline(props) {

    const classes = useStyles;

    // Getting the outlint rest Url.
    const location = useLocation();
    const [outlineID, setOutlineID] = useState(location.state.outlineID);

    const baseUrl = 'http://localhost:8000/';

    // Functions to create data objects

    const createCalendarInfo = (id, description, hours, credit, calendar_reference, outline) => {
        return { id, description, hours, credit, calendar_reference, outline }
    }

    const createLearningOutcome = (id, number, outcome, attribute, level, outline) => {
        return { id, number, outcome, attribute, level, outline }
    }

    const createTimetable = (id, section, days, time, location, outline) => {
        return { id, section, days, time, location, outline }
    }

    // const createInstructor = (id, section, first_name, last_name, phone, office, email, outline) => {
    //     return { id, section, first_name, last_name, phone, office, email, outline }
    // }

    const createExamination = (id, text, outline) => {
        return { id, text, outline }
    }

    const createCalculator = (id, text, outline) => {
        return { id, text, outline }
    }

    const createGradeComponent = (id, component, outcomes, weight, outline) => {
        return { id, component, outcomes, weight, outline }
    }

    const createTextbook = (id, title, author, year, publisher, requirement, outline) => {
        return { id, title, author, year, publisher, requirement, outline }
    }

    const createPolicy = (id, policy, outline) => {
        return { id, policy, outline }
    }

    //States that hold data objects for outline components.

    const [outline, setOutline] = useState({});
    const [calendarInfo, setCalendarInfo] = useState(createCalendarInfo(null, "", "", "", "", outlineID));
    const [learningOutcomes, setLearningOutcomes] = useState([]);
    const [timetables, setTimetables] = useState([]);
    const [instructors, setInstructors] = useState([]);
    const [examinations, setExaminations] = useState({});
    const [calculators, setCalculators] = useState({});
    const [gradeComponents, setGradeComponents] = useState([]);
    const [textbooks, setTextbooks] = useState([]);
    const [policies, setPolicies] = useState([]);

    const [loaded, setLoaded] = useState(false);

    //Functions to load data from the rest api.

    const getOutline = async () => {
        try {
            axios.get(`${baseUrl}outlines/${outlineID}/`)
                .then((response) => setOutline(response.data));

        } catch (error) {
            console.error(error);
        }
    };

    const getCalendarInformation = async () => {
        try {
            axios.get(`${baseUrl}calendarinformation/?outline=${outlineID}`)
                .then((response) => {
                    if (response.data.length !== 0) {
                        console.log('calendar data found');
                        setCalendarInfo(response.data[0]);
                    } else {
                        console.log('no calendar data found');
                    }
                })
        } catch (error) {
            console.error(error);
        }
    }

    const getLearningOutcomes = async () => {
        try {
            axios.get(`${baseUrl}learningoutcomes/?outline=${outlineID}`)
                .then((response) => {
                    if (response.data.length === 0) {
                        console.log('no learning outcome data found');
                        setLearningOutcomes([createLearningOutcome(null, "0", "", "", "", outlineID)]);
                    } else {
                        console.log('learning outcome data found');
                        setLearningOutcomes(response.data);
                    }
                })
        } catch (error) {
            console.error(error);
        }
    }

    const getTimetables = async () => {
        try {
            axios.get(`${baseUrl}timetables/?outline=${outlineID}`)
                .then((response) => {
                    if (response.data.length === 0) {
                        console.log('no timetable data found');
                        setTimetables([createTimetable(null, "", "", "", "", outlineID)]);
                    } else {
                        console.log('timetable data found');
                        setTimetables(response.data);
                    }
                })
        } catch (error) {
            console.error(error);
        }
    }

    // const getInstructors = async () => {
    //     try {
    //         axios.get(`${baseUrl}instructors/?outline=${outlineID}`)
    //             .then((response) => {
    //                 if (response.data.length === 0) {
    //                     console.log('no instructor data found');
    //                     setInstructors([createInstructor(null, "", "", "", "", "", "", outlineID)]);
    //                 } else {
    //                     console.log('instructor data found');
    //                     setInstructors(response.data);
    //                 }
    //             })
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    const getExaminations = async () => {
        try {
            axios.get(`${baseUrl}examinations/?outline=${outlineID}`)
                .then((response) => {
                    if (response.data.length === 0) {
                        console.log('no examination data found');
                        setExaminations(createExamination(null, "", outlineID));
                    } else {
                        console.log('examination data found');
                        setExaminations(response.data[0]);
                    }
                })
        } catch (error) {
            console.error(error);
        }
    }


    const getCalculators = async () => {
        try {
            axios.get(`${baseUrl}calculators/?outline=${outlineID}`)
                .then((response) => {
                    if (response.data.length === 0) {
                        console.log('no calculators data found');
                        setCalculators(createCalculator(null, "", outlineID));
                    } else {
                        console.log('calculators data found');
                        setCalculators(response.data[0]);
                    }
                })
        } catch (error) {
            console.error(error);
        }
    }

    const getGradeComponents = async () => {
        try {
            axios.get(`${baseUrl}finalgradecomponents/?outline=${outlineID}`)
                .then((response) => {
                    if (response.data.length === 0) {
                        console.log('no final grade component data found')
                        setGradeComponents([createGradeComponent(null, "", outlineID)]);
                    } else {
                        console.log('final grade component data found')
                        setGradeComponents(response.data)
                    }
                })
        } catch (error) {
            console.error(error);
        }
    }

    const getTextbooks = async () => {
        try {
            axios.get(`${baseUrl}textbooks/?outline=${outlineID}`)
                .then((response) => {
                    if (response.data.length === 0) {
                        console.log('no textbook data found');
                        setTextbooks(createTextbook(null, "", "", "", "", "", outlineID));
                    } else {
                        console.log('textbook data found');
                        setTextbooks(response.data);
                    }
                })
        } catch (error) {
            console.error(error);
        }
    }

    const getPolicies = async () => {
        try {
            axios.get(`${baseUrl}policies/?outline=${outlineID}`)
                .then((response) => {
                    if (response.data.length === 0) {
                        console.log('no policy data found');
                        setPolicies(createPolicy(null, "", outlineID));
                    } else {
                        console.log('policy data found');
                        setPolicies(response.data);
                    }
                })
        } catch (error) {
            console.error(error);
        }
    }

    // Initial render use effect
    useEffect(() => {
        console.log(`outline ${outlineID} has been opened...`);
        console.log('loading outline from backend...');
        getOutline();
        getCalendarInformation();
        getLearningOutcomes();
        getTimetables();
        // getInstructors();
        getExaminations();
        getCalculators();
        getGradeComponents();
        getTextbooks();
        getPolicies();
    }, [])

    console.log(calendarInfo)

    // useEffect(() => {

    //     console.log('DATA: ');
    //     console.log('outline: ');
    //     console.log(outline);
    //     console.log('calendar: ');
    //     console.log(calendarInfo);
    //     console.log('learning outcomes: ');
    //     console.log(learningOutcomes);
    //     console.log('Timetable: ');
    //     console.log(timetables);
    //     // console.log('Instructors: ');
    //     // console.log(instructors);
    //     console.log('Examinations: ');
    //     console.log(examinations);
    //     console.log('calculator: ');
    //     console.log(calculators);
    //     console.log('final grade components: ');
    //     console.log(gradeComponents);
    //     console.log('Textbooks: ');
    //     console.log(textbooks);
    //     console.log('Policies: ');
    //     console.log(policies);
    // })

    // Save states
    const handleSaveOpen = () => setSaveOpen(true);
    const handleSaveClose = () => setSaveOpen(false);
    const [open, setSaveOpen] = useState(false);

    const handleSave = () => {
        handleSaveOpen()
        console.log('SAVING OUTLINE...')
        saveCalendarInfo()
        console.log('SAVE COMPLETE')
    };

    const homeButton = () => {
        
        
        return (
        <Link to="/">
        <Button variant="contained" color="primary" >
            Home
        </Button>
        </Link>
        );
    }

    const saveCalendarInfo = async () => {
        console.log(calendarInfo.id)
        if (calendarInfo.id == null) {
            try {
                console.log('posting calendar info')
                axios.post(`${baseUrl}calendarinformation/`, {
                    description: calendarInfo.description,
                    hours: calendarInfo.hours,
                    credit: calendarInfo.credit,
                    calendar_reference: calendarInfo.calendar_reference,
                    outline: outlineID
                }
                ).then((response) => {
                    setCalendarInfo(response.data);
                })
            } catch (error) {
                console.log(error)
            }
        } else {
            try {
                console.log('putting calendar info')
                axios.put(`${baseUrl}calendarinformation/${calendarInfo.id}/`, {
                    description: calendarInfo.description,
                    hours: calendarInfo.hours,
                    credit: calendarInfo.credit,
                    calendar_reference: calendarInfo.calendar_reference,
                    outline: outlineID
                }
                ).then((response) => {
                    setCalendarInfo(response.data);
                    console.log(response)
                })
            } catch (error) {
                console.log(error)
            }
        }
        // else {
        //     console.log('putting calendar info')
        //     console.log(calendarInfo)
        //     axios.put(`${baseUrl}calendarinformation/${calendarInfo.id}/`, calendarInfo).then((response) => {
        //         console.log(response);
        //     });;
        // }
    }

    return (

        <div className="Outline">
            <MenuBar handleSaveOpen={handleSaveOpen} handleSave={handleSave} />
            <Grid container justify='center'>
                <Grid item align='center'>
                    <Box component={Paper} align='left'>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h1>
                            {`${outline.faculty} ${outline.number} `}
                            <br />
                            {`${outline.description}`}
                        </h1>
                        <h2>
                            {`${outline.term}`}
                        </h2>
                        <h2>
                            {`Section: ${outline.section}`}
                        </h2>
                        <br></br>

                        <Box border={2} align='center'>
                            <CalendarInfo calendarInfoID={calendarInfo.id} calendarInfo={calendarInfo} setCalendarInfo={setCalendarInfo} createCalendarInfo={createCalendarInfo} />
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


function CalendarInfo(props) {

    const { calendarInfoID, calendarInfo, setCalendarInfo, createCalendarInfo } = props;

    const [courseDesc, setCourseDesc] = useState("");
    const [courseHours, setCourseHours] = useState("");
    const [courseCredits, setCourseCredits] = useState("");
    const [calendarRef, setCalendarRef] = useState("");

    useEffect(() => {
        setCalendarInfo(createCalendarInfo(calendarInfoID, courseDesc, courseHours, courseCredits, calendarRef, calendarInfo.outline));
    }, [courseDesc, courseHours, courseCredits, calendarRef, calendarInfo.outline
    ])

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
                value={calendarInfo.description}
                placeholder="Enter Course Description"
                onChange={(e) => setCourseDesc(e.target.value)}
            />
            <h3>
                Course Hours
                </h3>

            <TextField
                multiline={true}
                value={calendarInfo.hours}
                placeholder="Enter Course Hours"
                onChange={(e) => setCourseHours(e.target.value)}
            />

            <h3>
                Academic Credit
                </h3>
            <TextField
                multiline={true}
                value={calendarInfo.credit}
                placeholder="Enter Number of Credits"
                onChange={(e) => setCourseCredits(e.target.value)}
            />
            <h3>
                Calendar Reference
                </h3>
            <TextField
                multiline={true}
                fullWidth={true}
                value={calendarInfo.calendar_reference}
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

    //id, section, days, time, location, outline (outlineID)
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


function MenuBar({ handleSaveOpen, handleSave }) {

    const classes = useStyles()

    return (
        <AppBar Position='static'>
            <Toolbar>
            
                    <Box >
                        <h1>
                            Course Outline Builder
                        </h1>
                    </Box>
                    
                    <Box className={classes.toolbarButtons}>
                        <ButtonGroup variant="contained" color="secondary" aria-label="outlined primary button group" >
                            <Button variant="contained" color="secondary" onClick={handleSave} align="left">
                                Save
                            </Button>
                            <Button component={ Link } to="/" variant="contained" color="secondary" align="left">
                                Home
                            </Button>
                        </ButtonGroup>
                    </Box>

                
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