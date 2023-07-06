import React , {useState }from "react";
import './style.css';
import { Link } from "react-router-dom";

const Login = ()=>{
    const [isSubmitted, setIsSubmitted] = useState(false)
    console.log({isSubmitted})

    const [username,setUsername] = useState('');
    console.log({username});

    const [password,setPassword] = useState('');
    console.log({password});

    const [message, setMessage] = useState('');
    console.log({message})

    const handleSubmit = async(e)=>{
        setMessage("Logged in successfully!")

        e.preventDefault();
        setIsSubmitted(true);
        const data = {
            username:username,
            password:password
        }
        console.log({data})


        try{
            const response = await fetch('https://dummyjson.com/auth/login',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(data)

            })
            const result = await response.json();
            console.log({result})

            
        }
        catch(error){
            console.log(error.message);
        }
    };

    return(
        <div>
        <form className="form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input placeholder="enter username" type="text" 
        onChange={(e)=>{setUsername(e.target.value)}}
        />
        <br/>
        <br/>
        <input placeholder="enter password" type="password"
        onChange={(e)=>{setPassword(e.target.value)}}
        />
        <br/>
        <br/>
        <Link to={`/home`}><button className="submit">Login</button></Link>
        </form>
        {isSubmitted && <h1>{message}</h1>}
        </div>
    )
}

export default Login