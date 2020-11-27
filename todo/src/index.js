import React,{useImperativeHandle, useState} from 'react';
import ReactDOM from 'react-dom';

const App = ()=>{
const [todos,setTodos]= useState(["Run","Browse"]);
const [values,setValues]= useState('');
const addTodo = ()=>{
  const newTodos = todos.concat([values]);
  setTodos(newTodos);
  setValues("");
}
const handleChange = (event)=>{
  console.log(event);
  setValues(event.target.value);
}

return (
  <div>
    <input value={values} onChange={handleChange}/>
    <br />
    {todos.map((data,index)=>{
      return <input type='checkbox' id={index} value={data}>{data}</input>
    })}
  </div>
)

}
ReactDOM.render(
  
    <App />,
  document.getElementById('root')
);


