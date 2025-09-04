import { Link, useLocation } from "react-router";

export default function FinishGame(){
    const location = useLocation()
    return <>
    <h1>record</h1>
    <p>your own record {location.state?.seconds} seconds</p>
    <Link to={'/mainPage'}>mainPage</Link>
    </>
}