var langen = {
	id: "en",
	menu: "MENU",
	records: "RECORDS",
	about: "ABOUT US",
	contact: "CONTACT",
	location: "LOCATION",
	imprint: "IMPRINT",
	favrecords: "OUR FAVORITE RECORDS",
	favsongs: "OUR FAVORITE SONGS",
	lang: "SEITE AUF DEUTSCH",
	opening: "OPENING TIMES",
	newstext: "	<i>4/17/2017</i><br> \
                <h2>RECORD STORE DAY 2017</h2> \
                Same procedure as every year: <br> \
                Record Store Day is upon us. <br><br> \
                On <b>Sat 22nd of April 2017</b>, we will sell records that the world does not need, but some of you probably want anyway... <br><br> \
                So come by & enjoy our guest: <br> \
                <b>The Black Elephant Band</b> plays at <b>3 PM</b>. <br><br> \
                <img src=\"img/elephant_band.jpg\"></img> <br><br><br><br> \
                <i>3/20/2017</i><br> \
                <h2>WE'RE STILL HERE!</h2> \
                And we have a new website!<br><br> \
				That’s the good news.<br><br> \
				The maybe less good news is:<br><br> \
				We won’t be here forever (as a lot of people were assuming).<br><br> \
				Sometime in early 2018 MR DEAD & MRS FREE will close this door forever after 35 years in business.<br><br> \
				So come here while you can, there are lots of special offers and we are selling parts of our own collections, too.<br><br> \
				We'll see you on Rocord Store Day!",
	gosearch: "Search our inventory...",
	newstuffpdf: "New in stock [pdf]",
	abouttext: "MR DEAD & MRS FREE have been selling records for 34 years now.<br><br> \
				We sold records before there were CDs or MPs3s or streaming.<br><br> \
				And even in the darkest days of the 90s when CDs seemed to be the only medium in the market, we have always had at least 50% of our turnover with Vinyl.<br><br> \
				Now, with Vinyl “booming” again, we do what we have always done: We sell music (also on CD).<br><br> \
				Sometimes trendy, sometimes obscure, some timeless classics, some new stuff we keep discovering.",
	contacttext: "You want to ask us a question, reserve a record or talk to us about something else? Here is our contact info:",
	phone: "Phone: +49 30 2151449",
	addresstext: "ADDRESS"
}

var langde = {
	id: "de",
	menu: "MENÜ",
	records: "PLATTEN",
	about: "ÜBER UNS",
	contact: "KONTAKT",
	location: "LAGE",
	imprint: "IMPRESSUM",
	favrecords: "UNSERE LIEBLINGPLATTEN",
	favsongs: "UNSERE LIEBLINGSSONGS",
	lang: "PAGE IN ENGLISH",
	opening: "ÖFFUNGSZEITEN",
	newstext: "	<i>17.4.2017</i><br> \
                <h2>RECORD STORE DAY 2017</h2> \
                Alle Jahre wieder: Am <b>22.4.2017</b> ist Record Store Day: <br><br> \
                Platten, die die Welt nicht braucht zu Preisen, für die wir uns schämen. <br><br> \
                Lasst uns trotzdem einen schönen Tag mit guter Musik haben. <br><br> \
                Wir freuen uns auf Euch und um <b>15 Uhr</b> spielt: <br><br> \
                <img src=\"img/elephant_band.jpg\"></img> <br><br><br><br> \
                <i>20.3.2017</i><br> \
                <h2>ES GIBT UNS NOCH!</h2> \
                Und wir haben wieder eine Webseite!!<br><br> \
				Das ist die gute Nachricht.<br><br> \
				Die vielleicht nicht ganz so gute:<br><br> \
				Es wird uns doch nicht ewig geben…(was ja viele Leute gehofft haben).<br><br> \
				Anfang 2018 werden MR DEAD & MRS FREE voraussichtlich nach 35 Jahren den Laden dichtmachen.<br><br> \
				Also kommt her, solange wir noch da sind. Es gibt jede Menge Sonderangebote und wir verkaufen auch Teile unserer eigenen Sammlungen.<br><br> \
				Wir sehen uns am Record Store Day!",
	gosearch: "Durchsuchen Sie unser Lager...",
	newstuffpdf: "Neuheiten im Sortiment [pdf]",
	abouttext: "MR DEAD & MRS FREE verkaufen Schallplatten seit 34 Jahren.<br><br> \
				Als es noch keine CDs und MP3s und Streaming gab (und auch noch fast keine Computer und kein Internet…dafür Karteikarten und Fax-Geräte).<br><br> \
				Als es in den 90ern – fast – nur noch CDs gab,  haben wir immer mindestens 50% vom Umsatz mit Schallplatten gemacht. Das kleine gallische Dorf des Vinyls in einem Meer von Silberlingen.<br><br> \
				Und mit dem sogenannten Vinyl-Boom mache wir, was wir immer gemacht haben: Wir verkaufen Musik – auch auf CD. Im Trend oder abseits davon, die ewigen Klassiker und das Neue, das wir immer noch entdecken.",
	contacttext: "Sie wollen uns eine Frage stellen, eine Platte reservieren oder wegen etwas anderem mit uns sprechen? Hier sind unsere Kontaktdaten:",
	phone: "Telefon: 030 2151449",
	addresstext: "ADRESSE"
}

var lang = window["lang" + ( localStorage.getItem("language") || window.navigator.language.slice(0,2) )]; //copies the language pack into the main language object

function chlang() {
	if (lang.id == "en")
		localStorage.setItem("language","de");
	else
		localStorage.setItem("language","en");

	location.reload();
}
