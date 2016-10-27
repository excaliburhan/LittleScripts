// ==UserScript==
// @name         Teambition Style Reset
// @namespace    https://github.com/excaliburhan/LittleScripts
// @version      0.1
// @description  reset teambition style
// @author       xiaoping
// @include      https://www.teambition.com/*
// @grant        none
// ==/UserScript==
(function () {
	'use strict';

	var css = '.object-modal-view.fixed { margin: 0; width: 70%; left: 15% }';
	var head = document.head || document.getElementsByTagName('head')[0];
	var style = document.createElement('style');

	style.type = 'text/css';
	style.appendChild(document.createTextNode(css));
	head.appendChild(style);
})();
