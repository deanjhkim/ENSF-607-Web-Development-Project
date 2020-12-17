import React, { useState } from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import { TableRow, TableCell, TableContainer, TableHead, TableBody } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { Grid, Box } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';

import Outline from './Outline';
import { Link } from 'react-router-dom';




function TableHeader() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>
          Faculty
      </TableCell>
        <TableCell>
          Number
      </TableCell>
        <TableCell>
          Term
      </TableCell>
        <TableCell>
          Section
      </TableCell>
        <TableCell>
          Decription
      </TableCell>
        <TableCell>
          Date Created
      </TableCell>
      </TableRow>
    </TableHead>
  );
};

function OutlineTable({ outlines }) {

  const createRows = () => {
    outlines.map((row) => {
      return (
        <TableRow>
          <TableCell>
            {row.faculty}
          </TableCell>
          <TableCell>
            {row.number}
          </TableCell>
          <TableCell>
            {row.term}
          </TableCell>
          <TableCell>
            {row.section}
          </TableCell>
          <TableCell>
            {row.description}
          </TableCell>
          <TableCell>
            {row.dateCreated}
          </TableCell>
        </TableRow>
      );
    });
  };

  return (
    <Box>
      <TableContainer>
        <TableHead>
          <TableHeader />
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              {outlines[0].faculty}
            </TableCell>
            <TableCell>
              {outlines[0].number}
            </TableCell>
            <TableCell>
              {outlines[0].term}
            </TableCell>
            <TableCell>
              {outlines[0].section}
            </TableCell>
            <TableCell>
              {outlines[0].description}
            </TableCell>
            <TableCell>
              {outlines[0].dateCreated}
            </TableCell>
          </TableRow>
        </TableBody>
      </TableContainer>
    </Box>
  );
}



function CreateFormDialog({ open, handleCreateClose }) {
  return (
    <Dialog open={open}>
      <DialogTitle>
        Create New Outline
      </DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid container>
            <Grid item xs>
              <TextField label='Faculty' />
            </Grid>
            <Grid item xs>
              <TextField label='Number' />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs>
              <TextField label='Term' />
            </Grid>
            <Grid item xs>
              <TextField label='Section' />
            </Grid>
          </Grid>
        </Grid>
        <Box>
          <TextField label='Description' fullWidth='true' />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCreateClose} color="primary">
          Cancel
        </Button>
        <Link to='/outline' style={{ textDecoration: 'none' }} >
        <Button color="primary" renderAs='button'>
          Create
        </Button>
        </Link>
      </DialogActions>
    </Dialog>
  );
}

function Dashboard() {

  function createOutline(faculty, number, term, section, description, dateCreated) {
    return { faculty, number, term, section, description, dateCreated };
  }

  const outlines =
    [createOutline('ENSF', '607', 'W2020', 'LO1', 'Principles of Sowftware Design', '2020-06-12'),
    createOutline('ENSF', '607', 'W2020', 'LO1', 'Principles of Sowftware Design', '2020-06-12')]

  const handleCreateOpen = () => setCreateOpen(true);

  const handleCreateClose = () => setCreateOpen(false);

  const [open, setCreateOpen] = useState(false);

  const [selected, setSelected] = useState();

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


      <Box display='flex' margin='auto' justifyContent='center'>
        <OutlineTable outlines={outlines} />
      </Box>


      <CreateFormDialog open={open} handleCreateClose={handleCreateClose} />

    </div>
  );
}


export default Dashboard;
