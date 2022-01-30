import React, { useEffect, useState } from "react";
import { getData } from "../utils/Api";
import "../styles/notepad.css";

const Notepad = () => {
  const [fetchedData, setFetchedData] = useState([{}]);

  useEffect(() => {
    getData().then(({ data }) => {
      setFetchedData(data);
    });
  }, []);
    
    
  console.log(fetchedData);
    return (
      <div className="container">
        <div className="mainTitle">Notepad Application </div>
        <div className="card">
          <div className="notepad-title-input">
            <input
              
              placeholder="My notepad title..."
            ></input>
          </div>
          <div className="view-stats">
            <button className="view-stats-btn">View Stats</button>
          </div>
          <div className="save">
            <button className="save-btn">Save</button>
          </div>
          <div className="delete">
            <button className="delete-btn">Delete</button>
          </div>
        </div>
      </div>
    );
    
}

export default Notepad;
