var ADMIN_CONFIG = {
	"homePage": "mainPage.html",
	"contentSelector": "#contentWrapper"
};
function loadContent() {
	console.log("1");
    var hash = window.location.hash;
    if (hash == "") {
        hash = "#/"+ADMIN_CONFIG.homePage;
    }
    $(ADMIN_CONFIG.contentSelector).load(hash.split("/")[1], function(){
    });
}
$(window).bind('load hashchange', loadContent);