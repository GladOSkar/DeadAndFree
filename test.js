var opnas, activeopnaindex, opnaoffsets = [];

window.addEventListener("resize", function() {
	for (var i = 0; i < opnas.length; i++) {
		opnaoffsets[i + 1] = getOffsetTop(opnas[i]);
	}
});

window.onscroll = function() {
	if (document.body.scrollTop < opnaoffsets[activeopnaindex]) {
		activeopnaindex--;
		try { document.body.querySelector(".active").classList.remove("active"); } catch(err) {};
		if (activeopnaindex) document.querySelector("ul.tabs-nav li:nth-child(" + (activeopnaindex) + ")").classList.add("active");
	} else if (document.body.scrollTop > opnaoffsets[activeopnaindex + 1]) {
		activeopnaindex++;
		try { document.body.querySelector(".active").classList.remove("active"); } catch(err) {};
		if (activeopnaindex) document.querySelector("ul.tabs-nav li:nth-child(" + (activeopnaindex) + ")").classList.add("active");
	}
};

window.onload = function() {
	opnas = document.body.querySelectorAll(".opnavanchor");
	opnaoffsets[0] = 0;
	for (var i = 0; i < opnas.length; i++) {
		opnaoffsets[i + 1] = getOffsetTop(opnas[i]);
	}
	activeopnaindex = 0;
};

function getOffsetTop( elem ) {
	var offsetTop = 0;
	
	while( elem = elem.offsetParent )
		if ( !isNaN( elem.offsetTop ) )
			offsetTop += elem.offsetTop;
	
	return offsetTop;
};