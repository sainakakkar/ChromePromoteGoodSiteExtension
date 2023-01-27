//this script is written by Saina Kakkar and it looks into browser history against the current tab

chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {

    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){

        //chrome extension executing script
        tabID = tabs[0].id;
        chrome.scripting.executeScript({target: {tabId: tabID},files: ["mainscript.js"]});
        chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
          if (message === 'get-tabid') {
            sendResponse(tabID);
          }
        });
        
    });

});