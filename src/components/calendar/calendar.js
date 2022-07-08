function Calendar() {
    let currentYear = new Date().getFullYear()
    let currentMonth = new Date().getMonth()
    let monthList = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]

    function getYear() {
        return new Date().getFullYear()
    }

    function getMonth() {
        return new Date().getMonth()
    }

    function getMonthName() {
        return monthList[currentMonth]
    }

    function getLengthCurrentMonth(currentYear, currentMonth) {
        return new Date(currentYear, currentMonth + 1, 0).getDate()
    }

    function getMonthLastDay(currentYear, currentMonth) {
        return new Date(currentYear, currentMonth, 0).getDate()
    }

    function getCurrentMonthFirstWeekDay(currentYear, currentMonth) {
        return new Date(currentYear, currentMonth, 1).getDay() - 1 >= 0 ? new Date(currentYear, currentMonth, 1).getDay() - 1 : 6
    }

    function displayDayToday(currentMonthFirstWeekDay, lengthCurrentMonth) { // отметить сегодняшний день
        Array.from($('.days__monthday-field').slice(currentMonthFirstWeekDay, currentMonthFirstWeekDay + lengthCurrentMonth)).map(elem => {
            currentMonth === getMonth() && $($(elem.lastElementChild)).text() == new Date().getDate() && currentYear == getYear() ?
                $(elem).addClass('days__monthday-field_today') && $($(elem.lastElementChild)).addClass('monthday-field_today') : ''
        })
    }

    function highlightCurrentMonthDays(currentMonthFirstWeekDay, lengthCurrentMonth) { // выделить дни текущего месяца
        Array.from($('.monthday-field').slice(currentMonthFirstWeekDay, currentMonthFirstWeekDay + lengthCurrentMonth)).map(elem => {
            $(elem).addClass('monthday-field_current')
        })
    }

    function prepareAnotherMonth() { // удалить все классы перед отрисовкой другого месяца
        $('.monthday-field').removeClass('monthday-field_current')
        $('.days__monthday-field').removeClass('monthday-field_current')
        $('.monthday-field').removeClass('monthday-field_today')
        $('.days__monthday-field').removeClass('days__monthday-field_today')
    }

    function clearPeriod() {
        $('.days__monthday-field-period').removeClass(['days__monthday-field-period-start', 'days__monthday-field-period-end', 'days__monthday-field-period-between'])
        $('.days__monthday-field').removeClass(['days__monthday-field_choosen'])
        $('.monthday-field').removeClass(['monthday-field_choosen'])
    }

    function displayDays(currentMonthFirstWeekDay, lastMonthLastDay, lengthCurrentMonth) { //расчитать календарь на текущий месяц
        for (let i = currentMonthFirstWeekDay - 1; i >= 0; i--) { //дни предыдущего месяца
            $('.monthday-field')[i].innerText = lastMonthLastDay--
        }
        let count = currentMonthFirstWeekDay
        for (let i = 1; i <= lengthCurrentMonth; i++) { //дни текущего месяца
            $('.monthday-field')[count].innerText = i
                ++count
        }
        for (let i = lengthCurrentMonth + currentMonthFirstWeekDay, day = 1; i < 42; i++) { //дни следующего месяца
            $('.monthday-field')[i].innerText = day++
        }
    }

    $(document).ready(function() {
        currentMonth = getMonth()
        year = getYear()
        $('.header__month').text(getMonthName(currentMonth))
        $('.header__year').text(getYear())

        let currentMonthFirstWeekDay = getCurrentMonthFirstWeekDay(currentYear, currentMonth)
        let lastMonthLastDay = getMonthLastDay(currentYear, currentMonth)
        let lengthCurrentMonth = getLengthCurrentMonth(currentYear, currentMonth)

        displayDays(currentMonthFirstWeekDay, lastMonthLastDay, lengthCurrentMonth)
        highlightCurrentMonthDays(currentMonthFirstWeekDay, lengthCurrentMonth)
        displayDayToday(currentMonthFirstWeekDay, lengthCurrentMonth)
    });

    $('.header__arrow-back').click(function() {
        currentMonth == 0 ? currentMonth = 12 : ''
        currentMonth == 12 ? currentYear-- : ''
        currentMonth -= 1
        $('.header__month').text(monthList[currentMonth])
        $('.header__year').text(currentYear)

        let currentMonthFirstWeekDay = getCurrentMonthFirstWeekDay(currentYear, currentMonth)
        let lastMonthLastDay = getMonthLastDay(currentYear, currentMonth)
        let lengthCurrentMonth = getLengthCurrentMonth(currentYear, currentMonth)

        prepareAnotherMonth()
        clearPeriod()
        displayDays(currentMonthFirstWeekDay, lastMonthLastDay, lengthCurrentMonth)
        highlightCurrentMonthDays(currentMonthFirstWeekDay, lengthCurrentMonth)
        displayDayToday(currentMonthFirstWeekDay, lengthCurrentMonth)
    });

    $('.header__arrow-forward').click(function() {
        currentMonth == 11 ? currentMonth = -1 : ''
        currentMonth == -1 ? currentYear++ : ''
        currentMonth += 1
        $('.header__month').text(monthList[currentMonth])
        $('.header__year').text(currentYear)

        let currentMonthFirstWeekDay = getCurrentMonthFirstWeekDay(currentYear, currentMonth)
        let lastMonthLastDay = getMonthLastDay(currentYear, currentMonth)
        let lengthCurrentMonth = getLengthCurrentMonth(currentYear, currentMonth)

        prepareAnotherMonth()
        clearPeriod()
        displayDays(currentMonthFirstWeekDay, lastMonthLastDay, lengthCurrentMonth)
        highlightCurrentMonthDays(currentMonthFirstWeekDay, lengthCurrentMonth)
        displayDayToday(currentMonthFirstWeekDay, lengthCurrentMonth)
    });

    $('.days__monthday-field').on('mouseover', function() {
        $(this, '.days__monthday-field').addClass('days__monthday-field_hovered')
        $('.monthday-field', this).addClass('monthday-field_hovered')
    });

    $('.days__monthday-field').on('mouseout', function() {
        $(this, '.days__monthday-field').removeClass('days__monthday-field_hovered')
        $('.monthday-field', this).removeClass('monthday-field_hovered')
    })

    $('.days__monthday-field').on('click', function() {
        if ((Array.from($('.days__monthday-field_choosen')).length) < 3) {
            $(this, '.days__monthday-field').toggleClass('days__monthday-field_choosen')
            $('.monthday-field', this).toggleClass('monthday-field_choosen')
        }
        if ((Array.from($('.days__monthday-field_choosen')).length) > 2) {
            $(this, '.days__monthday-field').removeClass('days__monthday-field_choosen')
            $('.monthday-field', this).removeClass('monthday-field_choosen')
        }

        arr = Array.from($('.days__monthday-field')).map(el => el.classList.contains('days__monthday-field_choosen'))
        start = arr.indexOf(true)
        end = arr.lastIndexOf(true)
        if (start != end) {
            for (let i = start; i <= end; i++) {
                if (i == start) {
                    $($('.days__monthday-field-period')[i]).addClass('days__monthday-field-period-start')
                }
                if (i == end) {
                    $($('.days__monthday-field-period')[i]).addClass('days__monthday-field-period-end')
                } else {
                    $($('.days__monthday-field-period')[i]).addClass('days__monthday-field-period-between')
                }
            }
        }
        if (start == end) {
            $('.days__monthday-field-period').removeClass(['days__monthday-field-period-start', 'days__monthday-field-period-end', 'days__monthday-field-period-between'])
        }
    });

    $('.buttons__button-clear').on('click', function() {
        clearPeriod()
    });
}
if ($(location).attr('pathname') == '/cards.html') {
    Calendar()
}