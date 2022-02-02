import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import "../styles/gists.css";

function Gists() {

  
    const [data, setData] = useState([{}])

     useEffect(() => {
      fetch('https://api.github.com/gists')
      .then(response => response.json())
      .then(data => setData(data))
      
      
; 
  }, []);
  
console.log(data[0].id);

  return (
  <div className="container">
    <div className="mainTitle">Notepad Application </div>
  <div className="card-gists">

    <div className="stats-button">
  <Link to="/">
            
            <button className="close-stats-btn">Close Stats</button></Link>

  </div></div>
  
  
  
  </div>
  
    )
}

export default Gists;
