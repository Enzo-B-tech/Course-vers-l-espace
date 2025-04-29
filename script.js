const toggleButton = document.getElementById('toggle-theme');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('nav').classList.toggle('dark-mode');
    document.querySelectorAll('section').forEach(section => section.classList.toggle('dark-mode'));
    document.querySelectorAll('form').forEach(form => form.classList.toggle('dark-mode'));
    document.querySelectorAll('input[type="email"]').forEach(input => input.classList.toggle('dark-mode'));
    document.querySelectorAll('input[type="password"]').forEach(input => input.classList.toggle('dark-mode'));
});