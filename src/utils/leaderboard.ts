export default  function loadLeaderboard(setData:Function){
     fetch('https://riddles-project.onrender.com/player/getall')
     .then(res => res.json())
     .then(data => setData(data))
}