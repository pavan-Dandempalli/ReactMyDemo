import React from 'react'
import Counter from './Counter';



export const Dashboard = () => {
  const[valid, setValid] = React.useState(false);
  const [data, setData] = React.useState({  
    name:'',
    email:'',
    password:""
  });

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(data);
      setValid(true);
      setData({
        name:'',
        email:'',
        password:""
      })
  
       
  }
   
  return (
    <div>
      <Counter />
      <div style={{border:"1px solid black", width:"300px", padding:"20px", marginTop:"20px", marginRight:"auto", marginLeft:"auto"}}>

      
       <h1>Form Data</h1>
       <label>Name:</label>
       <input type="text" name="name" value={data.name} onChange={(e)=>handleChange(e)} /><br/><br/>
       <label>Email:</label>
       <input type="email" name="email" value={data.email} onChange={(e) => handleChange(e)} /><br/><br/>
       <label>Password:</label>
       <input type="password" name="password" value={data.password} onChange={(e) => handleChange(e)} /><br/><br/>
       <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </div>
        {valid && <>
              <div style={{border:"1px solid black", width:"300px", padding:"20px", marginTop:"20px", marginRight:"auto", marginLeft:"auto"}}>

         <h1>Data Display</h1> 
        <p>Name: {data.name}</p>
        <p>Email: {data.email}</p>
        <p>Password: {data.password}</p>
        </div>
        </>
       }
      
    </div>


  )
}
