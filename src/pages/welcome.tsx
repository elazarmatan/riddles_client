import { useNavigate } from "react-router";
import getToken from "../utils/getToken";
import { useEffect, useState } from "react";
import checkToken from "../utils/checkToken";

export default function Welcome(props:{setLogin:Function}){
    const [realToken,setToken] = useState(false)
    const navigate = useNavigate()
    const token = getToken()
    if(token){
        checkToken(token,setToken)
    }
    return <>
    <h1>welcome</h1>
    {
        useEffect(() => {
            if(realToken){
                navigate('/mainPage')
            }
        })
    }
    
    <>
    <button onClick={()=> {
        props.setLogin('exist')
        navigate('/login')
    }}>user Exist</button>
     <button onClick={()=> {
         props.setLogin('new')
        navigate('/login')
    }}>new user</button>
     <button onClick={()=> {
        navigate('gamePage')
    }}>guest</button>
    </>
    </>
}