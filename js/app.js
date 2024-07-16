document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginContainer = document.getElementById('login-container');
    const mainContent = document.getElementById('main-content');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Aquí se puede agregar la lógica de autenticación.
        // Para este ejemplo, aceptamos cualquier email/password
        if (email && password) {
            sessionStorage.setItem('authenticated', 'true');
            loginContainer.classList.add('hidden');
            mainContent.classList.remove('hidden');
        } else {
            alert('Invalid credentials');
        }
    });

    if (sessionStorage.getItem('authenticated') === 'true') {
        loginContainer.classList.add('hidden');
        mainContent.classList.remove('hidden');
    }
});