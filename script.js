toggler = document.querySelector('#theme-toggler-checkbox');
toggler.addEventListener('click', (e) => {
    if (toggler.checked) {
        document.documentElement.className = 'theme-light';
    } else {
        document.documentElement.className = 'theme-dark';
    }
});