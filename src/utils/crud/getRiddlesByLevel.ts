export default async function getRiddlesById(setriddles:Function,level:string){
    await fetch(`http://localhost:2030/riddle/getByLevel/${level}`)
    .then(res => res.json())
    .then(data => {
        setriddles(data)})
}