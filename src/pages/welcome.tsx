import { Link, useNavigate } from "react-router";

export default function Welcome(){
    const navigate = useNavigate()
    return <>
    <h1>welcome</h1>
    <button onClick={()=> {
        navigate('/login')
    }}>user Exist</button>
     <button onClick={()=> {
        navigate('/login')
    }}>new user</button>
     <button onClick={()=> {
        navigate('gamePage')
    }}>guest</button>
    </>
}