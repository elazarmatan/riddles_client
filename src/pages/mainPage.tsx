import { Link } from "react-router";

export default function MainPage(){
    return <>
    <h1>main page</h1>
    <Link to={'/gamePage'}>game</Link>
    <Link to={'/crud'}>crud</Link>
    <Link to={'/leaderboard'}>leader board</Link>
    </>
}