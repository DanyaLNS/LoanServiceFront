import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { SvgIcon } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Appbar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background:'red' }}>
        <Toolbar variant="dense">
          <IconButton 
          edge="start" 
          color="white" 
          aria-label="menu" 
          sx={{ mr: 2 }}
          onClick={() => { navigate("/"); }}
          >
            <HomeIcon />
          </IconButton>

          <Typography variant="h6" color="white" component="div">
            MTS.fintech Loan Service
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
