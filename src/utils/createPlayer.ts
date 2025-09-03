export default async function createPlayer(auth: { [key: string]: any }) {
     auth.role = 'user'
    const res = await fetch('https://riddles-project.onrender.com/player/create ', {
        method: 'POST',
        body: JSON.stringify(auth),
        headers: {
            "Content-Type": "application/json"
        }
    })
    if(res.status === 400) return 'err'
    return await res.json()
}
