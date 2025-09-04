import { Link } from "react-router";
import loadLeaderboard from "../utils/leaderboard";
import { useEffect, useState } from "react";

export default  function Leaderboard(){
    const [myData, setData] = useState<Array<{ name: string; time: number }>>([]);
    useEffect(() => {
        loadLeaderboard(setData)
    },[])
    return <>
    <h1>leaderbord</h1>
    <ol>
    {myData?(myData.filter((l:any) => l.time).sort((a, b) => a.time - b.time).map((l:any) => (
        <li key={l.name}>player: {l.name} time: {l.time}</li>
    ))):<p>No data found in leaderboard</p>}
    </ol>
    <Link to={'/mainPage'}>mainPage</Link>
    </>
}