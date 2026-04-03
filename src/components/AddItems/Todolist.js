import React from 'react'

const Todolist = () => {
    const [taskItem, setTaskItem] = React.useState({
        title:"",
        description:""
    });
    const [taskList, setTaskList] = React.useState([]);

    const handleChange = (e) => {
        setTaskItem({...taskItem, [e.target.name]: e.target.value})

    }

    const handleAddItem = () => {
        if(taskItem.title.trim()!=="" && taskItem.description.trim()!==""){
            setTaskList([...taskList, taskItem]);
            setTaskItem({title:"", description:""});
            
        }
    }
    console.log(taskList);
  return (
    <div>
    <div style={{border:"1px solid black",width:"80rem", padding:"20px", marginTop:"20px", marginRight:"auto", marginLeft:"auto",backgroundColor:"#f0f0f0"}}>
         <h1>Todo List</h1>
            <input type="text" placeholder="Title" value={taskItem.title} onChange={(e) => handleChange(e)} name="title"/><br/><br/>
            <input type="text" placeholder='Enter todo item' value={taskItem.description} onChange={handleChange} name="description" /><br/><br/>
            <button style={{padding:"10px", backgroundColor:"blue", color:"white", border:"none", borderRadius:"5px"}} onClick={handleAddItem}>Add Item</button>
         <div>
                      
            <h1>Task List</h1>
            {taskList.length===0?<p>No tasks available</p>:
            <ul style={{listStyle:"none", padding:0,backgroundColor:"#f9f6f6e9"}}>
                {taskList.map((item,index)=>{
                    return(
                    <li key={index} style={{border:"1px solid black", margin:"5px 0", padding:"10px"}}>
                      {item.title} - {item.description} 
                      <button style={{marginLeft:"10px", backgroundColor:"red", color:"white", border:"none", borderRadius:"5px"}} onClick={()=>{
                        const newArr=taskList.filter((_,i)=>i!==index);
                        setTaskList(newArr);
                      }}>Delete</button>    
                    </li>
                )
                })}
            </ul>}
        </div>  
        </div>
    </div>
  )
}

export default Todolist
