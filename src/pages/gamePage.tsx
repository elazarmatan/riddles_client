import { Link } from "react-router";

export default function GamePage(){
    return <>
    <h1>game</h1>
    <Link to={'/riddles'}>riddles</Link>
    </>
}