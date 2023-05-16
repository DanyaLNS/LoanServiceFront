import React, { useState } from "react";
import Appbar from "../helpers/Appbar";
import { Paper } from "@material-ui/core";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';

export default function CheckStatusPage(){
    const paperStyle={padding:'20px 20px', width:600,margin:"20px auto"}
    const [orderId, setOrderId] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);

    const getStatus = (e) => {
        e.preventDefault()
        fetch(
            `http://localhost:8080/loan-service/getStatusOrder?orderId=${orderId}`,
            {
                method:'GET',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        )
        .then(response => response.json())
        .then((usefulData) => {
          if (usefulData.data != null) {
            setLoading(false);
            setError(true);
            setData(usefulData);
          } else {
            setLoading(true);
            setError(false);
            setData(usefulData);
          }
        })
        .then(()=>{
            console.log("Order posted")
        }).catch((e) => {
            console.log(e)
        })
    }

    return (
      <div className="Tariffs">
        <Appbar/>
        <Paper elevation={3} style={paperStyle}>

        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1 },
            }}
            noValidate
            autoComplete="off"
            textAlign='center'
        >   
            <h1>Введите ID заявки для просмотра его статуса</h1>
            {!error && <FailAlert/>}

            {!loading && <SuccessAlert text={data.data.orderStatus}/>}  
            <TextField 
                id="outlined-basic" 
                label="ID заявки" 
                variant="outlined" 
                fullWidth
                value={orderId}
                color="error"
                onChange={(e) => setOrderId(e.target.value)}
            />
            <Button 
                variant='outlined'
                color='error'
                size='large'
                endIcon={<SendIcon/>}
                onClick={getStatus}
            >Узнать статус</Button>
        </Box>
        </Paper>
      </div>
    )
}

const SuccessAlert = ({text}) => {
    return (
      <div>
        <Alert severity="success">Ваш статус заявки: {text}</Alert>
      </div>
    );
  }

const FailAlert = () => {
    return (
      <div>
        <Alert severity="error">Вы ввели некорретный ID заказа
        </Alert>
      </div>
    );
  }