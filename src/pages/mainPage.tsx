import {  useNavigate } from "react-router";

export default function MainPage(){
    const navigate = useNavigate()
    return <>
    <h1>main page</h1>
    <button onClick={() => {
        navigate('/gamePage')
    }}>game</button>
     <button onClick={() => {
        navigate('/crud')
    }}>crud</button>
     <button onClick={() => {
        navigate('/leaderboard')
    }}>leader board</button>
    </>
}