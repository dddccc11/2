// ==UserScript==
// @name автовход простой
// @namespace https://www.bestmafia.com/
// @version 1.0
// @description
// @author bog
// @match http://www.mafia-rules.net/*
// @match https://www.mafia-rules.net/*
// @grant none
// @license MIT

// ==/UserScript==

var szd = ['Дон Карлeоне777','hugging bunny','breathing','Not Hot','Tоm','Ariella'];
setInterval(function() {
    switch (gam_state) {
        case '':
            var create = $('#gml_list').find('span');
            for (var i = 0; i < create.length; i++) {
                if (szd.indexOf($(create[i]).text()) != -1) {
                    _GM_action('gml','join',parseInt($(create[i]).closest('li').attr('id').replace(/\D+/g,"")),event);
                    break;
                }
            }
        case 'play':
            if (pla_data.dead) { _DLG('exit', 2); }
            break;
        case 'fin':
            _DLG('exit', 2);
            break;
    }
}, 1000);
