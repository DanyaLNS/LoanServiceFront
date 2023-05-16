import React from "react";
import Appbar from "../helpers/Appbar";
import { Paper } from "@material-ui/core";

export default function CheckStatusPage(){
    const paperStyle={padding:'20px 20px', width:600,margin:"20px auto"}

    return (
      <div className="Tariffs">
        <Appbar/>
        <Paper elevation={3} style={paperStyle}>
            <h1>Введите ID заказа для просмотра его статуса</h1>
        </Paper>
      </div>
    )
}