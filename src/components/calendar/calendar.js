function Calendar() {
    let currentYear = new Date().getFullYear()
    let currentMonth = new Date().getMonth()
    let monthList = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]

    $(document).ready(function() {
        $('.header__month').text(monthList[currentMonth])
        $('.header__year').text(currentYear)

        let lengthCurrentMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
        let lastMonthLastDay = new Date(currentYear, currentMonth, 0).getDate()
        let currentMonthFirstWeekDay = new Date(currentYear, currentMonth, 1).getDay() - 1 >= 0 ? new Date(currentYear, currentMonth, 1).getDay() - 1 : 6

        Array.from($('.monthday-field').slice(currentMonthFirstWeekDay - 1, currentMonthFirstWeekDay + lengthCurrentMonth)).map(elem => { $(elem).css({ 'color': 'rgba(31, 32, 65, 0.5)' }) })
        Array.from($('.monthday-field').slice(0, currentMonthFirstWeekDay)).map(elem => { $(elem).css({ 'color': 'rgba(31, 32, 65, 0.25)' }) })
        Array.from($('.monthday-field').slice(currentMonthFirstWeekDay + lengthCurrentMonth, 42)).map(elem => { $(elem).css({ 'color': 'rgba(31, 32, 65, 0.25)' }) })

        for (let i = currentMonthFirstWeekDay - 1; i >= 0; i--) {
            $('.monthday-field')[i].innerText = lastMonthLastDay--
        }
        let count = currentMonthFirstWeekDay
        for (let i = 1; i <= lengthCurrentMonth; i++) {
            $('.monthday-field')[count].innerText = i
                ++count
        }
        for (let i = lengthCurrentMonth + currentMonthFirstWeekDay, day = 1; i < 42; i++) {
            $('.monthday-field')[i].innerText = day++
        }

        Array.from($('.days__monthday-field').slice(currentMonthFirstWeekDay - 1, currentMonthFirstWeekDay + lengthCurrentMonth)).map(elem => {
            if ($(elem.firstElementChild).text() == new Date().getDate() && !elem.classList.contains('active')) {
                $(elem.firstElementChild).css({ 'color': 'rgba(255, 255, 255, 1)' }) && $(elem).css({ 'background': 'linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%)' })
            }
            if ($(elem.firstElementChild).text() == new Date().getDate() && elem.classList.contains('active')) {
                $(elem.firstElementChild).css({ 'color': 'rgba(255, 255, 255, 1)' }) && $(elem).css({ 'background': 'linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%)' })
            }
        })
    });

    $('.header__arrow-back').click(function() {
        currentMonth == 0 ? currentMonth = 12 : ''
        currentMonth == 12 ? currentYear-- : ''
        currentMonth -= 1
        $('.header__month').text(monthList[currentMonth])
        $('.header__year').text(currentYear)

        let lengthCurrentMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
        let lastMonthLastDay = new Date(currentYear, currentMonth, 0).getDate()
        let currentMonthFirstWeekDay = new Date(currentYear, currentMonth, 1).getDay() - 1 >= 0 ? new Date(currentYear, currentMonth, 1).getDay() - 1 : 6

        Array.from($('.monthday-field').slice(currentMonthFirstWeekDay, currentMonthFirstWeekDay + lengthCurrentMonth)).map(elem => { $(elem).css({ 'color': 'rgba(31, 32, 65, 0.5)' }) })
        Array.from($('.monthday-field').slice(0, currentMonthFirstWeekDay)).map(elem => { $(elem).css({ 'color': 'rgba(31, 32, 65, 0.25)' }) })
        Array.from($('.monthday-field').slice(currentMonthFirstWeekDay + lengthCurrentMonth, 42)).map(elem => { $(elem).css({ 'color': 'rgba(31, 32, 65, 0.25)' }) })

        for (let i = currentMonthFirstWeekDay - 1; i >= 0; i--) {
            $('.monthday-field')[i].innerText = lastMonthLastDay--
        }
        let count = currentMonthFirstWeekDay
        for (let i = 1; i <= lengthCurrentMonth; i++) {
            $('.monthday-field')[count].innerText = i
                ++count
        }
        for (let i = lengthCurrentMonth + currentMonthFirstWeekDay, day = 1; i < 42; i++) {
            $('.monthday-field')[i].innerText = day++
        }
        Array.from($('.days__monthday-field').slice(currentMonthFirstWeekDay - 1, currentMonthFirstWeekDay + lengthCurrentMonth)).map(elem => {
            currentMonth !== new Date().getMonth() ?
                $(elem).css({ 'background': 'white' }) : ''
        })
        Array.from($('.days__monthday-field').slice(currentMonthFirstWeekDay - 1, currentMonthFirstWeekDay + lengthCurrentMonth)).map(elem => {
            currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() ?
                $($('.days__monthday-field')[new Date().getDate() + 1]).css({ 'background': 'linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%' }) &&
                $($('.monthday-field')[new Date().getDate() + 1]).css({ 'color': 'white' }) :
                $(elem).css({ 'background': 'white' })
        })
    });

    $('.header__arrow-forward').click(function() {
        currentMonth == 11 ? currentMonth = -1 : ''
        currentMonth == -1 ? currentYear++ : ''
        currentMonth += 1

        $('.header__month').text(monthList[currentMonth])
        $('.header__year').text(currentYear)

        let lengthCurrentMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
        let lastMonthLastDay = new Date(currentYear, currentMonth, 0).getDate()
        let currentMonthFirstWeekDay = new Date(currentYear, currentMonth, 1).getDay() - 1 >= 0 ? new Date(currentYear, currentMonth, 1).getDay() - 1 : 6

        Array.from($('.monthday-field').slice(currentMonthFirstWeekDay, currentMonthFirstWeekDay + lengthCurrentMonth)).map(elem => { $(elem).css({ 'color': 'rgba(31, 32, 65, 0.5)' }) })
        Array.from($('.monthday-field').slice(0, currentMonthFirstWeekDay)).map(elem => { $(elem).css({ 'color': 'rgba(31, 32, 65, 0.25)' }) })
        Array.from($('.monthday-field').slice(currentMonthFirstWeekDay + lengthCurrentMonth, 42)).map(elem => { $(elem).css({ 'color': 'rgba(31, 32, 65, 0.25)' }) })

        for (let i = currentMonthFirstWeekDay - 1; i >= 0; i--) {
            $('.monthday-field')[i].innerText = lastMonthLastDay--
        }
        let count = currentMonthFirstWeekDay
        for (let i = 1; i <= lengthCurrentMonth; i++) {
            $('.monthday-field')[count].innerText = i
                ++count
        }
        for (let i = lengthCurrentMonth + currentMonthFirstWeekDay, day = 1; i < 42; i++) {
            $('.monthday-field')[i].innerText = day++
        }
        Array.from($('.days__monthday-field').slice(currentMonthFirstWeekDay - 1, currentMonthFirstWeekDay + lengthCurrentMonth)).map(elem => {
            currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() ?
                $($('.days__monthday-field')[new Date().getDate() + 1]).css({ 'background': 'linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%' }) &&
                $($('.monthday-field')[new Date().getDate() + 1]).css({ 'color': 'white' }) :
                $(elem).css({ 'background': 'white' })
        })
    });

    $('.days__monthday-field').on('mouseover', function() {
        $(this, '.days__monthday-field').css({ 'background': 'linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%)' }) &&
            $('.monthday-field', this).css({ 'color': 'white' })
    });

    $('.days__monthday-field').on('mouseout', function() {
        let start = new Date($('.header__year').text(), monthList.indexOf($('.header__month').text())).getDay() - 1 >= 0 ?
            new Date($('.header__year').text(), monthList.indexOf($('.header__month').text())).getDay() - 1 : 6
        let end = start + new Date($('.header__year').text(), monthList.indexOf($('.header__month').text()) + 1, 0).getDate()
        let normal = 'rgba(31, 32, 65, 0.5)'
        let light = 'rgba(31, 32, 65, 0.25)'

        if (!this.classList.contains('active')) {
            $(this, '.days__monthday-field').css({ 'background': 'white' }) &&
                $('.monthday-field', this).css({ 'color': light })

            Array.from($('.monthday-field').slice(start, end)).map(elem => {
                $(elem).css({ 'color': elem.classList.contains('active') ? 'white' : normal })
            })

            Array.from($('.monthday-field')).map(elem => {
                currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() ?
                    $($('.days__monthday-field')[new Date().getDate() + 1]).css({ 'background': 'linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%' }) &&
                    $($('.monthday-field')[new Date().getDate() + 1]).css({ 'color': 'white' }) : ''
            })
        }
    });

    $('.days__monthday-field').on('click', function() {
        $(this).toggleClass('active')
        $('.monthday-field', this).toggleClass('active')
    });
}

Calendar()