import React, { useState } from 'react'
let h1=document.querySelector('h1')

const App = () => {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [allUsers, setAllusers] = useState([])
  const submitHandler=(e)=>{
    e.preventDefault()
    const oldAllUsers =[...allUsers]
    oldAllUsers.push({name,email})
    // h1.innerHTML=newAllUsers
    console.log(oldAllUsers)
    setAllusers(oldAllUsers)
    setName('')
    setEmail('')
  }

 
  return (
    <div>
    <form onSubmit={(e)=>{
      submitHandler(e)
    }}>
    <input type='text' placeholder='Enter your name' required value={name}  onChange={(e)=>{
      setName(e.target.value)
    }} />
    <input type='text' placeholder='Enter your email' required value={email}  onChange={(e)=>{
      setEmail(e.target.value)
    }} />
    <button>Submit</button>
    </form> 
    {allUsers.map((e,idx)=>{
      return <div key={idx}>
        <h1>{e.name}</h1>
        <h1>{e.email}</h1>
      </div>
    })}
    </div>
  )
}

export default App
