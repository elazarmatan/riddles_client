export default async function getRiddlesById(setriddles:Function,level:string){
    await fetch(`https://riddles-project.onrender.com/riddle/getByLevel/${level}`)
    .then(res => res.json())
    .then(data => {
        setriddles(data)})
}