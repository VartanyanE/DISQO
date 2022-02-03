import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { Line, CatergoryScale } from 'react-chartjs-2';
import "../styles/gists.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  } from 'chart.js';
  
  ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
  );

function Gists() {

  
    const [data, setData] = useState([{}])

     useEffect(() => {
      fetch('https://api.github.com/gists', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "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"
        },
      })
      .then(response => response.json())
      .then(data => setData(data))
      
      
; 
  }, []);
  
console.log(data);

const chartData={
  labels: ['red','green'],
  datasets: [ {
    data: [12,19]
  }]
}

const options={
      title: {
      display: true,
      text: 'World population per region (in millions)'
    
  }
}



  return (
  <div className="container">
    <div className="mainTitle">Notepad Application </div>
    <div className="card-gists">

    <div className="stats-button">
    <Link to="/">
            
            <button className="close-stats-btn">Close Stats</button></Link>

  </div>
   <div className="gist-chart">
    <Line 
    data={chartData}
    options={options} />
  </div>


  <div className="gist-chart-files">
    <Line 
    data={chartData}
    options={options} />
  </div>
  </div>

 
  
  
  
  </div>
  
    )
}

export default Gists;
