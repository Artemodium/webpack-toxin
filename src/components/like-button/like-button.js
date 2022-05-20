const likes = document.querySelectorAll('.like__button');

likes.forEach(like => like.addEventListener('click', () => {
    let field = like.querySelectorAll('.counter')
    if (like.classList.contains('like')) {
        field[0].textContent = parseInt(field[0].textContent) + 1
    } else {
        field[0].textContent = parseInt(field[0].textContent) + 1
    }
}));