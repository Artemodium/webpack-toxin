class Dropdown {
    constructor(dropdown_id, e) {
        this.event = e
        this.dropdown_id = dropdown_id
        this.ExpandableClassListLarge = ['field__text-field_large-expandable',
            'text-field__placeholder',
            'text-field__placeholder-checkmark',
            'text-field__chekmark',
            'text-field__placeholder-text'
        ]
        this.ExpandableClassListDefault = ['field__text-field_default-expandable',
            'text-field__placeholder',
            'text-field__placeholder-checkmark',
            'text-field__chekmark',
            'text-field__placeholder-text'
        ]
        this.minus = ['count__minus', 'count__minus-symb']
        this.plus = ['count__plus', 'count__plus-symb']
    }
    isDropdownShow() {
        $('.dropdown-default__content_default').is(':visible') ?
            $('.field__text-field_default-expandable').css('border', '1px solid rgba(31, 32, 65, 0.5)') :
            $('.field__text-field_default-expandable').css('border', '1px solid rgba(31, 32, 65, 0.25)')

        $('.dropdown-large__content_large').is(':visible') ?
            $('.field__text-field_large-expandable').css('border', '1px solid rgba(31, 32, 65, 0.5)') :
            $('.field__text-field_large-expandable').css('border', '1px solid rgba(31, 32, 65, 0.25)')
    }
    toRoundBorders() {
        $("#guests.field__text-field_default-expandable").addClass("field__text-field_rounded_bottom")
    }

    largeDropdownOnClick() {
        expand = $(this.dropdown_id + '.dropdown-large__content_large')
        textField = $(this.dropdown_id + '.field__text-field_large-expandable')
        if (this.ExpandableClassListLarge.includes(this.event.target.className))
            expand.is(':hidden') ?
            expand.fadeIn() &&
            textField.css({ 'border': '1px solid rgba(31, 32, 65, 0.5)' }) :
            expand.fadeOut() &&
            textField.css({ 'border': '1px solid rgba(31, 32, 65, 0.25)' })
    }

    defaultDropdownClick() {
        let expand = $(this.dropdown_id + '.dropdown-default__content_default')
        let textField = $(this.dropdown_id + '.field__text-field_default-expandable')
            //let id_field = $(".field__text-field_default-expandable", this).attr("id")
        if (this.ExpandableClassListLarge.includes(this.event.target.className))
            expand.is(':hidden') ?
            expand.fadeIn() &&
            textField.css('border', '1px solid rgba(31, 32, 65, 0.5)') &&
            $(".field__text-field_default-expandable", this).removeClass("field__text-field_rounded_bottom") :
            expand.fadeOut() &&
            textField.css('border', '1px solid rgba(31, 32, 65, 0.25)')
            //id_field === "guests" ? $(".field__text-field_default-expandable", this).addClass("field__text-field_rounded_bottom") : ""
    }
    minusClick() {
        if (this.event.target.className === 'count__minus') {
            let count = $(this.event.target).next().text()
            count > 0 ? count -= 1 : ''
            $(this.event.target).next().text(count)
        }
    }
    plusClick() {
        if (this.event.target.className === 'count__plus') {
            let count = parseInt($(this.event.target).prev().text())
            count += 1
            $(this.event.target).prev().text(count)
        }
    }
}

