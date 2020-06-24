window.onload = () => {
    let enableButton = document.getElementById('enable')
    let enabled = false

    const getAndSetExtensionEnabled = () => {
        chrome.storage.local.get('enabled', data => {
            if (!data.enabled) {
                enabled = false
                enableButton.textContent = 'Enable'
            } else {
                enabled = true
                enableButton.textContent = 'Disable'
            }
        })
    }

    getAndSetExtensionEnabled()

    enableButton.onclick = () => {
        chrome.storage.local.set({'enabled': !enabled})
        getAndSetExtensionEnabled()
    }
}