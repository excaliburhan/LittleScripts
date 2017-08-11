// ==UserScript==
// @name        Iconfinder Download
// @namespace   http://tampermonkey.net/
// @description download iconfinder iconsets
// @author      xiaoping
// @include     https://www.iconfinder.com/*
// @icon        https://cdn0.iconfinder.com/static/img/favicons/favicon-32x32.png?87b2a5c3aac4b6db
// @version     20170811.01
// @run-at      document-end
// @require     https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js
// @grant       GM_xmlhttpRequest
// @grant       GM_getValue
// @grant       GM_setValue
// ==/UserScript==

// iframe下载
function downloadFile (url) {
  try {
    var elemIF = document.createElement("iframe");
    elemIF.src = url;
    elemIF.style.display = "none";
    document.body.appendChild(elemIF);
  } catch (e) {
    console.log(e);
  }
}

// 添加下载按钮
$('.text-right.text-muted').prepend('<a href="javascript:;" class="download-all" data-type="svg">下载SVG Icons</a>');
$('.text-right.text-muted').prepend('<a href="javascript:;" class="download-all" data-type="png">下载PNG Icons</a>');

// 点击下载按钮
$('.download-all').on('click', function () {
  var type = $(this).attr('data-type');
  $('.downloadlink.btn.btn-small[data-format="' + type + '"]').each(function (index, item) {
    const href = $(item).attr('href');
    // 做容错
    if (href.indexOf('/download/' + type) > -1) {
      downloadFile(href);
    }
  });
});
