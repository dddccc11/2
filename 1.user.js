// ==UserScript==
// @name обновление страницы
// @namespace https://www.bestmafia.com/
// @version 1.0
// @description 
// @author bog
// @match http://www.mafia-rules.net/*
// @match https://www.mafia-rules.net/*
// @grant none
// @license MIT
// ==/UserScript==

const textLog = [];
let prevCount = 0, prevMode = gam_data.v_mode;
setInterval(() => {
    if (gam_state !== 'play') return;
    if (prevMode === 1 && gam_data.v_mode === 0 && gam_data.v_cycle > 0) textLog.length = 0;
    prevMode = gam_data.v_mode;
    const text = `${my_nick} - ${document.getElementsByClassName("ico my")[0].title} был убит при помощи таланта «Передаю приветы»`;
    let count = 0, pos = document.body.innerText.indexOf(text);
    while (pos !== -1) { count++; pos = document.body.innerText.indexOf(text, pos + text.length); }
    if (count > prevCount && gam_data.v_mode === 0 && gam_data.v_cycle > 0 && !textLog.includes(text)) {
        textLog.push(text);
    }
    if (gam_data.v_mode === 0 && gam_data.v_cycle > 0 && textLog.includes(text) && !pla_data.dead && gam_data.v_time > 10 && pla_data.act > 0) {
        location.reload();
    }
    prevCount = count;
}, 3000);
