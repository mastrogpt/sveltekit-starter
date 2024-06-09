export async function get(url: string) {
    return fetch(url)
        .then(r => r.json())
        .then(res => res)
        .catch(err => {
            console.log(err)
            return { "error": err.toString() }
        })
}

export async function post(url: string, body: any) {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(body)
    })
        .then(r => r.json())
        .then(res => res)
        .catch(err => {
            console.log(err)
            return { "error": err.toString() }
        })
}
