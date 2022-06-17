import './cards.sass'
import '../../components/search-room-card/search-room-card.sass'
import '../../components/booking-room-card/booking-room-card.sass'
import '../../components/calendar/calendar.sass'

import '../../components/search-room-card/search-room-card.js'
import '../../components/booking-room-card/booking-room-card.js'
import '../../components/calendar/calendar.js'

$(location).attr('pathname') == '/cards.html' ? $('body').css('background-color', '#E5E5E5') : ''