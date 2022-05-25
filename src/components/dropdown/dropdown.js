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
    if (ExpandableClassListLarge.includes(e.target.className))
        expand.is(':hidden') ?
        expand.fadeIn() &&
        textField.css({ 'border': '1px solid rgba(31, 32, 65, 0.5)' }) :
        expand.fadeOut() &&
        textField.css({ 'border': '1px solid rgba(31, 32, 65, 0.25)' })
})

$('.item__count').on('click', function(e) {
    let count = parseInt($('.item__key', this).text())
    if (['count__minus-symb', 'count__minus'].includes(e.target.className) && count > 0) {
        count -= 1
        $('.item__key', this).text(count)
    } else if (['count__plus-symb', 'count__plus'].includes(e.target.className)) {
        count += 1
        $('.item__key', this).text(count)
    }
})

$('.dropdown-large').on('click', function(e) {
    if (['button__placeholder_color-font'].includes(e.target.className)) {
        $(this).find('.item__key').text(0)
    }
    let count = $(this).find('.item__key').text()
    let name = $(this).find('.content__item').text()
    name = name.split('+')
    names = name.map(i => i.slice(0, i.indexOf('-')))
    counts = name.map(i => i.slice(i.indexOf('-') + 1))
    let values = {}
    names.forEach((key, i) => values[key] = counts[i])
    count = Object.values(values).map(i => parseInt(i)).filter(val => !Number.isNaN(val))
    count = count.reduce((summ, curr) => summ + curr)
    if (count === 0)
        $(this).find('.text-field__placeholder-text').text('Сколько гостей')
    else if (('' + count).slice(-1) === '1' && count != 11)
        $(this).find('.text-field__placeholder-text').text(`${count} гость`)
    else if (['2', '3', '4'].includes(('' + count).slice(-1)))
        $(this).find('.text-field__placeholder-text').text(`${count} гостя`)
    else
        $(this).find('.text-field__placeholder-text').text(`${count} гостей`)
})