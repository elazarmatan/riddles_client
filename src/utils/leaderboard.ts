export default function loadLeaderboard(){
    const savedata = localStorage.getItem('leader')
    const data = savedata? JSON.parse(savedata):null
    return data
}