function callDropdown(d) {

    d.defaultDropdownClick()
    d.largeDropdownOnClick()
    d.minusClick()
    d.plusClick()

    //d.plus.includes(d.event.target.className) ? d.arrowClick() : ""
    //d.minus.includes(d.event.target.className) ? d.arrowClick() : ""

    /*$('.item__count').on('click', function(e) {
        let count = parseInt($('.item__key', this).text())
        if (['count__minus-symb', 'count__minus'].includes(e.target.className) && count > 0) {
            count -= 1
            $('.item__key', this).text(count)
        } else if (['count__plus-symb', 'count__plus'].includes(e.target.className)) {
            count += 1
            $('.item__key', this).text(count)
        }
    })*/

    /*$('.dropdown-large').on('click', function(e) {
        if (['button__placeholder_color-font clear'].includes(e.target.className)) {
            $(this).find('.item__key').text(0)
        }
        let str = $(this).find('.content__item').text()
        str = str.split('+')
        names = str.map(i => i.slice(0, i.indexOf('-')))
        counts = str.map(i => i.slice(i.indexOf('-') + 1))
        let guests = {}
        names.forEach((key, i) => guests[key] = counts[i])
        count = Object.values(guests).map(i => parseInt(i)).filter(val => !Number.isNaN(val))
        count = count.reduce((summ, curr) => summ + curr)
        if (count === 0)
            $(this).find('.text-field__placeholder-text').text('Сколько гостей')
        else if (('' + count).slice(-1) === '1' && ('' + count).slice(-2) !== '11')
            $(this).find('.text-field__placeholder-text').text(`${count} гость`)
        else if (['2', '3', '4'].includes(('' + count).slice(-1)) && !(['12', '13', '14'].includes('' + count)) && !(['11', '12', '13', '14'].includes(('' + count).slice(-2))))
            $(this).find('.text-field__placeholder-text').text(`${count} гостя`)
        else
            $(this).find('.text-field__placeholder-text').text(`${count} гостей`)
    })

    $('.dropdown-default').on('click', function(e) {
        if ($(this, '.dropdown-default').attr("type") === " rooms") {
            if (['button__placeholder_color-font'].includes(e.target.className)) {
                $(this).find('.item__key').text(0)
            }
            let str = $(this).find('.content__item').text()
            str = str.split('+')
            names = str.map(i => i.slice(0, i.indexOf('-')))
            counts = str.map(i => i.slice(i.indexOf('-') + 1))
            let rooms = {}
            names.forEach((key, i) => {
                if (counts[i] != '')
                    rooms[key] = counts[i]
            })

            let bedrooms
            let beds
            let baths

            if (rooms['спальни'] == 1) {
                bedrooms = 'спальня'
            } else if (['2', '3', '4'].includes(rooms['спальни'])) {
                bedrooms = 'спальни'
            } else {
                bedrooms = 'спален'
            }
            if (rooms['кровати'] == 1) {
                beds = 'кровать'
            } else if (['2', '3', '4'].includes(rooms['кровати'])) {
                beds = 'кровати'
            } else {
                beds = 'кроватей'
            }
            if (rooms['ванные комнаты'] == 1) {
                baths = 'ванная комната'
            } else if (['2', '3', '4'].includes(rooms['ванные комнаты'])) {
                baths = 'вынных комнаты'
            } else {
                baths = 'вынных комнат'
            }

            $(this).find('.text-field__placeholder-text').text(`${rooms['спальни']} ${bedrooms}, ${rooms['кровати']} ${beds}...`)
            $(this).find('.bedrooms').text(`${rooms['спальни']} ${bedrooms},`)
            $(this).find('.beds').text(`${rooms['кровати']} ${beds},`)
            $(this).find('.baths').text(`${rooms['ванные комнаты']} ${baths}`)

        } else if (($(this, '.dropdown-default').attr("type") === " guests")) {
            let str = $(this).find('.content__item').text()
            str = str.split('+')
            names = str.map(i => i.slice(0, i.indexOf('-')))
            counts = str.map(i => i.slice(i.indexOf('-') + 1))
            let guests = {}
            names.forEach((key, i) => {
                if (counts[i] != '')
                    guests[key] = counts[i]
            })

            let adults
            let baby

            if (guests['младенцы'] == 1) {
                baby = 'младенец'
            } else if (guests['младенцы'] > 1 && guests['младенцы'] < 5) {
                baby = 'младенца'
            } else {
                baby = 'младенцев'
            }

            sumGuests = parseInt(guests['взрослые']) + parseInt(guests["дети"])

            if (sumGuests == 1) {
                adults = 'гость'
            } else if (sumGuests < 5 && sumGuests > 1) {
                adults = 'гостя'
            } else {
                adults = 'гостей'
            }
            $(this).find('.text-field__placeholder-text').text(`${sumGuests} ${adults}, ${guests['младенцы']} ${baby}`)
        }
    })*/
}

$(".dropdown-large").on("click", function(e) {
    let drop = this
    callDropdown(new Dropdown("#" + drop.getAttribute("id"), e))
})

$(".dropdown-default").on("click", function(e) {
    let drop = this
    let dropDown = new Dropdown("#" + drop.getAttribute("id"), e)
    callDropdown(dropDown)
})