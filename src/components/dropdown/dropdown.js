$('.dropdown-default__content_default').show();
$('.dropdown-large__content_large').show();

$('.dropdown-default__content_default').is(':visible') ?
    $('.field__text-field_default-expandable').css('border', '1px solid rgba(31, 32, 65, 0.5)') :
    $('.field__text-field_default-expandable').css('border', '1px solid rgba(31, 32, 65, 0.25)')

$('.dropdown-large__content_large').is(':visible') ?
    $('.field__text-field_large-expandable').css('border', '1px solid rgba(31, 32, 65, 0.5)') :
    $('.field__text-field_large-expandable').css('border', '1px solid rgba(31, 32, 65, 0.25)')

$('.dropdown-default__field-and-content').on('click', function() {
    let expand = $('.dropdown-default__content_default', this)
    let textField = $('.field__text-field_default-expandable', this)
    expand.is(':hidden') ?
        expand.fadeIn(1) &&
        textField.css('border', '1px solid rgba(31, 32, 65, 0.5)') :
        expand.fadeOut(1) &&
        textField.css('border', '1px solid rgba(31, 32, 65, 0.25)')
})

$('.dropdown-large__field-and-content').on('click', function() {
    let expand = $('.dropdown-large__content_large', this)
    let textField = $('.field__text-field_large-expandable', this)
    expand.is(':hidden') ?
        expand.fadeIn(1) &&
        textField.css({ 'border': '1px solid rgba(31, 32, 65, 0.5)' }) :
        expand.fadeOut(1) &&
        textField.css({ 'border': '1px solid rgba(31, 32, 65, 0.25)' })
})