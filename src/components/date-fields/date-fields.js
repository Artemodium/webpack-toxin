import Inputmask from "inputmask"

$(".date-dropdown__date-field_short").mouseenter(function(){
    $(".date-field_short", this).addClass("date-field_short-hovered")
})

$(".date-dropdown__date-field_short").mouseleave(function(){
    $(".date-field_short", this).removeClass("date-field_short-hovered")
})

$(".date-dropdown__date-field_large").mouseenter(function(){
    $(".date-field_large", this).addClass("date-field_large-hovered")
})

$(".date-dropdown__date-field_large").mouseleave(function(){
    $(".date-field_large", this).removeClass("date-field_large-hovered")
})

let largeSelector = $(".date-field_large")
let shortSelector = $(".date-field_short")

Inputmask({alias: "datetime", inputFormat: "dd.mm.yyyy", placeholder: "ДД.ММ.ГГГГ"}).mask(shortSelector)

let mask = "99 aaa - 99 aaa"
Inputmask({"mask": mask}).mask(largeSelector)