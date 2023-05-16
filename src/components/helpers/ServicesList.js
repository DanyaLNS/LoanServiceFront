import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

export default function ServicesList() {
  const navigate = useNavigate();

  return (
    <List
      sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton
        onClick={() => { navigate("/createOrder"); }}
      >
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Подать заявку на оформление"/>
      </ListItemButton>

      <ListItemButton
        onClick={() => { navigate("/tariffs"); }}
      >
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Посмотреть тарифы" />
      </ListItemButton>

      <ListItemButton
        onClick={() => { navigate("/orderStatus"); }}
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Узнать статус заявки" />
      </ListItemButton>

      
      <ListItemButton
        onClick={() => { navigate("/deleteOrder"); }}
      >
        <ListItemIcon>
          <DeleteIcon />
        </ListItemIcon>
        <ListItemText primary="Удалить заявку" />
      </ListItemButton>

    </List>
  );
}
