var mapCanvas = $("#map-canvas");
var topBar = $("#top-bar");
if (mapCanvas != null && topBar != null) {
	var newheight = window.innerHeight - topBar.height() + "px";
	mapCanvas.height(newheight);
}

// toggle favorite button
$("button.save-venue").click(function () {
		$(this).toggleClass("checked");
		if ($(this).hasClass("checked"))
			$(this).text("In Favorites");
		else
			$(this).text("Add to Favorites");
});
$("button.save-venue").hover(
	function () {
		$(this).addClass("hover");
		if($(this).hasClass("checked"))
				$(this).text("Remove");
	},
	function() {
		$(this).removeClass("hover");
		if ($(this).hasClass("checked"))
				$(this).text("In Favorites");
	}
);

function tabSwitch(new_tab, new_content) {  
    document.getElementById('content_1').style.display = 'none';  
    document.getElementById('content_2').style.display = 'none';  
    document.getElementById('content_3').style.display = 'none';          
    document.getElementById(new_content).style.display = 'block';     
      
  
    document.getElementById('tab_1').className = '';  
    document.getElementById('tab_2').className = '';  
    document.getElementById('tab_3').className = '';          
    document.getElementById(new_tab).className = 'active';        
  
};

function toggleList(list_link, list_to_show) {
	var listLink = document.getElementById(list_link);
	var listToShow = document.getElementById(list_to_show);
	if (listToShow.style.display="none") {
		listLink.removeClass = "collapsed";
		listLink.addClass = "expanded";
		listToShow.style.display = "block";
	}
	else {
		listToShow.removeClass = "expanded";
		listToShow.addClass = "collapsed";
		listToShow.style.display = "none";
	}
};