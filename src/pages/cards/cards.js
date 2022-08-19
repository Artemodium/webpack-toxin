import './cards.sass'
import '../../components/search-room-card/search-room-card.sass'
import '../../components/booking-room-card/booking-room-card.sass'
import '../../components/calendar-class/calendar-class.sass'
import '../../components/registration-form/registration-form.sass'
import '../../components/login-form/login-form.sass'
import '../../components/suit-preview-card/suit-preview-card.sass'

import '../../components/search-room-card/search-room-card.js'
import '../../components/booking-room-card/booking-room-card.js'
import '../../components/calendar-class/calendar-class.js'
import '../../components/registration-form/registration-form.js'
import '../../components/login-form/login-form.js'
import '../../components/suit-preview-card/suit-preview-card.js'

$(location).attr('pathname') == '/cards.html' ? $('body').css('background-color', '#E5E5E5') : ''

jQuery(function($) {
    $(document).mouseup(function(e) {
        var cont = $(".date-selector");
        if (!cont.is(e.target) &&
            cont.has(e.target).length === 0) {
            cont.hide();
        }
    });
});