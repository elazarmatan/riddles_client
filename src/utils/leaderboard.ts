export default  function loadLeaderboard(setData:Function){
     fetch('http://localhost:2030/player/getall')
     .then(res => res.json())
     .then(data => setData(data))
}