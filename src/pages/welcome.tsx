import { useNavigate } from "react-router";

export default function Welcome(props:{setLogin:Function}){
    const navigate = useNavigate()
    return <>
    <h1>welcome</h1>
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
}