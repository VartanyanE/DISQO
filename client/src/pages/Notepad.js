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
            
            Notepad Title <br/>
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
          
          <div className="notes-heading"> 
          {  fetchedData.map((item) => (
               item.notepadTitle 
      ))}
           <br/>
          <input className="note-title-input"
              placeholder="Enter note title..."
            ></input>
            <br/>
            <input className="note-input"
              placeholder="Enter note..."
            ></input>
          </div>
          
          <div className="add">
            <button className="add-btn">Add</button>
          </div>
         
        </div>
      </div>
    );
    
}

export default Notepad;
