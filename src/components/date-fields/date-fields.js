import Inputmask from "inputmask"

$(".date-field_short").next().hide()

$(".date-field_large").next().hide()

$(".date-dropdown__date-field_short").mouseenter(function() {
    $(".date-field_short", this).addClass("date-field_short-hovered")
})

$(".date-dropdown__date-field_short").mouseleave(function() {
    $(".date-field_short", this).removeClass("date-field_short-hovered")
})

$(".date-dropdown__date-field_large").mouseenter(function() {
    $(".date-field_large", this).addClass("date-field_large-hovered")
})

$(".date-dropdown__date-field_large").mouseleave(function() {
    $(".date-field_large", this).removeClass("date-field_large-hovered")
})

let largeSelector = $(".date-field_large")
let shortSelector = $(".date-field_short")

Inputmask({ alias: "datetime", inputFormat: "dd.mm.yyyy", placeholder: "ДД.ММ.ГГГГ" }).mask(shortSelector)

let mask = "99 aaa - 99 aaa"
Inputmask({ "mask": mask }).mask(largeSelector)

$(".date-field_short").on("click", function() {
    let id = "#" + $(this).attr("id")
    $(id + ".date-field_short").next().is(":hidden") ? $(id + ".date-field_short").next().show() : $(id + ".date-field_short").next().hide()
})

$(".date-field_large").on("click", function() {
    $(".date-field_large").next().is(":hidden") ? $(".date-field_large").next().show() : $(".date-field_large").next().hide()
})

document.addEventListener('click', e => {
    let target = e.target
    let id = target.getAttribute('id') ? target.getAttribute('id') : ''
    let calendar = id !== '' ? $('#' + id + '.date-selector') : ''

    let calendar_is_active = calendar ? calendar.attr('style') === '' : true
    let its_calendar = id === e.target.getAttribute('id')

    if (calendar_is_active && !its_calendar) {
        $(".date-field_large").next().hide()
    }
})