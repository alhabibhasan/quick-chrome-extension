window.onload = () => {
    if (EXT_ENABLED) {
        alert('our extension is enabled, we can change make changes to the DOM')
    } else {
        alert('our extension is disabled, we cannot change make changes to the DOM')
    }
}

let EXT_ENABLED = false

chrome.storage.local.get(['enabled'], data => {
    if (data.enabled) {
        EXT_ENABLED = true
    }
})

chrome.storage.onChanged.addListener((changes) => {
    for (let key in changes) {
        let storageChange = changes[key]
        if (key === 'enabled' && storageChange.newValue === true) {
            EXT_ENABLED = true
        } else if (key === 'enabled' && storageChange.newValue === false) {
            EXT_ENABLED = false
        }
    }
})