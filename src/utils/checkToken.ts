
export default function checkToken(token:string,setToken:Function){
    fetch(`http://localhost:2030/player/token`, {
  method: "GET",
  headers: {
    "Authorization": `Bearer ${token}`
  }
})
    .then(res => {
        console.log(res)
        if(res.status === 400){
            return 'err'
        }
        res.json})
    .then((ans) => {
        if(ans === 'err'){

        }
        else{
            setToken(true)
        }
        })
}