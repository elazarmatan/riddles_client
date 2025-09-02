import {  useNavigate } from "react-router";

export default function Crud(){
    const navigate = useNavigate()
    return <>
    <h1>crud</h1>
    <button onClick={() => {
        navigate('/create')
    }}>create</button>
    <button onClick={() => {
        navigate('/read')
    }}>read</button>
    <button onClick={() => {
        navigate('/update')
    }}>update</button>
    <button onClick={() => {
        navigate('/delete')
    }}>delete</button>
     <button onClick={() => {
        navigate('/mainPage')
    }}>home</button>
    </>
}