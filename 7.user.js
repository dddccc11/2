// ==UserScript==
// @name автовход с эликами
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
var mir = ['Гражданин', 'Комиссар', 'Сержант', 'Доктор', 'Медработник', 'Вор', 'Стерва', 'Свидетель', 'Дед Мороз'];
var bomb = false;
setInterval(function() {
    switch (gam_state) {
        case '':
            var create = $('#gml_list').find('span');
            for (var i = 0; i < create.length; i++) {
                if (szd.indexOf($(create[i]).text()) != -1) {
                    _GM_action('gml', 'join', parseInt($(create[i]).closest('li').attr('id').replace(/\D+/g, "")), event);
                    break;
                }
            }
            break;
        case 'play':
            var myRole = document.getElementsByClassName("ico my")[0].title;
            var aliveMirCount = document.querySelector('.whoIsLife .vs').children[0].textContent;
            if (!bomb && mir.includes(myRole) && aliveMirCount == 1 && gam_data.v_mode) {
                _GM_action('', 'ext_act', '198', event);
                bomb = true;
            }
            if (pla_data.dead && (!mir.includes(myRole) || aliveMirCount > 0)) { _DLG('exit', 2); }
            break;
        case 'fin':
            _DLG('exit', 2);
            break;
        case 'init':
            if (bomb) bomb = false;
            break;
    }
}, 1000);
