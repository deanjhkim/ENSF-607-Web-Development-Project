import React, { useEffect, useState, useRef } from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import { TableRow, TableCell, TableContainer, TableHead, TableBody, Table } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { Grid, Box } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'
import Outline from './Outline'
import { Link, Redirect, Route, useHistory } from 'react-router-dom';
import { Paper } from '@material-ui/core'

function OutlineTable(props) {

  const { outlines, itemSelected, setItemSelected } = props;

  const handleSelection = (e, index) => {
    if (itemSelected === index) {
      setItemSelected(null);
    }
    else setItemSelected(index);
  };

  let isSelected = (index) => itemSelected === index;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Course Faculty</TableCell>
            <TableCell align="left">Course Number</TableCell>
            <TableCell align="left">Term</TableCell>
            <TableCell align="left">Section</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Date Created</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {outlines.map((row, index) => (
            <TableRow key={index}
              onClick={(e) =>
                handleSelection(e, index)}
              hover role="checkbox"
              selected={isSelected(index)}>
              <TableCell>
                {row.faculty}
              </TableCell>
              <TableCell align="left">{row.number}</TableCell>
              <TableCell align="left">{row.term}</TableCell>
              <TableCell align="left">{row.section}</TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="left">{row.dateCreated}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table >
    </TableContainer >
  );
}

function CreateFormDialog({ open, handleCreateClose }) {

  const history = useHistory();

  const [faculty, setFaculty] = useState("");
  const [facultyError, setFacultyError] = useState(false);

  const [number, setNumber] = useState("");
  const [numberError, setNumberError] = useState(false);

  const [term, setTerm] = useState("");
  const [termError, setTermError] = useState(true);

  const [section, setSection] = useState("");
  const [sectionError, setSectionError] = useState(true);

  const [description, setDescription] = useState("");
  const [descError, setDescError] = useState(true);

  const checkFields = () => {
    if (faculty === "" || faculty === null) {
      setFacultyError(true);
    } else {
      setFacultyError(false)
    }
    if (number === "" || number === null) {
      setNumberError(true);
    } else {
      setNumberError(false)
    }
    if (term === "" || term === null) {
      setTermError(true);
    } else {
      setTermError(false)
    }
    if (section === "" || section === null) {
      setSectionError(true);
    } else {
      setSectionError(false)
    }
    if (description === "" || section === null) {
      setDescError(true);
    } else {
      setDescError(false)
    }
  };

  const filledFields = () => {
    if (facultyError === false && numberError === false
      && termError === false && sectionError === false
      && descError === false) {
      return true;
    } else return false;
  };

  const handleCreate = () => {
    checkFields();
    if (filledFields()) {
      goToOutline();
    }
  }

  const goToOutline = () => history.push('/outline');

  const displayErrors = () => {
    console.log(facultyError);
    console.log(numberError);
    console.log(termError);
    console.log(sectionError);
    console.log(descError);
  }

  const displayFields = () => {
    console.log(faculty);
    console.log(number);
    console.log(term);
    console.log(section);
    console.log(description);
  }

  const updateValues = () => {
  }
  return (
    <Dialog open={open}>
      <DialogTitle>
        Create New Outline
      </DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid container>
            <Grid item xs>
              <TextField label='Faculty' onChange={e => setFaculty(e.target.value)} error={facultyError} helperText={facultyError ? "Field Required" : ''} />
            </Grid>
            <Grid item xs>
              <TextField label='Number' onChange={e => setNumber(e.target.value)} error={numberError} helperText={numberError ? "Field Required" : ''}/>
            </Grid>
          </Grid>
            <Grid container>
              <Grid item xs>
                <TextField label='Term' error={termError} onChange={e => setTerm(e.target.value)} helperText={termError ? "Field Required" : ''} />
              </Grid>
              <Grid item xs>
                <TextField label='Section' onChange={e => setSection(e.target.value)} error={sectionError} helperText={sectionError ? "Field Required" : ''} />
              </Grid>
            </Grid>
          </Grid>
          <Box>
            <TextField label='Description' fullWidth onChange={e => setDescription(e.target.value)} error={descError} helperText={descError ? "Field Required" : ''} />
          </Box>
      </DialogContent>
        <DialogActions>
          <Button onClick={handleCreateClose} color="primary">
            Cancel
        </Button>
          <Button color="primary" onClick={handleCreate, displayErrors}>
            Create
        </Button>
        </DialogActions>
    </Dialog>
  );
}

function Dashboard() {

        function createOutline(faculty, number, term, section, description, dateCreated) {
          return { faculty, number, term, section, description, dateCreated };
        }

  const outlines =
    [createOutline('ENSF', '607', 'W2020', 'LO1', 'Software Design and Architecture I', '2020-06-12'),
    createOutline('ENSF', '608', 'F2020', 'LO1', 'Software Design and Architecture II', '2020-08-11')]

  const handleCreateOpen = () => setCreateOpen(true);

  const handleCreateClose = () => setCreateOpen(false);

  const [open, setCreateOpen] = useState(false);

  const [itemSelected, setItemSelected] = useState();

  return (
      <div className="Dashboard">
        <Box paddingLeft={2}>
          <h1>
            Course Outline Builder
        </h1>
        </Box>

        <Box paddingLeft={2}>
          <ButtonGroup color="primary" aria-label="outlined primary button group">
            <Button onClick={handleCreateOpen}>Create </Button>
            <Button>Open </Button>
            <Button>Delete </Button>
          </ButtonGroup>
        </Box>

        <Box paddingTop={2}>
          <Divider />
        </Box>

        <OutlineTable outlines={outlines} itemSelected={itemSelected} setItemSelected={setItemSelected} />


        <CreateFormDialog open={open} handleCreateClose={handleCreateClose} />

      </div>

  );
}


export default Dashboard;
