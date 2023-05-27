// src-bex/my-content-script.js

// Hooks added here have a bridge allowing communication between the BEX Content Script and the Quasar Application.
// More info: https://quasar.dev/quasar-cli/developing-browser-extensions/content-hooks
import { bexContent } from 'quasar/wrappers'

const iFrame = document.createElement('iframe');

/**
 * The code below will get everything going. Initialize the iFrame with defaults and add it to the page.
 * @type {string}
 */
iFrame.id = 'bex-app-iframe'
iFrame.width = '100%'
iFrame.height = '100%'

// Assign some styling so it looks seamless
Object.assign(iFrame.style, {
  position: 'fixed',
  top: '50%',
  right: '0',
  bottom: '0',
  left: '0',
  border: '0',
  zIndex: '9999999', // Make sure it's on top
  overflow: 'visible',
  transform: 'translateY(-50%)',
  pointerEvent: 'none'
})

;(function () {
  const w = document.documentElement.clientWidth;
  const h = document.documentElement.clientHeight;
  // When the page loads, insert our browser extension app.
  iFrame.src = chrome.runtime.getURL('www/index.html#/main')
  // iFrame.style.width = w + 'px';
  // iFrame.style.height = h + 'px';
  document.body.prepend(iFrame)
})()

export default bexContent((bridge) => {
  /**
   * When the drawer is toggled set the iFrame height to take the whole page.
   * Reset when the drawer is closed.
   */
  bridge.on('wb.drawer.toggle', ({ data, respond }) => {
    if (data.open) {
      setIFrameHeight('100%')
    } else {
      resetIFrameHeight()
    }
    respond()
  })
})
