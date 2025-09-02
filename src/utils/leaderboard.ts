export default function loadLeaderboard(){
    const savedata = localStorage.getItem('leader')
    console.log(savedata)
    const data = savedata? JSON.parse(savedata):null
    return data
}