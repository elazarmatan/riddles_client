import { Link } from "react-router";

export default function Welcome(){
    return <>
    <h1>welcome</h1>
    <Link to={'/login'}>user Exist</Link>
    <Link to={'/login'}>new user</Link>
    <Link to={'/gamePage'}>guest</Link>
    </>
}