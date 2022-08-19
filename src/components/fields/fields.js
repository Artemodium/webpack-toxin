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