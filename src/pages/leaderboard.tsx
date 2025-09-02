import { Link } from "react-router";
import loadLeaderboard from "../utils/leaderboard";

export default function Leaderboard(){
    const myData = loadLeaderboard()
    return <>
    <h1>leaderbord</h1>
    {myData.map((l:any) => (
        <p key={l.name}>player: {l.name} time: {l.score}</p>
    ))}
    <Link to={'/mainPage'}>mainPage</Link>
    </>
}