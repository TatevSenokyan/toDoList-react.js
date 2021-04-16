import React,{useState,useEffect} from "react";
import Item from './Item';
import {v4 as uuidv4} from "uuid";
import './App.css'

export const ContextValue=React.createContext()



function App () {

  let [items,setItems]=useState([])
  let [inputValue,setInputValue]=useState('')


 const handleInputChange=(e)=>{
  setInputValue(e.target.value)

 }

 const handleItemAdd=()=>{
    let id=uuidv4();
    setItems([...items,{value:inputValue, id:id, active:false}])
    setInputValue('')
   
 }

 const handleDelete=(id)=>{

    let newItems=items.filter((item)=>item.id!==id)
    setItems(newItems)

    

 }


 const handleItemActive=(id)=>{

 
    let newItems=items.map(item=> {
        if(item.id==id) {
         
          if(!item.active) {
            return {...item,active:true}
          
          
        }  else {
          return {...item,active:false}
        }
        
       } else {
        return {...item}
    }
   
    

  })

  setItems(newItems)

}

const handleItemSave=(newValue,id)=>{
  let newItems=items.map(item=> {
    if(item.id==id) {
      return {...item, value:newValue}
  
    
   } else {
    return {...item}
}



})

setItems(newItems)
}

  return (
    
     
        <div>
          <input value={inputValue} onChange={handleInputChange}/>
          <button onClick={handleItemAdd}>add</button>
        {items.map((item)=>
        <ContextValue.Provider value={item}>
         <Item key={item.id} onDelete={handleDelete} item={item} onSave={handleItemSave} onActive={handleItemActive}/>
         </ContextValue.Provider>
        )
        }
      </div>
    
   
  )
}




export default App
