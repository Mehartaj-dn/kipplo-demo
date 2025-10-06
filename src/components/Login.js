import { useState } from "react";

const Login=()=>{
    const[username, setUsername] = useState()
    const[password, setPassword] = useState()

    const handleLogin =(e)=>{
        e.preventDefault()
    }
    return<>
    <div className="bg-green-300 p-16 m-40 shadow-sm rounded-2xl">
        <form className=" space-y-4">
        <div className="space-y-4 items-center">
        <label className="font-bold ">Username:</label><br />
        <input type="text" 
        className="text-black p-3 rounded-xl border-2 font-bold "
        placeholder="enter Username"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        /><br />
        
        <label className="font-bold ">Password:</label><br />
        
        <input type="password"
        className="text-black p-3 rounded-xl border-2 border-grey font-bold "
        placeholder="enter password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        /><br />
        <button
         className="bg-indigo-400 p-2 px-14 rounded-xl border-2 border-black"
         onClick={()=>handleLogin}>Login</button>
         <h1> New User Sign up here</h1>
         <button className="bg-indigo-400 p-2 px-12 rounded-xl border-2 border-black">Sign Up</button>

        </div>
    </form>
    </div>
    
    </>
}
export default Login;