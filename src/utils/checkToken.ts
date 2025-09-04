
export default async function checkToken(token:string){
    return await fetch(`https://riddles-project.onrender.com/player/token`, {
  method: "GET",
  headers: {
    "Authorization": `Bearer ${token}`
  }
})
    .then(res => {
        if(res.status === 400){
            return 'err'
        }
        res.json()})
    .then((ans) => {
        if(ans === 'err'){
            return false
        }
        else{
            return true;
        }
        })
}