import { useNavigate } from "react-router";
import getRiddles from "../utils/getriddles";

export default function RiddlesPage(){
    const riddles = getRiddles()
    const navigate = useNavigate()
    return <>
    <h1>show riddles</h1>
    <p>{riddles[0].taskDescription}</p>
    <p>{riddles[0].name}</p>
    <input type="text" placeholder="answer"/>
    <button onClick={()=> {
        navigate('/finish')
    }}>submit</button>
    </>
}