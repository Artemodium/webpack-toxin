import Inputmask from "inputmask"

$(".double-date-field-dropdown").next().hide()

$(".double-date-field-dropdown__start-date").mouseenter(function() {
    $(".fields__field-start", this).addClass("fields__field-start-hovered")
})

$(".double-date-field-dropdown__start-date").mouseleave(function() {
    $(".fields__field-start", this).removeClass("fields__field-start-hovered")
})

$(".double-date-field-dropdown__end-date").mouseenter(function() {
    $(".fields__field-end", this).addClass("fields__field-end-hovered")
})

$(".double-date-field-dropdown__end-date").mouseleave(function() {
    $(".fields__field-end", this).removeClass("fields__field-end-hovered")
})

Inputmask({ alias: "datetime", inputFormat: "dd.mm.yyyy", placeholder: "ДД.ММ.ГГГГ" }).mask($(".fields__field-start"))
Inputmask({ alias: "datetime", inputFormat: "dd.mm.yyyy", placeholder: "ДД.ММ.ГГГГ" }).mask($(".fields__field-end"))

//let field = $(".double-date-field-dropdown__start-date")

$(".double-date-field-dropdown__start-date").on("click", function() {
    let id = "#" + $(this).attr("id")
    $(id + ".double-date-field-dropdown").next().is(":hidden") ? $(id + ".double-date-field-dropdown").next().show() : $(id + ".double-date-field-dropdown").next().hide()
})

$(".double-date-field-dropdown__end-date").on("click", function() {
    let id = "#" + $(this).attr("id")
    $(id + ".double-date-field-dropdown").next().is(":hidden") ? $(id + ".double-date-field-dropdown").next().show() : $(id + ".double-date-field-dropdown").next().hide()
})