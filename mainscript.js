// sending messages 
chrome.runtime.sendMessage('get-tabid', (response) => {

	tabID = response;
	


	if (window.location.href == "https://www.youtube.com/") {

		location.href="https://www.youtube.com/feed/";

	} 

	if (window.location.href.indexOf("/shorts") > -1 ) {

		location.href="https://www.youtube.com/feed/";

	}

	if (window.location.href.indexOf("/user") > -1 ) {

		location.href="https://www.youtube.com/feed/";

	}

	if (window.location.href.indexOf("/channel/") > -1 ) {

		location.href="https://www.youtube.com/feed/";

	}

	if (window.location.href.indexOf("/gaming") > -1 ) {

		location.href="https://www.youtube.com/feed/";

	}

	if (window.location.href.indexOf("/@") > -1 ) {

		location.href="https://www.youtube.com/feed/";

	}

	if (window.location.href.indexOf("/") > -1 ) {

		
	

	}

	if (window.location.href.indexOf("/watch") > -1 ) {

	

		
		
		document.querySelector("#container #center").style.display = "none";
		document.querySelector("#container #end").style.display = "none";

		document.getElementById("top-row").style.display = "none";
		document.getElementById("bottom-row").style.display = "none";
		document.getElementById("ticket-shelf").style.display = "none";
		document.getElementById("merch-shelf").style.display = "none";
		document.getElementById("always-shown").style.display = "none";

		document.getElementById("item-list").style.display = "none";
		
		document.getElementById("comments").style.display = "none";
		
	}



});


	
	