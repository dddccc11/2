// ==UserScript==
// @name раком боком пнх
// @namespace https://www.bestmafia.com/
// @version 1.0
// @description
// @author bog
// @match http://www.mafia-rules.net/*
// @match https://www.mafia-rules.net/*
// @grant none
// @license MIT

// ==/UserScript==

(function watchPlayersQueueBlockClass() {
    const TIME_LIMIT = 37_000;
    let startTime = 0;
    const observer = new MutationObserver((mutations) => {
        for (const m of mutations) {
            const node = m.target.nodeType === 1 ? m.target : m.target.parentElement;
            if (!node) continue;
            onGplChange(node.textContent);
        }
    });

    observer.observe(document.getElementById('gpl_cnt'), {
        subtree: true,
        childList: true,
        characterData: true,
    });

    function onGplChange(value) {
        if (value.split('/')[0] === value.split('/')[1] && gam_state == 'init') {
            console.debug('Задетектил новую игру!');
            startTime = Date.now();
        }
    }
    let clickSmuTImeout = null;
    const observerWhl = new MutationObserver((mutations) => {
        for (const m of mutations) {
            if ((m.target.id == 'whl_t0' || m.target.id == 'whl_t1') && m.target.textContent == 0 && gam_state == 'play') {
                console.debug('Пора сбрасывать комнату по whl!');
                const dt = Date.now() - startTime;
                console.debug('Проверяем старт комнаты', startTime, '; dt', dt);
                if (dt < TIME_LIMIT) {
                    console.debug('Нужно выждать', TIME_LIMIT - dt);
                    if (!clickSmuTImeout) {
                        clickSmuTImeout = setTimeout(() => {
                            console.debug('Выждали, жмякаю');
                            SMU.restart();
                            clickSmuTImeout = null;
                        }, TIME_LIMIT - dt);
                    }
                } else {
                    console.debug('Жму сразу');
                    SMU.restart();
                }
            }
        }
    });
    observerWhl.observe(document.getElementsByClassName('whoIsLife')[0], {
        subtree: true,
        childList: true,
        characterData: true,
    });

    const observerTime = new MutationObserver((mutations) => {
        for (const m of mutations) {
            if (m.target.textContent == 'В городе 1 день37') {
                console.debug('Подходящее время, жмякаю');
                SMU.restart();
            }
        }
    });
    observerTime.observe(document.getElementById('gmv_timer'), {
        subtree: true,
        childList: true,
        characterData: true,
    });
})();
