import React, { useEffect, useState } from "react";

import "../styles/notepad.css";

const Notepad = () => {
    const [fetchedData, setFetchedData] = useState([{}]);
    const [notepadTitle, setNotepadTitle] = useState("");
    const [noteTitle, setNoteTitle] = useState("");
    const [note, setNote] = useState("");



  useEffect(() => {
   
  }, []);
    
    
    console.log(fetchedData);
   



    const submitNotepadTitle = async (event) => {
        event.preventDefault();
        localStorage.setItem("notepadTitle", notepadTitle);
        
        await setNotepadTitle("");


      }

      const submitNote = async (event) => {
        event.preventDefault();
        localStorage.setItem("noteTitle", noteTitle);
         localStorage.setItem("note", note);

         await setNoteTitle("");
         await setNote("");

      }


    return (
      <div className="container">
        <div className="mainTitle">Notepad Application </div>
        <div className="card">
          <div className="notepad-title">
            <p>Notepad Title </p>
            <br />
            
            <input className="input-title" placeholder="My notepad title..." 
            value={notepadTitle}
            onChange={(e) =>
              setNotepadTitle(e.target.value )
            } />
          </div>
          <div className="title-btns">
            <button className="stats-btn">View Stats</button>
            <button className="save-btn"
           onClick={submitNotepadTitle}
            
            >Save</button>
            <button className="del-btn">Delete</button>
          </div>
          <div className="note-title">
           <h3>My Notes</h3>  <br />
            <input className="input-title" placeholder="Enter Note Title..."
            value={noteTitle}
            onChange={(e) =>
              setNoteTitle(e.target.value )
            } />
          </div>
          <div className="note">
            <input className="input-note" placeholder="Enter Note..."
            value={note}
            onChange={(e) =>
              setNote(e.target.value)
            } />
          </div>
          <div className="add-btn">
            <button className="add-btn"
            onClick={submitNote}
            >Add</button>
          </div>
          <div className="first-note-title">
            <input className="input-title" />
          </div>
          <div className="delete-btn">
            <button className="del-btn">Delete</button>
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
