// ==UserScript==
// @name         Steam Queue AutoClick
// @namespace    https://github.com/excaliburhan/LittleScripts
// @version      0.1
// @description  autoClick steam queue
// @author       xiaoping
// @include      http*://store.steampowered.com/app/*
// @grant        none
// ==/UserScript==
(function () {
	'use strict';

    var refreshQueueBtn = document.getElementById('refresh_queue_btn');
    if (refreshQueueBtn !== null) refreshQueueBtn.children[0].click();

    var nextInQueueForm = document.getElementById('next_in_queue_form');
    if (nextInQueueForm !== null) nextInQueueForm.submit();
})();
