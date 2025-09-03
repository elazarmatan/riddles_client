import { Link } from "react-router";

export default function CreateRiddle(){
    return <>
    <h1>create</h1>
    <input type="text" placeholder="name"/>
    <input type="text" placeholder="difficulty"/>
    <input type="text" placeholder=""/>
    <input type="text" placeholder=""/>
    <input type="text" placeholder=""/>
    <input type="text" placeholder=""/>
    
    <Link to={'/crud'}>crud</Link>
    </>
}