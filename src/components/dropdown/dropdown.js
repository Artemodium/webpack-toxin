$('.dropdown-default__content_default').show();
$('.dropdown-large__content_large').show();
let ExpandableClassListLarge = ['field__text-field_large-expandable',
    'text-field__placeholder',
    'text-field__placeholder-checkmark',
    'text-field__chekmark',
    'text-field__placeholder-text'
]
let ExpandableClassListDefault = ['field__text-field_default-expandable',
    'text-field__placeholder',
    'text-field__placeholder-checkmark',
    'text-field__chekmark',
    'text-field__placeholder-text'
]

$('.dropdown-default__content_default').is(':visible') ?
    $('.field__text-field_default-expandable').css('border', '1px solid rgba(31, 32, 65, 0.5)') :
    $('.field__text-field_default-expandable').css('border', '1px solid rgba(31, 32, 65, 0.25)')

$('.dropdown-large__content_large').is(':visible') ?
    $('.field__text-field_large-expandable').css('border', '1px solid rgba(31, 32, 65, 0.5)') :
    $('.field__text-field_large-expandable').css('border', '1px solid rgba(31, 32, 65, 0.25)')

$('.dropdown-default__field-and-content').on('click', function(e) {
    let expand = $('.dropdown-default__content_default', this)
    let textField = $('.field__text-field_default-expandable', this)
    console.log(e.target.className)
    if (ExpandableClassListDefault.includes(e.target.className))
        expand.is(':hidden') ?
        expand.fadeIn() &&
        textField.css('border', '1px solid rgba(31, 32, 65, 0.5)') :
        expand.fadeOut() &&
        textField.css('border', '1px solid rgba(31, 32, 65, 0.25)')
})

$('.dropdown-large__field-and-content').on('click', function(e) {
    let expand = $('.dropdown-large__content_large', this)
    let textField = $('.field__text-field_large-expandable', this)
    console.log(e.target.className)
    if (ExpandableClassListLarge.includes(e.target.className))
        expand.is(':hidden') ?
        expand.fadeIn() &&
        textField.css({ 'border': '1px solid rgba(31, 32, 65, 0.5)' }) :
        expand.fadeOut() &&
        textField.css({ 'border': '1px solid rgba(31, 32, 65, 0.25)' })
})

/*$('.dropdown-large__content_large div').on('click', function(e) {
    e.stopPropagation();
})

$('.dropdown-large__content_large').on('click', function(e) {
    e.stopPropagation();
})

$('.dropdown-default__content_default div').on('click', function(e) {
    e.stopPropagation();
})

$('.dropdown-default__content_default').on('click', function(e) {
    e.stopPropagation();
})*/

$('.item__count').on('click', function(e) {
    count = e.target
    console.log(count)
})