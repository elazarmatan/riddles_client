import { Link } from "react-router";
import loadLeaderboard from "../utils/leaderboard";
import { useEffect, useState } from "react";

export default  function Leaderboard(){
    const [myData, setData] = useState<Array<{ name: string; time: number }>>([]);
    useEffect(() => {
        loadLeaderboard(setData)
    })
    return <>
    <h1>leaderbord</h1>
    {myData?(myData.filter((l:any) => l.time).sort((a, b) => a.time - b.time).map((l:any) => (
        <p key={l.name}>player: {l.name} time: {l.time}</p>
    ))):<p>No data found in leaderboard</p>}
    <Link to={'/mainPage'}>mainPage</Link>
    </>
}