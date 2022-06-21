/** Set the url to open after uninstall */
export function onUninstall() {
  chrome.runtime.onInstalled.addListener(details => {
    if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
      chrome.runtime.setUninstallURL(`https://google.com`)
    }
  })
}
