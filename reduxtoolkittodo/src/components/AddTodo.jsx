import React,{useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addTodo,updateTodo} from '../features/todo/todoSlice'


function AddTodo() {
const [input,setinput]=useState('')
const dispatch=useDispatch()
const role=useSelector(state=>state.role)
const addTodoHandler=(e)=>{
     e.preventDefault()
     // dispatch uses a reducer to change the values in store
     dispatch(addTodo(input))
     //clear the form after adding a todo
     setinput('')
}
const todo=useSelector(state=>state.editTodo)
const id=useSelector(state=>state.id)
useEffect(() => {
  if(role==="edit"){
    setinput(todo)
  }
}, [role])
    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
        {role==="edit"?
        <button onClick={(e)=>{e.preventDefault();
          dispatch(updateTodo({text:input,id:id}))
          setinput("");
      }}>edit todo</button>
        :
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Add Todo
        </button>
}
      </form>
    )
}

export default AddTodo
