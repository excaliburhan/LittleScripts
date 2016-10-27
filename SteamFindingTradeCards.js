// ==UserScript==
// @name         Steam Finding Trade Cards
// @namespace    https://github.com/excaliburhan
// @version      0.1
// @description  find steam trade card info
// @author       xiaoping
// @include      http://steamcommunity.com/id/*/inventory
// @include      http://steamcommunity.com/profiles/*/inventory/
// @grant        none
// ==/UserScript==
(function () {
	'use strict';

    var theItem = null;

    function appendBtn(id) {
        if (!id || !theItem) return;
        var badageBtn = theItem.querySelector('.btn_small.btn_grey_white_innerfade');
        var tpl = '<a class="btn_small btn_grey_white_innerfade" href="http://www.steamcardexchange.net/index.php?gamepage-appid-'+ id + '"><span>查看卡牌</span></a>';
        console.log(1);
        badageBtn.insertAdjacentHTML('afterend', tpl);
    }

    function getId() {
        var itemInfos = document.querySelectorAll('.inventory_iteminfo');
        itemInfos.forEach(function(item) {
            if (item.style.display !== 'none' && item.style.opacity) {
                theItem = item;
            }
        });
        if (theItem) {
            var href = theItem.querySelector('.btn_small.btn_grey_white_innerfade').getAttribute('href');
            var idArr = href.split('/');
            var id = idArr[idArr.length - 2];
            appendBtn(id);
        }
    }

    function addBtn(e) {
        var tag = e.target;
        if (tag.classList.contains('inventory_item_link')) {
            setTimeout(getId, 1000);
        }
    }

    document.querySelector('body').addEventListener('click', addBtn, false);
})();
