import React from 'react'
import { useCallback } from 'react';

const TodoItems = ({status,id,title, handleDelete, toggleStatus}) => {
  return (
    <div style={{display: "flex", justifyContent: "space-evenly"}}>
        <div>{title}</div>
        <div>{status ? "True" : "False"}</div>
        <button onClick={()=>toggleStatus(id)}>Toggle</button>
        <button onClick={()=>handleDelete(id)}>Delete</button>
    </div>
  )
}

function areEqual(prevProps, nextProps){
    if(prevProps.id === nextProps.id && prevProps.status === nextProps.status)
    {
        return true;
    }
    return false;
}


// METHOD 1:

// export default React.memo(TodoItems, areEqual)

// METHOD 2: USING useCallback
export default React.memo(TodoItems)