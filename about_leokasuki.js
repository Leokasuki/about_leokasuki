document.querySelectorAll('.hobby .title').forEach(item => {
    item.addEventListener('click', () => {
        const details = item.nextElementSibling;
        if(details.style.display === 'block'){
            details.style.display = 'none';
            item.textContent = item.textContent.replace('-', '+');
        } else {
            details.style.display = 'block';
            item.textContent = item.textContent.replace('+', '-');
        }
    });
});
