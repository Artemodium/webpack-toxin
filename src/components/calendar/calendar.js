function Calendar(year, month) {
    var Dlast = new Date(year, month + 1, 0).getDate(),
        D = new Date(year, month, Dlast),
        DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
        DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
        calendar = $('.days__monthday'),
        month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    currentMonth = [D.getMonth()]

    $(document).ready(function() {
        $('.header__month').text(month[currentMonth])
        $('.header__year').text(D.getFullYear())
        let lastMonthLastDay = new Date(year, currentMonth - 2, 0).getDate()
        for (let i = DNfirst - 2; i >= 0; i--) {
            $('.monthday-field')[i].innerText = lastMonthLastDay--
        }
        for (let i = DNfirst + Dlast - 1; i < 42; i++) {
            $('.monthday-field')[i].innerText = i - 31
        }
        let count = DNfirst - 1
        for (let i = 1; i <= Dlast; i++) {
            $('.monthday-field')[count].innerText = i
                ++count
        }
    });

    $('.header__arrow-back').click(function() {
        $('.header__month').text(month[--currentMonth])
        currentMonth < 1 ? currentMonth = 12 : ''
        Dlast = new Date(year, currentMonth + 1, 0).getDate()
        D = new Date(year, currentMonth, Dlast)
        DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay()
        DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay()
        let count = DNfirst > 0 ? DNfirst - 1 : DNfirst
        for (let i = 1; i <= Dlast; i++) {
            $('.monthday-field')[count].innerText = i
                ++count
        }
    })

    $('.header__arrow-forward').click(function() {
        currentMonth >= 11 ? currentMonth = -1 : ''
        $('.header__month').text(month[++currentMonth])
        Dlast = new Date(year, currentMonth + 1, 0).getDate()
        D = new Date(year, currentMonth, Dlast)
        DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay()
        DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay()
        let count = DNfirst > 0 ? DNfirst - 1 : DNfirst
        for (let i = 1; i <= Dlast; i++) {
            $('.monthday-field')[count].innerText = i
                ++count
        }
    })
}

Calendar(new Date().getFullYear(), new Date().getMonth())