window.popups = []
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    	if(request && request.type == "copy"){
    		console.log(request.text)
    		saveToClipboard(request.text)
    	}else if (request.type === "disapproved" || request.type === "pending") {
        const caseNum = request.caseNum
        const ads = request.ads
        const aid = request.aid
        const description = request.description
        const type = request.type

        chrome.tabs.create({
        	url: "https://www.facebook.com/help/contact/274756693226815"
        }, function(tab) {
          chrome.tabs.onUpdated.addListener(function listener(tabId, changeInfo) {
            if (tabId === tab.id && changeInfo.status == 'complete') {
              chrome.tabs.onUpdated.removeListener(listener)
              chrome.tabs.sendMessage(tabId, {"type":type, "caseNum":caseNum, "ads":ads, "aid":aid, "description":description}, function(res){})
            }
          })
        })
      }else if(request.type === "popup"){
      	const msg = request.msg
        window.popups.push(msg)
      }
  }
)

function saveToClipboard(text) {
    var copyFrom = $('<textarea/>');
    copyFrom.text(text);
    $('body').append(copyFrom);
    copyFrom.select();
    document.execCommand('copy');
    copyFrom.remove();
}
