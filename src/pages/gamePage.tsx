import { useNavigate } from "react-router";

export default function GamePage(){
    const navigate = useNavigate()
    return <>
    <h1>game</h1>
    <select name="level" id="">
        <option value="">easy</option>
        <option value="">medium</option>
        <option value="">hard</option>
    </select>
    <button onClick={() => {
        navigate('/riddles')
    }}>submit</button>
    </>
}