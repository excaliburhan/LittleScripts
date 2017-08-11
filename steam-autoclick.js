// ==UserScript==
// @name        Steam Queue AutoClick
// @namespace   https://github.com/excaliburhan/tampermonkey-scripts
// @description autoclick steam queue
// @author      xiaoping
// @include     http*://store.steampowered.com/app/*
// @icon        http://store.steampowered.com/favicon.ico
// @version     20170811.01
// @run-at      document-end
// @grant       none
// ==/UserScript==

(function () {
  'use strict';

  var refreshQueueBtn = document.getElementById('refresh_queue_btn');
  if (refreshQueueBtn !== null) refreshQueueBtn.children[0].click();

  var nextInQueueForm = document.getElementById('next_in_queue_form');
  if (nextInQueueForm !== null) nextInQueueForm.submit();
})();
