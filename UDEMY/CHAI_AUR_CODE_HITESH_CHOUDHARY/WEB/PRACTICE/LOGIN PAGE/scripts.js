const response = document.getElementById('response');
let username = '';
let password = '';

document.querySelector('#login-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const data = {
        "username": username,
        "password": password
    };

    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.status === 'success') {
            window.location.href = '/home';
        } else {
            alert('invalid credentials');
        }
    })
    .catch((error) => {
        console.error(error);
    });
});
