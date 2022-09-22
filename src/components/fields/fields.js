$(".field-date").next().hide()

$(".field").mouseenter(function() {
    $(this).addClass("field_hovered-focused-add")
})

$(".field").mouseleave(function() {
    $(this).removeClass("field_hovered-focused-add")
})

$(".field-date").mouseenter(function() {
    $(this).addClass("field_hovered-focused-add")
})

$(".field-date").mouseleave(function() {
    $(this).removeClass("field_hovered-focused-add")
})

$(".text-field__field_subscription").mouseenter(function() {
    $(".field_subscription", this).addClass("field_subscription-hovered-focused-add")
})

$(".text-field__field_subscription").mouseleave(function() {
    $(".field_subscription", this).removeClass("field_subscription-hovered-focused-add")
})

$(".field-date-listener").on("click", function() {
    $(".field-date-listener").next().is(":hidden") ? $(".field-date-listener").next().show() : $(".field-date-listener").next().hide()
})

document.addEventListener('click', e => {
    let target = e.target
    let id = target.getAttribute('id') ? target.getAttribute('id') : ''
    let calendar = id !== '' ? $('#' + id + '.date-selector') : ''

    let calendar_is_active = calendar ? calendar.attr('style') === '' : true
    let its_calendar = id === e.target.getAttribute('id')

    if (calendar_is_active && !its_calendar) {
        $(".field-date-listener").next().hide()
    }
})