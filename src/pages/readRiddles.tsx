import { Link } from "react-router";
import getAllRiddles from "../utils/crud/getAllRiddles";
import { useEffect, useState } from "react";

export default function ReadRiddles(){
    const [riddles,setRiddles] = useState<Array<{ name: string; taskDescription:string; hint:string; difficulty:string; riddle_id:number}>>([]);
    useEffect(() => {
    getAllRiddles(setRiddles)
    },[])
    return <>
    <h1>read</h1>
    <Link to={'/crud'}>crud</Link>
    {riddles.map(riddle => (
        <ul key={riddle.riddle_id}>
            <li>{riddle.riddle_id}</li>
            <li>{riddle.name}</li>
            <li>{riddle.difficulty}</li>
            <li>{riddle.taskDescription}</li>
            <li>{riddle.hint}</li>
            <li></li>
        </ul>
    ))}
    </>
}