

chrome.webRequest.onBeforeRequest.addListener(
function(details) {
    return {cancel: true}; 
}, { urls: ["*://*.facebook.com/ajax/mercury/change_read_status.php/*"] }, ["blocking"]);



