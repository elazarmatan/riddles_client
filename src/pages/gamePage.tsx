import { useState } from "react";
import { useNavigate } from "react-router";

export default function GamePage(){
    const navigate = useNavigate()
    const [level,setLevel] = useState('easy')
    return <>
    <h1>game</h1>
    <select value={level} onChange={(e) => setLevel(e.target.value)}>
        <option value="easy">easy</option>
        <option value="medium">medium</option>
        <option value="hard">hard</option>
    </select>
    <button onClick={() => {
        navigate('/riddles',{state:{level}})
    }}>submit</button>
    </>
}