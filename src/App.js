import './App.css';
import { useState,useEffect } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';



function App() {
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [completedTodos, setCompletedTodos] = useState ([]);

  const handleAddToDo = () => {
    let newTodoItem = {
      title: newTitle,
      description: newDescription,
    }
    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newTodoItem);
    // console.log (updatedTodoArr);
     setTodos(updatedTodoArr);
    localStorage.setItem ('todolist', JSON.stringify (updatedTodoArr));
    // setNewDescription ('');
    // setNewTodoTitle ('');
  };
  
  const handleDeleteTodo = (index) => {
   let reduceTodo=[...allTodos];
   reduceTodo.splice(index);
   localStorage.setItem('todolist',JSON.stringify(reduceTodo));
   setTodos(reduceTodo)
  }
   
  const handleComplete = (index) =>{
    let date=new Date();
    let dd = date.getDate ();
    let mm = date.getMonth () + 1;
    let yyyy = date.getFullYear ();
    let h = date.getHours ();
    let m = date.getMinutes ();
    let s = date.getSeconds ();
    let completedOn = dd + '-' + mm + '-' + yyyy + ' at ' + h + ':' + m+ ':' + s;
    let filteredItem = {
      ...allTodos[index],
      completedOn: completedOn
    }

    let updatedCompletedArr = [...completedTodos]; 
    updatedCompletedArr.push(filteredItem);
    setCompletedTodos (updatedCompletedArr);
    handleDeleteTodo(index);
  }

  useEffect (() => {
    let savedTodos = JSON.parse (localStorage.getItem ('todolist'));
    // let savedCompletedToDos = JSON.parse (
      localStorage.getItem ('completedTodos')
      if (savedTodos) {
        setTodos (savedTodos);
      }
  }, []);

  
  return (
    <div>
      <center><h1>MY TODO LIST</h1></center>
      <div className='todo-wrapper'>
        <div className='todo-input'>
          <div className='todo-list-item'>
            <label>Tittle</label>
            <input type="text" value={newTitle} onChange={e => setNewTitle(e.target.value)} placeholder="what's the task tittle" />
          </div>
          <div className='todo-list-item'>
            <label>Description</label>
            <input type="text" value={newDescription} onChange={e => setNewDescription(e.target.value)} placeholder="what's the task description" />
          </div>
          <div className='todo-list-item'>
            <button type='button' onClick={handleAddToDo} className='primarybtn'>Add</button>
          </div>
        </div>

        <div className='btn-area'>
          <button className={`secondarybtn ${isCompleteScreen === false && 'active'}`}
            onClick={() => setIsCompleteScreen(false)}
          > Todo</button>
          <button className={`secondarybtn ${isCompleteScreen === true && 'active'}`}
            onClick={() => setIsCompleteScreen(true)}>
            Complete</button>
        </div>
        <div className='todo-list'>
          {isCompleteScreen===false && allTodos.map((item, index) => {
            return (
              <div className='todo-list-item1' key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div>
                  <AiOutlineDelete className="icon" onClick={() => handleDeleteTodo(index)} title='Delete?'/>
                  <BsCheckLg className=" check-icon"  onClick={() => handleComplete(index)} title='Complete?' />
                </div>

              </div>
            );

          })}

          {isCompleteScreen===true && completedTodos.map((item, index) => {
            return (
              <div className='todo-list-item1' key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p><small>Completed On:{item.completedOn}</small></p>
                </div>
                <div>
                  <AiOutlineDelete className="icon" onClick={() => handleDeleteTodo(index)} title='Delete?'/>
                </div>

              </div>
            );

          })}
        </div>
      </div>
    </div>
  );
}
export default App;
