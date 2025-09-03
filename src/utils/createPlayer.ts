export default async function createPlayer(auth: { [key: string]: any }) {
     auth.role = 'user'
    const res = await fetch('http://localhost:2030/player/create ', {
        method: 'POST',
        body: JSON.stringify(auth),
        headers: {
            "Content-Type": "application/json"
        }
    })
    if(res.status === 400) return 'err'
    return await res.json()
}
