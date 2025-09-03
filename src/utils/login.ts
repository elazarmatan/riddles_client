export default async function login(auth: object) {
    try {
        const res = await fetch('https://riddles-project.onrender.com/player/login', {
            method: 'POST',
            body: JSON.stringify(auth), 
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!res.ok) {
            return 'err';
        }

        const data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
}
