var database = {
    "lieblingsplatten":[
        {
            "url":"data:image/jpeg;base64,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",
            "artist":"Die Schnullibullis",
            "album":"Go Away!"
        },
        {
            "url":"http://lorempixel.com/160/160/abstract/2",
            "artist":"Die Ostfriesen",
            "album":"Moin Moin"
        },
        {
            "url":"http://lorempixel.com/160/160/abstract/3",
            "artist":"Die Soundsos",
            "album":"Wie geht's?"
        }
    ],
    "lieblingssongs":[
        {
            "url":"http://lorempixel.com/160/160/abstract/4",
            "artist":"Die Schnullibullis",
            "album":"Go Away!"
        },
        {
            "url":"http://lorempixel.com/160/160/abstract/5",
            "artist":"Die Ostfriesen",
            "album":"Moin Moin"
        },
        {
            "url":"http://lorempixel.com/160/160/abstract/6",
            "artist":"Die Soundsos",
            "album":"Wie geht's?"
        }
    ]
}

var navWidths = [];

function getOffset(el) {
    var _x = 0;
    var _y = 0;
    while(el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return {top: _y,left: _x};
}

var oldRect;

function expand(platte) {
    var offset = getOffset(platte);
    var rect = platte.getBoundingClientRect();
    console.log(offset);
    console.log(rect);
    oldRect = {
        top: offset.top,
        left: offset.left,
        height: rect.height,
        width: rect.width
    }
    var card = platte.cloneNode(true);
    card.classList.add("card");
    card.style.top = offset.top + "px";
    card.style.left = offset.left + "px";
    card.style.height = rect.height + "px";
    card.style.width = rect.width + "px";
    card.onclick = false;
    document.body.appendChild(card);
    card.style.transition = "all .4s ease-in-out";
    setTimeout(function(){
        card.style.boxShadow = "0px 0px 160px 0px";
        card.style.left = "84px";
        card.style.top = "84px";
        card.style.width = "calc(100% - 168px)";
        card.style.height = "calc(100% - 168px)";
    },10);
}

function retract(platte) {
    card = document.querySelector("body > .platte.card");
    card.style.top = oldRect.top;
    card.style.left = oldRect.left;
    card.style.height = oldRect.height;
    card.style.width = oldRect.width;
    document.body.removeChild(card);
}

function paintPlatte(info,parent) {
    var html = "<div class=\"platte\" onclick=\"expand(this)\">\n<div class=\"cover\" style=\"background:url("
        + info.url
        + ");\"></div>\n<div class=\"desc\">\n<span class=\"artist\">"
        + info.artist
        + "</span>\n<span class=\"album\">"
        + info.album
        + "</span>\n</div>\n</div>\n</section>";
    parent.innerHTML += html;
}

function paintPlatten() {
    database.lieblingsplatten.forEach(function(platte){
        paintPlatte(platte,lieblingsplatten);
    });

    database.lieblingssongs.forEach(function(platte){
        paintPlatte(platte,lieblingssongs);
    });
}

function getNavWidths() {
	var nodes = document.querySelectorAll("nav a");
	for(var i;i<nodes.length;i++){
		navWidths[i] = nodes[i].offsetWidth;
	}
}

paintPlatten();

function smoothScroll(did) {
	var start = window.pageYOffset;
	var dest = document.getElementById(did).offsetTop;
	if (dest > (document.body.offsetHeight - window.innerHeight)) {
		dest = (document.body.offsetHeight - window.innerHeight)
	}
	var prg = 0;

	var diff = (dest - start);

	window.scrollTo(0,start);
	var scroll = setInterval(function(){
		prg += 0.02;
		window.scrollTo(0,start+(easeinout(prg)*diff));
	}, 20);

	setTimeout(function(){
		clearInterval(scroll);
	}, 1000)

}

function easeinout(x) {
	return ((x*x)/((x*x)+((1-x)*(1-x))));
}
