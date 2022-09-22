class Dropdown {
    constructor(dropdown_id, e, type, view) {
        this.event = e
        this.dropdown_id = dropdown_id
        this.type = type
        this.view = view
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
    }
    isDropdownShow() {
        $('.dropdown-default__content_default').is(':visible') ?
            $('.field__text-field_default-expandable').css('border', '1px solid rgba(31, 32, 65, 0.5)') :
            $('.field__text-field_default-expandable').css('border', '1px solid rgba(31, 32, 65, 0.25)')

        $('.dropdown-large__content_large').is(':visible') ?
            $('.field__text-field_large-expandable').css('border', '1px solid rgba(31, 32, 65, 0.5)') :
            $('.field__text-field_large-expandable').css('border', '1px solid rgba(31, 32, 65, 0.25)')
    }

    largeDropdownOnClick() {
        expand = $(this.dropdown_id + '.dropdown-large__content_large')
        textField = $(this.dropdown_id + '.field__text-field_large-expandable')
        if (this.ExpandableClassListLarge.includes(this.event.target.className))
            expand.is(':hidden') ?
            expand.fadeIn() &&
            textField.css({ 'border': '1px solid rgba(31, 32, 65, 0.5)' }) &&
            $(this.dropdown_id + '.field__text-field_large-expandable').removeClass("rounded-bottom") :
            expand.fadeOut() &&
            textField.css({ 'border': '1px solid rgba(31, 32, 65, 0.25)' }) &&
            this.type === ' guests' ? $(this.dropdown_id + '.field__text-field_large-expandable').addClass("rounded-bottom") : ''
    }

    defaultDropdownClick() {
        let expand = $(this.dropdown_id + '.dropdown-default__content_default')
        let textField = $(this.dropdown_id + '.field__text-field_default-expandable')
        if (this.ExpandableClassListDefault.includes(this.event.target.className))
            expand.is(':hidden') ?
            expand.fadeIn() &&
            textField.css('border', '1px solid rgba(31, 32, 65, 0.5)') &&
            $(this.dropdown_id + ".field__text-field_default-expandable").removeClass("rounded-bottom") :
            expand.fadeOut() &&
            textField.css('border', '1px solid rgba(31, 32, 65, 0.25)') &&
            this.type === ' guests' ? $(this.dropdown_id + ".field__text-field_default-expandable").addClass("rounded-bottom") : ''
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
    buttonClearClick() {
        if (['button-text_small_color-font clear_unbordered'].includes(this.event.target.className)) {
            $(this.dropdown_id + '.item__key').text(0)
        }
    }

    makeGuestsPlaceholder() {
        if (this.type === ' guests') {
            allGuests = $(this.dropdown_id + '.item__key').get().map(el => parseInt(el.innerText))
            adults = allGuests.slice(0, 2).reduce((summ, cur) => summ + cur)
            babies = allGuests[2]
            if (adults === 0)
                placeholderAdults = 'Сколько гостей'
            else if (('' + adults).slice(-1) === '1' && ('' + adults).slice(-2) !== '11')
                placeholderAdults = `${adults} гость`
            else if (['2', '3', '4'].includes(('' + adults).slice(-1)) && !(['12', '13', '14'].includes('' + adults)) &&
                !(['11', '12', '13', '14'].includes(('' + adults).slice(-2))))
                placeholderAdults = `${adults} гостя`
            else
                placeholderAdults = `${adults} гостей`
            if (babies === 1)
                placeholderBabies = ` ${babies} младенец`
            else if (babies > 1 && babies < 5)
                placeholderBabies = `${babies} младенца`
            else if (babies > 4)
                placeholderBabies = `${babies} младенцев`
            else
                placeholderBabies = ''
            $(this.dropdown_id + '.text-field__placeholder-text').text(`${adults === 0 && babies>0 ? '' : placeholderAdults}${adults>0&&babies>0? ', ':''}${placeholderBabies}`)
        }
    }

    makeRoomsPlaceholder() {
        if (this.type === ' rooms') {
            allRooms = $(this.dropdown_id + '.item__key').get().map(el => parseInt(el.innerText))
            countBedRooms = allRooms[0]
            countBeds = allRooms[1]
            countBathRooms = allRooms[2]
            if (countBedRooms == 1) {
                bedRooms = 'спальня'
            } else if ([2, 3, 4].includes(countBedRooms)) {
                bedRooms = 'спальни'
            } else {
                bedRooms = 'спален'
            }
            if (countBeds == 1) {
                beds = 'кровать'
            } else if ([2, 3, 4].includes(countBeds)) {
                beds = 'кровати'
            } else {
                beds = 'кроватей'
            }
            if (countBathRooms == 1) {
                bathRooms = 'ванная комната'
            } else if ([2, 3, 4].includes(countBathRooms)) {
                bathRooms = 'вынных комнаты'
            } else {
                bathRooms = 'вынных комнат'
            }
            placeHolderRooms = `${countBedRooms} ${bedRooms}, ${countBeds} ${beds}...`
            $(this.dropdown_id + '.text-field__placeholder-text').text(placeHolderRooms)
        }
    }
}

function callDropdown(d) {
    d.defaultDropdownClick()
    d.largeDropdownOnClick()
    d.minusClick()
    d.plusClick()
    d.buttonClearClick()
    d.makeGuestsPlaceholder()
    d.makeRoomsPlaceholder()
}

$(".dropdown-large").on("click", function(e) {
    let drop = this
    callDropdown(new Dropdown("#" + drop.getAttribute("id"), e, drop.getAttribute("type"), drop.getAttribute("view")))
})

$(".dropdown-default").on("click", function(e) {
    let drop = this
    callDropdown(new Dropdown("#" + drop.getAttribute("id"), e, drop.getAttribute("type"), drop.getAttribute("view")))
})