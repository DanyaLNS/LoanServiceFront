import React from "react";
import Appbar from "../helpers/Appbar";
import { Paper } from "@material-ui/core";

export default function DeleteOrderPage() {
    const paperStyle={padding:'20px 20px', width:600,margin:"20px auto"}

    return (
      <div className="Tariffs">
        <Appbar/>
        <Paper elevation={3} style={paperStyle}>
            <h1></h1>
        </Paper>
      </div>
    )
}