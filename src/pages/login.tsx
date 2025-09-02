import {  useNavigate } from "react-router";

export default function Login(){
    const navigate = useNavigate()
    return <>
    <h1>login</h1>
    <form action="">
    <input type="text" placeholder="user name" required/>
    <input type="password" placeholder="password" required/>
    <button  onClick={(e) => {
        e.preventDefault()
        navigate('/mainPage')
    }}>submit</button>
    </form>
    </>
}