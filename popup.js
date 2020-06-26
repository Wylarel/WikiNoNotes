document.addEventListener('DOMContentLoaded', function() {
	var sliders = document.getElementsByClassName("slider");
	var names = [];

	for (var i = sliders.length - 1; i >= 0; i--) {
		names[i] = sliders[i].id;
	}

    chrome.storage.sync.get(names, function(data) {
    	for (var i = sliders.length - 1; i >= 0; i--) {
    		sliders[i].value = data[names[i]];
            chrome.browserAction.setIcon({path: "icons/" + sliders[i].value + ".png"});
    	}
    });
    sliders[0].oninput = function() {
        chrome.storage.sync.set({"wikis_notes": this.value});
        chrome.tabs.executeScript({code: 'update_settings();'});
        chrome.browserAction.setIcon({path: "icons/" + this.value + ".png"});
    }
});