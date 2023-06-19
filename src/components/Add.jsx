import { createTheme, InputLabel, TextField, ThemeProvider } from '@mui/material';
import React from 'react';

// Create a custom theme with the desired colors
const theme = createTheme({
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          '&:before': {
            borderBottomColor: 'green',
          },
          '&:after': {
            borderBottomColor: 'green',
          },
          '&:hover:not(.Mui-disabled):before': {
            borderBottomColor: 'green',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'green',
        },
        filled: {
          '&.Mui-focused': {
            color: 'green',
          },
        },
      },
    },
  },
});

const Add = () => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <br />
      <br />
      <br />
      <br />
      <ThemeProvider theme={theme}>
        <TextField variant="filled" color="secondary" label="BLOG NAME" />
        <br />
        <br />
        <TextField variant="filled" color="secondary" label="DESCRIPTION" />
        <br />
        <br />
        <TextField variant="filled" color="secondary" label="AUTHOR NAME" />
      </ThemeProvider>
      <br />
      <br />
      <button variant="outlined">ADD</button>
    </div>
  );
};

export default Add;
