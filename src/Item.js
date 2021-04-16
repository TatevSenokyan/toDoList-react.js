import React,{useState,useEffect,useContext} from "react";
import './App.css'
import DialogItem from './Dialog'







function Item (props) {

    const [editOpen,setEditOpen]=useState(false)
    let active=props.item.active
    

  const handleItemDelete=()=>{
      let id=props.item.id
     let  {onDelete}=props
     onDelete(id)
  }
  
  const checkActive=()=>{
    let id=props.item.id
    const {onActive}=props
    onActive(id) 
}

const handleItemEdit=()=>{
    setEditOpen(!editOpen)
}


const closeDialog=()=>{
    setEditOpen(false)
}
const handleSave=(newValue,id)=>{
    props.onSave(newValue,id)
    setEditOpen(false)
}
  return (
    
      
        <div>
       <span  className={active ? 'item': null} onClick={checkActive}>{props.item.value}</span>
       <button onClick={handleItemEdit}>Edit</button>
       <button onClick={handleItemDelete}>delete</button>
       { editOpen && <DialogItem  onSave={handleSave} onClose={closeDialog} />}
      </div>
    
   
  )
}




export default Item