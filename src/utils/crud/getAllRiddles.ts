export default async function getAllRiddles(setriddles:Function){
    await fetch('http://localhost:2030/riddle/getall')
    .then(res => res.json())
    .then(data => {
        const finishData = data.slice(1,data.length)
        setriddles(finishData)})
}
