$('.expandable-checkbox__content').show()

let ExpandableClassList = ['expandable-checkbox__head', 'head__tittle', 'head__checkmark']

$('.expandable-checkbox_clickable').on('click', function(e) {
    let expand = $('.expandable-checkbox__content', this)
    let checkmark = $('.head__checkmark', this)
    if (ExpandableClassList.includes(e.target.className))
        expand.is(':hidden') ?
        expand.fadeIn() && checkmark.css('transform', 'rotateX(360deg)') :
        expand.fadeOut() && checkmark.css('transform', 'rotateX(-180deg)')
})