let block = document.querySelectorAll('.rate__block')

block.forEach(elem => elem.addEventListener('click', (e) => {
    let stars = elem.childNodes
    removeClass(stars, 'current')
    addClass(stars, e.target.classList[1], 'current')
    stars.forEach(star => {
        star.textContent = star.classList.contains('current') ? 'star' : 'star_border'
    })
}))

block.forEach(elem => elem.addEventListener('mouseover', (e) => {
    let stars = elem.childNodes
    removeClass(stars, 'over')
    addClass(stars, e.target.classList[1], 'over')
    stars.forEach(star => {
        star.textContent = star.classList.contains('over') ? 'star' : 'star_border'
    })
}))

block.forEach(elem => elem.addEventListener('mouseout', () => {
    let stars = elem.childNodes
    removeClass(stars, 'over')
    stars.forEach(star => {
        star.textContent = star.classList.contains('current') ? 'star' : 'star_border'
    })
}))

function removeClass(arr) {
    for (var i = 0, iLen = arr.length; i < iLen; i++) {
        for (var j = 1; j < arguments.length; j++) {
            arr[i].classList.remove(arguments[j]);
        }
    }
}

function addClass(arr, count) {
    for (var i = 0, iLen = count; i <= iLen; i++) {
        for (var j = 2; j < arguments.length; j++) {
            arr[i].classList.add(arguments[j]);
        }
    }
}