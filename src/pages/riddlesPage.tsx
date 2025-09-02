import { useNavigate } from "react-router";

export default function RiddlesPage(){
    const navigate = useNavigate()
    return <>
    <h1>show riddles</h1>
    <p>3 + 5</p>
    <input type="text" placeholder="answer"/>
    <button onClick={()=> {
        navigate('/finish')
    }}>submit</button>
    </>
}