import React, { useEffect, useState } from "react";

import "../styles/notepad.css";

const Notepad = () => {
    const [fetchedData, setFetchedData] = useState([{}]);
    const [data, setData] = useState({});

  useEffect(() => {
   
  }, [data]);
    
    
    console.log(fetchedData);
    console.log(data);



    const handleSubmit = async (event) => {
        event.preventDefault();
        localStorage.setItem("noteTitle", data.notepadTitle);
        console.log(localStorage.getItem("noteTitle"));


    }
    return (
      <div className="container">
        <div className="mainTitle">Notepad Application </div>
        <div className="card">
          <div className="notepad-title">
            Notepad Title <br />
            <input className="input-title" placeholder="My notepad title..." />
          </div>
          <div className="title-btns">
            <button>View Stats</button>
            <button>Save</button>
            <button>Delete</button>
          </div>
          <div className="note-title">
            My Notes <br />
            <input className="input-title" placeholder="Enter Note Title..." />
          </div>
          <div className="note">
            <input className="input-note" placeholder="Enter Note..." />
          </div>
          <div className="add-btn">
            <button>Add</button>
          </div>
          <div className="first-note-title">
            <input className="input-title" />
          </div>
          <div className="delete-btn">
            <button>Delete</button>
          </div>
          <div className="first-note">
            <input className="input-note"  />
          </div>
          {/* <div className="notepad-title-input">
            Notepad Title <br />
                    <input placeholder="My notepad title..."
                        onChange={(e) =>
                setData({ notepadTitle: e.target.value })
              }></input>
          </div>

          <div className="view-stats">
            <button className="view-stats-btn">View Stats</button>
          </div>

          <div className="save">
                    <button
                        
                        type="submit"
                        onClick={handleSubmit}
              className="save-btn"
             
            >
              Save
            </button>
          </div>

          <div className="delete">
            <button className="delete-btn">Delete</button>
          </div>

          <div className="notes-heading">
            {localStorage.getItem("noteTitle")}
            <br />
            <input
              className="note-title-input"
              placeholder="Enter note title..."
            ></input>
            <br />
            <input className="note-input" placeholder="Enter note..."></input>
          </div>

          <div className="add">
            <button className="add-btn">Add</button>
          </div> */}
        </div>
      </div>
    );
    
}

export default Notepad;
