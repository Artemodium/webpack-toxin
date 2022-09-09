class Calendar {
    constructor(calendar_id, date_picker) {
        this.currentYear = new Date().getFullYear()
        this.currentMonth = new Date().getMonth()
        this.monthList = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
        this.monthListShort = ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"]
        this.calendar = calendar_id
        this.date_picker = date_picker
    }

    getYear() {
        return new Date().getFullYear()
    }

    getMonth() {
        return new Date().getMonth()
    }

    getMonthName() {
        return this.monthList[currentMonth]
    }

    getLengthCurrentMonth(currentYear, currentMonth) {
        return new Date(currentYear, currentMonth + 1, 0).getDate()
    }

    getMonthLastDay(currentYear, currentMonth) {
        return new Date(currentYear, currentMonth, 0).getDate()
    }

    getCurrentMonthFirstWeekDay(currentYear, currentMonth) {
        return parseInt(new Date(currentYear, currentMonth, 1).getDay() - 1 >= 0 ? new Date(currentYear, currentMonth, 1).getDay() - 1 : 6)
    }

    displayDayToday(currentMonthFirstWeekDay, lengthCurrentMonth) { // отметить сегодняшний день
        Array.from($(this.calendar + '.days__monthday-field').slice(currentMonthFirstWeekDay, currentMonthFirstWeekDay + lengthCurrentMonth)).map(elem => {
            this.currentMonth === this.getMonth() && $($(elem.lastElementChild)).text() == new Date().getDate() && this.currentYear == this.getYear() ?
                $(elem).addClass('days__monthday-field_today') && $($(elem.lastElementChild)).addClass('monthday-field_today') : ''
        })
    }

    highlightCurrentMonthDays(currentMonthFirstWeekDay, lengthCurrentMonth) { // выделить дни текущего месяца
        Array.from($(this.calendar + '.monthday-field').slice(currentMonthFirstWeekDay, currentMonthFirstWeekDay + lengthCurrentMonth)).map(elem => {
            $(elem).addClass('monthday-field_current')
        })
    }

    prepareAnotherMonth() { // удалить все классы перед отрисовкой другого месяца
        $(this.calendar + '.monthday-field').removeClass('monthday-field_current')
        $(this.calendar + '.days__monthday-field').removeClass('monthday-field_current')
        $(this.calendar + '.monthday-field').removeClass('monthday-field_today')
        $(this.calendar + '.days__monthday-field').removeClass('days__monthday-field_today')
    }

    clearPeriod() {
        $(this.calendar + '.days__monthday-field-period').removeClass(['days__monthday-field-period-start', 'days__monthday-field-period-end', 'days__monthday-field-period-between'])
        $(this.calendar + '.days__monthday-field').removeClass(['days__monthday-field_choosen'])
        $(this.calendar + '.monthday-field').removeClass(['monthday-field_choosen'])
    }

    displayDays(currentMonthFirstWeekDay, lastMonthLastDay, lengthCurrentMonth) { //расчитать календарь на текущий месяц
        for (let i = currentMonthFirstWeekDay - 1; i >= 0; i--) { //дни предыдущего месяца
            $(this.calendar + '.monthday-field')[i].innerText = lastMonthLastDay--
        }
        count = currentMonthFirstWeekDay
        for (let i = 1; i <= lengthCurrentMonth; i++) { //дни текущего месяца
            $(this.calendar + '.monthday-field')[count++].innerText = i
        }
        for (let i = lengthCurrentMonth + currentMonthFirstWeekDay, day = 1; i < 42; i++) { //дни следующего месяца
            $(this.calendar + '.monthday-field')[i].innerText = day++
        }
    }
}

