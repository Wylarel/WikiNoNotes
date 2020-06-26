let root = document.documentElement;
var bodyContent = document.getElementById("bodyContent");
update_settings();

function update_settings() {
    chrome.storage.sync.get("wikis_notes", function(data) {
        switch (data.wikis_notes) {
            case '0':
                root.style.setProperty('--wikis_selectable', "initial");
                root.style.setProperty('--wikis_hidden', "initial");
                break;
            case '1':
                root.style.setProperty('--wikis_selectable', "none");
                root.style.setProperty('--wikis_hidden', "initial");
                break;
            case '2':
                root.style.setProperty('--wikis_selectable', "none");
                root.style.setProperty('--wikis_hidden', "none");
                break;
        }
    });
}