import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { removeTodo,changeRole} from '../features/todo/todoSlice'
function Todos() {
    const todos=useSelector(state=>state.todos)
    const dispatch=useDispatch()
    return (
      <>
      <div>
        Todos
       {todos.map((todo) => (
          <li className="justify-start mt-4 flex bg-zinc-800 px-4 py-2 rounded gap-2"
           key={todo.id}>
           <div className=" flex-1 text-white w-70">{todo.text}</div> 
            <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            //arrow function used beacause we only give reference 
            onClick={()=>dispatch(removeTodo(todo.id))}>
                ❌
            </button>
            <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            onClick={()=>dispatch(changeRole({role:"edit",editTodo:todo.text,id:todo.id}))}>
            ✏️
            </button>
            </li>
        ))}
        </div>
        </>  
    )
}

export default Todos
