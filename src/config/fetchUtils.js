async function fetchPost(url, body = {}) {
    return new Promise((res) => {
        let status
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer ' + localStorage.getItem('CGtoken'),
              },
            body: JSON.stringify(body)
        })
            .then((response) => {
                status = response.status
                return response.json()
            })
            .then((responseJSON) => {
                res({ responseJSON, status })

            })
            .catch(() => {
                res({ responseJSON: [], status: 500 })
            })
    })
}
export { fetchPost }

async function fetchPostSendFile(url, body = {}) {
    return new Promise((res) => {
        let status
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('CGtoken'),
              },
            body: body
        })
            .then((response) => {
                status = response.status
                return response.json()
            })
            .then((responseJSON) => {
                res({ responseJSON, status })
            })
            .catch(() => {
                res({ responseJSON: [], status: 500 })
            })
    })
}
export { fetchPostSendFile }

async function fetchPutSendFile(url, body = {}) {
    return new Promise((res) => {
        let status
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('CGtoken'),
              },
            body: body
        })
            .then((response) => {
                status = response.status
                return response.json()
            })
            .then((responseJSON) => {
                res({ responseJSON, status })
            })
            .catch(() => {
                res({ responseJSON: [], status: 500 })
            })
    })
}
export { fetchPutSendFile }

async function fetchPut(url, body = {}) {
    return new Promise((res) => {
        let status
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('CGtoken'),
              },
            body: JSON.stringify(body)
        })
            .then((response) => {
                status = response.status
                return response.json()
            })
            .then((responseJSON) => {
                res({ responseJSON, status })
            })
            .catch(() => {
                res({ responseJSON: [], status: 500 })
            })
    })
}
export { fetchPut }

async function fetchDelete(url) {
    return new Promise((res) => {
        let status
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('CGtoken'),
              },
        })
            .then((response) => {
                status = response.status
                return response.json()
            })
            .then((responseJSON) => {
                res({ responseJSON, status })
            })
            .catch(() => {
                res({ responseJSON: [], status: 500 })
            })
    })
}
export { fetchDelete }

async function fetchGet(url) {
    return new Promise((res) => {
        let status
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('CGtoken'),
              },
        })
            .then((response) => {
                status = response.status
                return response.json()
            })
            .then((responseJSON) => {
                res({ responseJSON, status })
            })
            .catch(() => {
                res({ responseJSON: [], status: 500 })
            })
    })
}
export { fetchGet }

