// ==UserScript==
// @name бомбы
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
    if ((gam_state == 'play') && (!($('#pp_fin').length || pla_data['dead'])) && (!($("#gxt_135").is(".disabled")))) {
        _GM_action('', 'ext_act', '135', event);
    }
}, 1000);
