import React, { useState } from "react";

function Todolist() {
  const [input, setInput] = useState('');
  const [addList, setAddList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const handleAdd=(text)=>{
  const item =({isEditable:false,id:Math.random(),body:text})
  setAddList([item,...addList])
  }
  const handleDelete=(id)=>{
  const filteredData=  addList.filter((item)=>item.id !== id)
  setAddList(filteredData);
  }
  return (
  <div>
    <div className="input-container">
    <input type="text" placeholder="wishlist" value={input} onChange={(e)=>setInput(e.target.value)}/>
    <button onClick={()=>handleAdd(input)} >Add</button>
    </div>
    {addList && addList.map((item)=>{
      return(
        <div>
        <li>{item.body}</li>
        <button onClick={()=>handleDelete(item.id)}>Delete</button>
        </div>
        
      )
    })}
  </div>
)}

export default Todolist;
