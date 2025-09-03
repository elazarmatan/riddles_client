export default function saveToken(token:{ [key: string]: any }){
    if(token.token !== 'TypeError: Failed to fetch'){
   localStorage.setItem('token',token.token)
    }
}