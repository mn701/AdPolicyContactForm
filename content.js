chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if(request.type === "disapproved"){
		const caseNum = request.caseNum
		const ads = request.ads
		const description = request.description
		const agentName = request.agentName
  	// $("#317701148281405").val(agentName)
  	if(caseNum){
    		$("#1417073758607475").val(caseNum)
  	}
		$("#105707632890694").val("Singapore, Singapore")
		$('input[name=gcrclient]').val(['No'])
		$('label[for="617944538579149.0"]').click()
  	$('input[name=Account_category]').val(['GSO'])
  	$('input[name=IsPolitical]').val(['No'])
		$('label[for="617944538579149.0"]').click()
  	$('input[name=ReqType_NotPolitical]').val(['Ad Disapproval'])
		$('label[for="1616059722049510.1"]').click()

		$('input[name=Field1496973637295144]').val(['yes'])
		$('label[for="1496973637295144.0"]').click()

  	// $("#224948714266660").val(ads[0])
  	// $("#296084320450771").val(description)
  	// $('label[for="1496973637295144.0"]').click()

  	// const btnAdd = document.getElementsByClassName("_271k _271m _1qjd _7tvm _7tv2 _7tv4")[0]
  	// const ad_rows = ads.length - 5
  	// for (let i = 0; i < ad_rows; i++) {
  	//   btnAdd.click()
  	// }
  	ads.forEach((item, index) => {
    			$('._58al').eq(index).val(item)
  	})
  	// const btnConfirm = document.getElementsByClassName("_271k _271m _1qjd _7tvm _7tv2 _7tv4")[1]
  	// btnConfirm.click()
  	$('#u_0_8').click()
  	sendResponse("hi")
	}else if(request.type === "pending"){
		const caseNum = request.caseNum
		const ad = request.ad
		const description = request.description
		if(caseNum){
	    		$("#337290956413644").val(caseNum)
	  	}
		$("#486556404885036").val(ad)
		$("#296084320450771").val(description)
		$('#u_0_5').click()
	}else if(request.type == "submitted"){
		let msg = $("._t").text() ?  $("._t").text() : ""
		msg = msg.replace("Okay", "")
		msg = msg.replace("OK", "");
		//msg += $("div[class='pam _13']").text() ? $("div[class='pam _13']").text() : ""
		chrome.runtime.sendMessage({
			type:"popup", msg:msg
	    	})
	}
})