function call(c) {
    $(document).ready(function() {
        currentMonth = c.currentMonth
        currentYear = c.currentYear
        $(c.calendar + '.header__month').text(c.getMonthName(currentMonth))
        $(c.calendar + '.header__year').text(currentYear)

        let currentMonthFirstWeekDay = c.getCurrentMonthFirstWeekDay(currentYear, currentMonth)
        let lastMonthLastDay = c.getMonthLastDay(currentYear, currentMonth)
        let lengthCurrentMonth = c.getLengthCurrentMonth(currentYear, currentMonth)

        c.displayDays(currentMonthFirstWeekDay, lastMonthLastDay, lengthCurrentMonth)
        c.highlightCurrentMonthDays(currentMonthFirstWeekDay, lengthCurrentMonth)
        c.displayDayToday(currentMonthFirstWeekDay, lengthCurrentMonth)
    });

    $(c.calendar + '.header__arrow-back').click(function() {
        c.currentMonth == 0 ? c.currentMonth = 12 : ''
        c.currentMonth == 12 ? c.currentYear-- : ''
        c.currentMonth -= 1
        $(c.calendar + '.header__month').text(c.monthList[c.currentMonth])
        $(c.calendar + '.header__year').text(c.currentYear)

        let currentMonthFirstWeekDay = c.getCurrentMonthFirstWeekDay(c.currentYear, c.currentMonth)
        let lastMonthLastDay = c.getMonthLastDay(c.currentYear, c.currentMonth)
        let lengthCurrentMonth = c.getLengthCurrentMonth(c.currentYear, c.currentMonth)

        c.prepareAnotherMonth()
        c.clearPeriod()
        c.displayDays(currentMonthFirstWeekDay, lastMonthLastDay, lengthCurrentMonth)
        c.highlightCurrentMonthDays(currentMonthFirstWeekDay, lengthCurrentMonth)
        c.displayDayToday(currentMonthFirstWeekDay, lengthCurrentMonth)
    });

    $(c.calendar + '.header__arrow-forward').click(function() {
        c.currentMonth == 11 ? c.currentMonth = -1 : ''
        c.currentMonth == -1 ? c.currentYear++ : ''
        c.currentMonth += 1
        $(c.calendar + '.header__month').text(c.monthList[c.currentMonth])
        $(c.calendar + '.header__year').text(c.currentYear)

        let currentMonthFirstWeekDay = c.getCurrentMonthFirstWeekDay(c.currentYear, c.currentMonth)
        let lastMonthLastDay = c.getMonthLastDay(c.currentYear, c.currentMonth)
        let lengthCurrentMonth = c.getLengthCurrentMonth(c.currentYear, c.currentMonth)

        c.prepareAnotherMonth()
        c.clearPeriod()
        c.displayDays(currentMonthFirstWeekDay, lastMonthLastDay, lengthCurrentMonth)
        c.highlightCurrentMonthDays(currentMonthFirstWeekDay, lengthCurrentMonth)
        c.displayDayToday(currentMonthFirstWeekDay, lengthCurrentMonth)
    });

    $(c.calendar + '.days__monthday-field').on('mouseover', function() {
        $(this, '.days__monthday-field').addClass('days__monthday-field_hovered')
        $('.monthday-field', this).addClass('monthday-field_hovered')
    });

    $(c.calendar + '.days__monthday-field').on('mouseout', function() {
        $(this, '.days__monthday-field').removeClass('days__monthday-field_hovered')
        $('.monthday-field', this).removeClass('monthday-field_hovered')
    })

    $(c.calendar + '.days__monthday-field').on('click', function() {
        if (c.date_picker == "double") { //выбор диапазона дат в календаре
            if ((Array.from($(c.calendar + '.days__monthday-field_choosen')).length) < 3) {
                $(this, '.days__monthday-field').toggleClass('days__monthday-field_choosen')
                $('.monthday-field', this).toggleClass('monthday-field_choosen')
            }
            if ((Array.from($(c.calendar + '.days__monthday-field_choosen')).length) > 2) {
                $(this, '.days__monthday-field').removeClass('days__monthday-field_choosen')
                $('.monthday-field', this).removeClass('monthday-field_choosen')
            }

            arr = Array.from($(c.calendar + '.days__monthday-field')).map(el => el.classList.contains('days__monthday-field_choosen'))
            start = arr.indexOf(true)
            end = arr.filter(el => el == true).length > 1 ? arr.lastIndexOf(true) : false
            dd_start = ''
            if (start != end) {
                for (let i = start; i <= end; i++) {
                    if (i == start) {
                        $($(c.calendar + '.days__monthday-field-period')[i]).addClass('days__monthday-field-period-start')
                        dd_start = $($(c.calendar + '.days__monthday-field-period')[i]).next().text()
                        if ((!Array.from($(c.calendar + '.days__monthday-field'))[start].lastElementChild.classList.contains('monthday-field_current')) && start < 6) {
                            mm_start = c.currentMonth
                            mm_start_name = c.monthListShort[mm_start - 1]
                        }
                        if (Array.from($(c.calendar + '.days__monthday-field'))[start].lastElementChild.classList.contains('monthday-field_current')) {
                            mm_start = c.currentMonth + 1
                            mm_start_name = c.monthListShort[mm_start - 1]
                        }
                        if ((!Array.from($(c.calendar + '.days__monthday-field'))[start].lastElementChild.classList.contains('monthday-field_current')) && start > 30) {
                            mm_start = c.currentMonth + 2
                            mm_start_name = c.monthListShort[mm_start - 1]
                        }
                    }
                    if (i == end) {
                        $($(c.calendar + '.days__monthday-field-period')[i]).addClass('days__monthday-field-period-end')
                        dd_end = $($(c.calendar + '.days__monthday-field-period')[i]).next().text()
                        if (!(Array.from($(c.calendar + '.days__monthday-field'))[end].lastElementChild.classList.contains('monthday-field_current')) && end < 6) {
                            mm_end = c.currentMonth
                            mm_end_name = c.monthListShort[mm_end - 1]
                        }
                        if (Array.from($(c.calendar + '.days__monthday-field'))[end].lastElementChild.classList.contains('monthday-field_current')) {
                            mm_end = c.currentMonth + 1
                            mm_end_name = c.monthListShort[mm_end - 1]
                        }
                        if ((!Array.from($(c.calendar + '.days__monthday-field'))[end].lastElementChild.classList.contains('monthday-field_current')) && end > 30) {
                            mm_end = c.currentMonth + 2
                            mm_end_name = c.monthListShort[mm_end - 1]
                        }
                    } else {
                        $($(c.calendar + '.days__monthday-field-period')[i]).addClass('days__monthday-field-period-between')
                    }
                }
            }
            if (arr.filter(el => el == true).length < 2) {
                $(c.calendar + '.days__monthday-field-period').removeClass(['days__monthday-field-period-start', 'days__monthday-field-period-end', 'days__monthday-field-period-between'])
            }
            if (dd_start && dd_end) {
                date_start = `${dd_start.length<2 ? "0"+dd_start:dd_start}.${String(mm_start).length<2 ? "0" + mm_start : mm_start}.${c.currentYear}`
                date_end = `${dd_end.length<2 ? "0"+dd_end:dd_end}.${String(mm_end).length<2 ? "0" + mm_end : mm_end}.${c.currentYear}`
                date = `${dd_start.length<2 ? "0"+dd_start:dd_start} ${mm_start_name} - ${dd_end.length<2 ? "0"+dd_end:dd_end} ${mm_end_name}`
                $(c.calendar + ".field-date").val(date)
                $(c.calendar + ".fields__field-start").val(date_start)
                $(c.calendar + ".fields__field-end").val(date_end)
            }

        } else if (c.date_picker == "single") { // выбор одной даты в календаре
            if ((Array.from($(c.calendar + '.days__monthday-field_choosen')).length) <= 1) {
                c.clearPeriod()
                $(this, '.days__monthday-field').toggleClass('days__monthday-field_choosen')
                $('.monthday-field', this).toggleClass('monthday-field_choosen')
            }
            dd = $(c.calendar + ".monthday-field_choosen", this).text()
            if (($(c.calendar + ".monthday-field").get()).indexOf($(c.calendar + ".monthday-field.monthday-field_choosen").get()[0]) < 6 && $(c.calendar + ".monthday-field.monthday-field_choosen").text() > 20) {
                mm = (c.currentMonth)
            } else if (($(c.calendar + ".monthday-field").get()).indexOf($(c.calendar + ".monthday-field.monthday-field_choosen").get()[0]) > 30 && $(c.calendar + ".monthday-field.monthday-field_choosen").text() < 20) {
                mm = (c.currentMonth + 2)
            } else {
                mm = (c.currentMonth + 1)
            }
            yyyy = c.currentYear
            date = `${dd.length<2 ? '0' + dd : dd}.${mm<10 ? '0' + mm : mm}.${yyyy}`
            $(c.calendar + ".field-date").val(date)
        }
    });

    $(c.calendar + '.buttons__button-clear').on('click', function() {
        c.clearPeriod()
    });
}

let calendar = $(".calendar")

calendar.each(el => {
    call(new Calendar("#" + calendar[el].getAttribute("id"), calendar[el].getAttribute("date_picker")))
})