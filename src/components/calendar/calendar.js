function Calendar(year, month) {
    var Dlast = new Date(year, month, 0).getDate(),
        D = new Date(year, month, Dlast),
        DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
        DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
        month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        currentMonth = [D.getMonth()];

    $(document).ready(function() {
        let currentMonth = new Date().getMonth()
        let lastMonthLastDay = new Date(year, currentMonth, 0).getDate()
        let nextMonthFirstDay = new Date(year, currentMonth + 2, 0).getDate()
        let currentMonthLastDay = new Date(year, currentMonth - 1, 0).getDate()

        console.log(currentMonth - 1, currentMonth, currentMonth + 1)
        console.log(month[currentMonth], lastMonthLastDay, currentMonthLastDay, nextMonthFirstDay)

        $('.header__month').text(month[currentMonth])
        $('.header__year').text(new Date().getFullYear())
        Array.from($('.monthday-field').slice(DNfirst-1, DNfirst+Dlast-1)).map(elem => { $(elem).css({'color': 'red'})})
        Array.from($('.monthday-field').slice(0, DNfirst-1)).map(elem => { $(elem).css({'color': 'blue'})})
        Array.from($('.monthday-field').slice(DNfirst+Dlast-1, 42)).map(elem => { $(elem).css({'color': 'blue'})})
        
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
        let lastMonthLastDay = new Date(year, currentMonth - 2, 0).getDate()
        Array.from($('.monthday-field').slice(DNfirst-1, DNfirst+Dlast-1)).map(elem => { $(elem).css({'color': 'red'})})
        Array.from($('.monthday-field').slice(0, DNfirst-1)).map(elem => { $(elem).css({'color': 'blue'})})
        Array.from($('.monthday-field').slice(DNfirst+Dlast-1, 42)).map(elem => { $(elem).css({'color': 'blue'})})
        let count = DNfirst > 0 ? DNfirst - 1 : DNfirst
        //console.log(currentMonth + ' month', DNfirst, Dlast)
        //console.log(0, DNfirst-1)
    
        for (let i = DNfirst - 2; i >= 0; i--) {
            $('.monthday-field')[i].innerText = lastMonthLastDay--
        }
        for (let i = DNfirst + Dlast - 1; i < 42; i++) {
            $('.monthday-field')[i].innerText = i - 31
        }
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