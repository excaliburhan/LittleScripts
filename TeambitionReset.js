// ==UserScript==
// @name         Teambition Reset
// @namespace    https://github.com/excaliburhan/LittleScripts
// @version      0.2
// @description  reset teambition
// @author       xiaoping
// @include      https://www.teambition.com/*
// @grant        none
// ==/UserScript==

(function() {
  function showHiddenAct(e) {
    let task = e.target.closest('.task') || e.target.closest('.message-view')
    let timer
    if (!task) return
    function clickHiddenBtn() {
      timer = setTimeout(function() {
        let hiddenBtn = document.querySelector('.activity-early-hidden')
        if (hiddenBtn) {
          hiddenBtn.click()
          clearTimeout(timer)
        } else {
          clickHiddenBtn()
        }
      }, 200)
    }
    clickHiddenBtn()
  }

  // set pop action
  document.body.addEventListener('click', showHiddenAct, false)

  // set pop style
  let css = '.object-modal-view.fixed { margin: 0; width: 70%; left: 15% }'
  let head = document.head || document.getElementsByTagName('head')[0]
  let style = document.createElement('style')

  style.type = 'text/css'
  style.appendChild(document.createTextNode(css))
  head.appendChild(style)

})()
