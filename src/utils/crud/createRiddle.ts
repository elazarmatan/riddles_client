export default function createRiddle(newRiddle:object){
    let response = {}
     fetch('https://riddles-project.onrender.com/riddle/create ', {
        method: 'POST',
        body: JSON.stringify(newRiddle),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => {
        if(res.status === 400){
            return 'err'
        }
        return res.json()
    })
    .then(data => {
        if(data === 'err'){
            
        }
        else{
           response = data
        }
    })
    return response
}