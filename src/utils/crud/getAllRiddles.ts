export default async function getAllRiddles(setriddles:Function){
    await fetch('https://riddles-project.onrender.com/riddle/getall')
    .then(res => res.json())
    .then(data => {
        const finishData = data.slice(1,data.length)
        setriddles(finishData)})
}
