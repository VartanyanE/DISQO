import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";

import "../styles/notepad.css";

const Notepad = () => {
  
    const [notepadTitle, setNotepadTitle] = useState();
    const [persistnotePadTitle, setPersistnotePadTitle] = useState("")
    const [noteTitle, setNoteTitle] = useState("");
    const [persistNoteTitle, setPersistNoteTitle] = useState([])
    const [note, setNote] = useState("");
    const [persistNote, setPersistNote] = useState([]);
    const [localNotepadTitle, setLocalNotepadTitle] = useState("");


//   useEffect(() => {
//        const theme = localStorage.getItem('notepadTitle') === "true";
//     const parsedData = JSON.parse(theme);
//           console.log(parsedData)
//   }, []);
    
  
    
    
    // console.log(persistNoteTitle);
    console.log(localNotepadTitle);
   



    const submitNotepadTitle = async (event) => {
        event.preventDefault();
        await setPersistnotePadTitle(notepadTitle)
        await  localStorage.setItem("notepadTitle", notepadTitle);
        
        await setNotepadTitle("");


      }
 
      const submitNote = async (event) => {
          event.preventDefault();
         
          await setPersistNoteTitle([...persistNoteTitle, noteTitle]);
          await setPersistNote([...persistNote,  note]);
          await localStorage.setItem("noteTitle", noteTitle);
          await localStorage.setItem("note", note);

          await setNoteTitle("");
          await setNote("");

      }
    
    const deleteArray = async () => {
      
        await setPersistNote("");
         setPersistNoteTitle("");
    }


  
 useEffect(()=>{
const setTitle = ()=> {
  setLocalNotepadTitle(localStorage.getItem("notepadTitle"));
  setTitle();
}},[]);

console.log(localNotepadTitle)



  // useEffect(()=>{
  //     localStorage.setItem('notepadTitle', persistnotePadTitle)
  // },[persistnotePadTitle]);

 



    return (
      <div className="container">
        <div className="mainTitle">Notepad Application </div>
        <div className="card">
          <div className="notepad-title">
            <p>Notepad Title </p>
            <br />

            <input
              className="input-title"
              maxLength={255}
              placeholder="My notepad title..."
              value={notepadTitle}
              onChange={(e) => setNotepadTitle(e.target.value)}
            />
          </div>
          <div className="title-btns">
            <Link to="/gists">
            
            <button className="stats-btn">View Stats</button></Link>
            
            
            <button className="save-btn" onClick={submitNotepadTitle}>
              Save
            </button>
            <button className="del-btn" onClick={() => setPersistnotePadTitle("")}>Delete</button>
          </div>
          <div className="note-title">
            {persistnotePadTitle ? persistnotePadTitle : <h3>My Notes</h3>}
            <br />
            <input
              className="input-title"
              placeholder="Enter Note Title..."
              value={noteTitle}
              onChange={(e) => setNoteTitle(e.target.value)}
            />
          </div>
          <div className="note">
            <input
              className="input-note"
              placeholder="Enter Note..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
          <div className="add-btn">
            <button className="add-button" onClick={submitNote}>
              Add
            </button>
          </div>

          <div className="first-note-title">
            {persistNoteTitle  ? (
              <input className="input-title" value={persistNoteTitle} />
            ) : (
              ""
            )}
          </div>
          <div className="delete-btn">
            {persistNoteTitle ? (
              <button className="del-btn" onClick={deleteArray}>Delete</button>
            ) : (
              ""
            )}
          </div>
          <div className="first-note">
            {persistNoteTitle ? (
              <input className="input-note" value={persistNote} />
            ) : (
              ""
            )}
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
