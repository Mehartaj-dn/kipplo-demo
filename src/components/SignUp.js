import { useState } from "react";

const SignUp =()=>{
    const[username, setUsername] = useState()
    const[email, setEmail] = useState()
    const[password, setPassword] = useState()

    const handleSignUp =(e)=>{
        e.preventDefault();
    }
    return <>
    <div className="bg-purple-500 py-8">
        <form>
            <label className="">username:</label><br/>
            <input type="text"
            className="text-black p-3 rounded-xl border-2 border-grey font-bold "
             placeholder="username"
             onClick={(e)=>setUsername(e.target.value)}
            value={username}/><br />
            <label>email:</label><br />
            <input type="email" placeholder="email"
            className="text-black p-3 rounded-xl border-2 border-grey font-bold "
            onClick={(e)=>setEmail(e.target.value)}
            value={email}/><br />
            <label>password</label><br/>
            <input type="password" placeholder="password"
            className="text-black p-3 rounded-xl border-2 border-grey font-bold "
            onClick={(e)=>setPassword(e.target.value)}
            value={password}/>
        </form>
    </div>
    </>
}
export default SignUp;