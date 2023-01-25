/* eslint-disable import/no-extraneous-dependencies */
import { useState, MouseEvent } from 'react';

import { Popover, IconButton, Avatar, AppBar, Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Notifications from './Notifications/Notifications';
import { currentUser } from './Notifications/lib/mock';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#191922' },
    background: { paper: '#191922' },
  },
});

function App() {

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const popoverId = open ? 'simple-popover' : undefined;
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppBar position="static">
          <Grid container justifyContent="end">
            <IconButton sx={{ p: 0 }} onClick={handleClick}>
              <Avatar
                alt={currentUser.name}
                src={currentUser.avatar}
                sx={{ width: 56, height: 56 }}
              />
            </IconButton>
            <Popover
              id={popoverId}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <Notifications />
            </Popover>
          </Grid>
      </AppBar>
    </ThemeProvider>
  );
}

export default App;
