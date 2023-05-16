import React, { useState } from "react";
import Appbar from "../helpers/Appbar";
import { Paper } from "@material-ui/core";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';


export default function CreateOrderPage(){
    const paperStyle={padding:'20px 20px', width:600,margin:"20px auto"}
    const [userId, setUserId] = useState('')
    const [tariff, setTariff] = useState('')
    return (
      <div className="Tariffs">
        <Appbar/>
        <Paper elevation={3} style={paperStyle}>
            <h1>Введите данные для создания заявки</h1>
            <CreateOrderForm/>
        </Paper>
      </div>
    )
}


 function CreateOrderForm() {
    const [userId, setUserId] = useState('')
    const [tariffId, setTariffId] = useState('')
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);

    const postOrder = (e) => {
    
    e.preventDefault()
    const order = {userId, tariffId: tariffId}
    console.log(order)
    console.log(JSON.stringify(order))
    fetch(
        'http://localhost:8080/loan-service/order',
        {
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(order)
        }
    )
    .then(response => response.json())
    .then((usefulData) => {
      if (usefulData.data != null) {
        console.log(usefulData);
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
        console.log('ALARN')
        setError(false)
    })
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
      textAlign='center'
    >   
        {!error && <FailAlert text={data.error.message}/>}

        {!loading && <SuccessAlert text={data.data.orderId}/>}

      <TextField 
        id="outlined-basic" 
        label="ID пользователя" 
        variant="outlined" 
        fullWidth
        value={userId}
        color="error"
        onChange={(e) => setUserId(e.target.value)}
        />
      <TextField 
        id="outlined-basic" 
        label="Тариф" 
        variant="outlined" 
        fullWidth
        value={tariffId}
        color="error"
        onChange={(e) => setTariffId(e.target.value)}
        />
        <Button 
                variant='outlined'
                color='error'
                size='large'
                endIcon={<SendIcon/>}
                onClick={postOrder}
            >Подать заявку</Button>
    </Box>
  );
}


const SuccessAlert = ({text}) => {
    return (
      <div>
        <Alert severity="success">Заявка на кредит была успешно подана! 
        <br/> 
        ID: {text}</Alert>
      </div>
    );
  }

const FailAlert = ({text}) => {
    return (
      <div>
        <Alert severity="error">Заявка на кредит не принята
        <br/>
        {text}
        </Alert>
      </div>
    );
  }
  