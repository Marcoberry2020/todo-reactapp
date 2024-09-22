import React, { useState } from 'react';

function ToDoList() {
    const [tasks, setTasks]= useState([]);
    const [newTask, setNewTask] = useState("");
    
    function handleInputChange(event){
        setNewTask(event.target.value);

    }
    function addTask(){ 
       if(newTask.trim() !== ""){
        setTasks(t => [...t, newTask]);
        setNewTask("");  
       }
    }
    function deleteTask(index){
        const UpdatedTask = tasks.filter((_, i) => i !== index)
        setTasks(UpdatedTask);
    }
    function moveTaskUp(index){
        if(index >0){
            const UpdatedTasks = [...tasks];
            [UpdatedTasks[index], UpdatedTasks[index - 1]]=
            [UpdatedTasks[index -1], UpdatedTasks[index]];
            setTasks(UpdatedTasks);
        }
    }
    function moveTaskDown(index){

        if(index < tasks.length - 1){
            const UpdatedTasks = [...tasks];
            [UpdatedTasks[index], UpdatedTasks[index + 1]]=
            [UpdatedTasks[index + 1], UpdatedTasks[index]];
            setTasks(UpdatedTasks);
        }
    }  

    return (
    <div className="to-do-list">
        <h1>to-do-list</h1>
         <div>
            <input
             type="text"
             placeholder="enter a task..."
             value={newTask}
             onChange={handleInputChange}
             />
             <button
                className ="add-button"
                onClick={addTask}>
                    add
             </button>
         </div>
         <ol>
            {tasks.map((task,index)  =>
            <li key ={index}>
                <span className='text'>{task}</span>

                <button
                className ="delete-button"
                onClick={() => deleteTask(index)}>
                    delete
             </button>
             <button
                className ="move-button"
                onClick={() => moveTaskUp(index)}>
                    up
             </button>
             <button
                className ="move-button"
                onClick={() => moveTaskDown(index)}>
                    down
             </button>
            </li>
            
            )}
         </ol>
         
        </div>);
}
 export default ToDoList