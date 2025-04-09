document.getElementById('loginForm').addEventListener('submit', async(e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('error');

    try {
        if (email === 'admin@devpasta.com' && password === '123456') {
            localStorage.setItem('isAuthenticated', 'true');
            window.location.href = 'product.html';
        } else {
            throw new Error('Credenciais inválidas');
        }
    } catch (error) {
        errorElement.textContent = error.message;
    }
});