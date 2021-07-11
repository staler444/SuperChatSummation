chrome.browserAction.onClicked.addListener(onclick);

setInterval(function (){
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) 
    {
        chrome.tabs.sendMessage(tabs[0].id, {zapyt: "jd"});
    });
}, 1000);

function onclick(trashing_1) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
    {
        chrome.tabs.sendMessage(tabs[0].id, {zapyt: "call"}, function(response){
            alert("new memberships = " + response.suby + "  Donations amount = " + response.kasa + " USD");
        });
    });
}