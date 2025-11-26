// ==UserScript==
// @name жуки соло
// @namespace https://www.bestmafia.com/
// @version 1.0
// @description
// @author bog
// @match http://www.mafia-rules.net/*
// @match https://www.mafia-rules.net/*
// @grant none
// @license MIT

// ==/UserScript==

const inactive = ['Гражданин', 'Медработник', 'Сержант'];
setInterval(function() {
    if (((parseInt($('#gxt_101').find('.count').text()) < 5) || ($('#gxt_101').find('.count').text()) == '')) {
        _WND_proc('extras', 'buy', {id: 101}, event);
    }
    if (gam_state == 'play') {
        if (!inactive.includes(document.getElementsByClassName("ico my")[0].title)) {
            if (gam_data.v_cycle > 0 && !gam_data.v_mode && gam_data.v_time <= 12) {
                _GM_action('', 'ext_use', [101, my_id], event);
            }
        }
    }
}, 10000);
