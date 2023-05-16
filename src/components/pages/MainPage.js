import React from 'react'; 
import { Paper } from "@material-ui/core";
import Appbar from '../helpers/Appbar';
import ServicesList from '../helpers/ServicesList';



export default function MainPage() {
  const paperStyle={padding:'20px 20px', width:600,margin:"20px auto"}

    return (
      <div className="Tariffs">
          <Appbar/>
          <Paper elevation={3} style={paperStyle}>
          <h1>Доступные сервисы</h1>
          <ServicesList/>
        </Paper>
      </div>
    )
}