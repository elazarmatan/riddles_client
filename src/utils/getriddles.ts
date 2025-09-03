export default function getRiddles(){
     const savedata = localStorage.getItem('riddles')
    const data = savedata? JSON.parse(savedata):null
    return data
}