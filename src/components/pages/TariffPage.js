import React, { useState, useEffect } from 'react';
import { Paper } from '@material-ui/core';
import Appbar from '../helpers/Appbar';


export default function TariffPage() {
  const paperStyle={padding:'20px 20px', width:600,margin:"20px auto"}
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    fetch(`http://localhost:8080/loan-service/getTariffs`)
      .then(response => response.json())
      .then((usefulData) => {
        console.log(usefulData);
        setLoading(false);
        setData(usefulData);
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`)
      });
  }, []);
 
  if (loading) {
  return (
      <div className="Tariffs">
        <Appbar/>
        {<p>Загрузка...</p>}
      </div>
  )} else {
    return (
        <div className="Tariffs">
            <Appbar/>
            <Paper elevation={3} style={paperStyle}>
            <h1>Доступные тарифы</h1>
                {data.data.tariffs.map(tariff=>(
                    <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={tariff.id}>
                    Тип: {tariff.type}<br/>
                    Кредитная ставка: {tariff.interest_rate}
                    </Paper>
                ))}
            </Paper>
        </div>
    )
  }
}