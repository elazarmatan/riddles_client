import { Link } from "react-router";

export default function Crud(){
    return <>
    <h1>crud</h1>
    <Link to={'/create'}>create</Link>
    <Link to={'/read'}>read</Link>
    <Link to={'/update'}>update</Link>
    <Link to={'/delete'}>delete</Link>
    </>
}