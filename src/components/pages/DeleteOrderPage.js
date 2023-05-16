import React, { useState } from "react";
import Appbar from "../helpers/Appbar";
import { Paper } from "@material-ui/core";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';


export default function DeleteOrderPage(){
    const paperStyle={padding:'20px 20px', width:600,margin:"20px auto"}

    return (
      <div className="Tariffs">
        <Appbar/>
        <Paper elevation={3} style={paperStyle}>
            <h1>Введите данные для удаления заявки</h1>
            <CreateOrderForm/>
        </Paper>
      </div>
    )
}


 function CreateOrderForm() {
    const [userId, setUserId] = useState('')
    const [orderId, setOrderId] = useState('')
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);
 
    const postOrder = (e) => {
    
    e.preventDefault()
    const order = {userId: userId, orderId: orderId}
    console.log(order)
    console.log(JSON.stringify(order))
    fetch(
        'http://localhost:8080/loan-service/deleteOrder',
        {
            method:'DELETE',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(order)
        }
    )
    .then(response => response.json())
    .then((usefulData) => {
      if (usefulData.error.message != null) {
        setLoading(true);
        setError(false);
        setData(usefulData);
        console.log(error)
        console.log(loading)
      } else {
        setLoading(false);
        setError(true);
        console.log(error)
        console.log(loading)
      }

    })
    .then(()=>{
        console.log("Order posted")
    }).catch((e) => {
        setLoading(false)
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

        {!loading && <SuccessAlert/>}

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
        label="ID заказа" 
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
                onClick={postOrder}
            >Удалить заявку</Button>
    </Box>
  );
}


const SuccessAlert = ({text}) => {
    return (
      <div>
        <Alert severity="success">Заявка была успешно удалена! 
        </Alert>
      </div>
    );
  }

const FailAlert = ({text}) => {
    return (
      <div>
        <Alert severity="error">Заявка не была удалена
        <br/>
        {text}
        </Alert>
      </div>
    );
  }
  