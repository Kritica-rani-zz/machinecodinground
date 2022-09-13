import React, { useState } from "react";

function Todolist() {
  const [input, setInput] = useState('');
  const [addList, setAddList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const handleAdd=(text)=>{
  const item =({isEditable:false,id:Math.random(),body:text})
  setAddList([item,...addList])
  }

  return (
  <div>
    <div className="input-container">
    <input type="text" placeholder="wishlist" value={input} onChange={(e)=>setInput(e.target.value)}/>
    <button onClick={()=>handleAdd(input)} >Add</button>
    </div>
    {addList && addList.map((item)=>{
      return(
        <li>{item.body}</li>
      )
    })}
  </div>
)}

export default Todolist;
