function foldnav(el) {
	if (el.parentElement.classList.contains("open")) {
		el.parentElement.classList.remove("open");
	} else {
		el.parentElement.classList.add("open");
	}
}

function scrolltop() {
	return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

function scrollleft() {
	return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
}

function getOffset(el) {
	var top, left, rect = el.getBoundingClientRect();

	top = rect.top + scrolltop();
	left = rect.left + scrollleft();

	return {top: top, left:left};
}

function adjustHeadings() {			//Adjust section Headings' CSS to make them be underneath their nav counterpart
	var navEls = document.querySelectorAll("nav a"),
		navElWidths = [],
		hereOffset = 0,
		navElOffsets = [];

	for (var i = 0; i < navEls.length - 1; i++) {
		navElWidths[i] = navEls[i + 1].offsetWidth;
		navElOffsets[i] = hereOffset;
		hereOffset += navElWidths[i];
	};

	var headEls = document.querySelectorAll(".heading span"),
		navWidth = document.querySelector("nav").offsetWidth;

	for (var i = 0; i < headEls.length; i++) {
		headEls[i].style.marginLeft = navElOffsets[i] + "px";
		headEls[i].style.width = navElWidths[i] + "px";
	};

}

var navsticks = 0; //remembers previous sticky status; so that the class only has to me added/removed when the threshold is passed
var opnas = [], activeopnaindex = 0, opnaoffsets = [0];
var headerheight = 0;

function realign() {
	adjustHeadings(); //Adjust section Headings' CSS to make them be underneath their nav counterpart

	headerheight = document.querySelector("header").offsetHeight;

	for (var i = 0; i < opnas.length; i++) {
		opnaoffsets[i + 1] = getOffset(opnas[i]).top;
	}
}

window.addEventListener("resize", function() {
	realign();
});

window.onscroll = function() {
	if ((scrolltop() > headerheight) && (navsticks == 0)) { //for the sticky nav; may be obsolete when moving nav to top
		document.querySelector("nav").classList.add("stickynav");
		navsticks = 1;
	} else if ((scrolltop() <= headerheight) && (navsticks == 1)) {
		document.querySelector("nav").classList.remove("stickynav");
		navsticks = 0;
	};

	if (scrolltop() + 21 != opnaoffsets[activeopnaindex]) {
		if (scrolltop() + 21 < opnaoffsets[activeopnaindex]) {
			activeopnaindex--;
			try { document.body.querySelector("nav a.active").classList.remove("active"); } catch(err) {};
			if (activeopnaindex)
				document.querySelector("nav a:nth-child(" + (activeopnaindex + 2) + ")").classList.add("active");
		} else if (scrolltop() + 21 > opnaoffsets[activeopnaindex + 1]) {
			activeopnaindex++;
			try { document.body.querySelector("nav a.active").classList.remove("active"); } catch(err) {};
			if (activeopnaindex)
				document.querySelector("nav a:nth-child(" + (activeopnaindex + 2) + ")").classList.add("active");
		}
	}
};

var sled, sliderpos = 0, slidertotal;

window.onload = function() {

	opnas = document.body.querySelectorAll(".opnavanchor");
	realign();

	paintPlatten();

	realign();

	setInterval(function(){
		slidergoto("n");
	}, 8000);

	sled = document.querySelector(".slider .sled");
	slidertotal = sled.childElementCount;
};



function slidergoto(dest) {

	document.querySelector(".slider .buttons button.active").classList.remove("active");

	if (dest == 'p') {
		sliderpos--;
		if (sliderpos < 0) sliderpos = slidertotal;
	} else if (dest == 'n') {
		sliderpos = (sliderpos + 1) % slidertotal;
	} else {
		sliderpos = dest;
	}

	sled.style.marginLeft = (sliderpos * -100) + "%";

	document.querySelectorAll(".slider .buttons button")[sliderpos + 1].classList.add("active");
}

function smoothScroll(did) { //scrools smoothly to the top of the element with ID "did" (="destinationID")

	try { document.body.querySelector("nav.open").classList.remove("open"); } catch(err) {};

	try { document.body.querySelector("nav a.active").classList.remove("active"); } catch(err) {};
	document.querySelector("." + did + "link").classList.add("active");  //make the clicked nav-Element stay visually active

	var start = scrolltop(), //get start position (current scroll position)
		dest = document.getElementById(did).offsetTop; //get destination position (absolute top of dest element)
	if (dest > (document.body.offsetHeight - window.innerHeight)) { //if the destination view is past the end of the page, only move to the end of the page, so the animation does not end abruptly
		dest = (document.body.offsetHeight - window.innerHeight)
	}
	var prg = 0, //time progress in s
		diff = (dest - start); //distance to move

	var scroll = setInterval(function () { //loop every .02 seconds
		prg += 0.02; //increment time by .02 seconds
		window.scrollTo(0, start + (easeinout(prg) * diff)); //scroll to position for current time progress (0 is for horizontal scrolling, position = start + progress * distance)
	}, 20);

	setTimeout(function () { //wait for 1 second (and a little bit), then stop loop
		clearInterval(scroll);
	}, 1010)

}

function easeinout(x) { //time-to-progress-ratio function for smooth scrolling; returns progress as integer 0<=y<=1
	return ((x * x) / ((x * x) + ((1 - x) * (1 - x))));
}
