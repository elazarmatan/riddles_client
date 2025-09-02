import { Link } from "react-router";

export default function FinishGame(){
    return <>
    <h1>record</h1>
    <p>your own record 8.32 seconds</p>
    <Link to={'/mainPage'}>mainPage</Link>
    </>
}