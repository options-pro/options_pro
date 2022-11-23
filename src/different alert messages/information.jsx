import React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function InformationAlert(props) {
    return (
      <Stack sx={{ width: '75%', marginTop: "20px" }} spacing={2}>
        <Alert variant="outlined" severity="info">
          There is no {props.name} for the selected symbol on that date.
        </Alert>
      </Stack>
    );
  }
  