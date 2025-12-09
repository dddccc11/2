// ==UserScript==
// @name жетоны на опыт
// @namespace https://www.bestmafia.com/
// @version 1.0
// @description
// @author bog
// @match http://www.mafia-rules.net/*
// @match https://www.mafia-rules.net/*
// @grant none
// @license MIT

// ==/UserScript==

setInterval(function() {
    if (gam_state == 'play') {
        if ($('#gxt_120').find('.count').text() != '' && !($("#gxt_120").is(".disabled"))) {
            _GM_action('', 'ext_act', '120', event);
        }
        if ($('#gxt_191').find('.count').text() != '' && !($("#gxt_191").is(".disabled"))) {
            _GM_action('', 'ext_act', '191', event);
        }
    }
}, 2000);
