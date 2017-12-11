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
	newstext: "	<i>3/20/2017</i><br> \
                <h2>WE'RE STILL HERE!</h2> \
                And we have a new website!<br><br> \
				That’s the good news.<br><br> \
				The maybe less good news is:<br><br> \
				We won’t be here forever (as a lot of people were assuming).<br><br> \
				Sometime in early 2018 MR DEAD & MRS FREE will close this door forever after 35 years in business.<br><br> \
				So come here while you can, there are lots of special offers and we are selling parts of our own collections, too.<br><br> \
				<h2>~</h2> \
				<i>11/12/2017</i><br> \
				<h2>Relax</h2> \
				We will still be here in January.<br><br> \
				Our last day of business will be <b>February 3rd, 2018</b>.<br><br> \
				So there’s still time to browse through our collections.",
	gosearch: "Search our inventory...",
	newstuffpdf: "New in stock [pdf]",
	treasures: "Treasures of which we part [pdf]",
	abouttext: "MR DEAD & MRS FREE have been selling records for 34 years now.<br><br> \
				We sold records before there were CDs or MPs3s or streaming.<br><br> \
				And even in the darkest days of the 90s when CDs seemed to be the only medium in the market, we have always had at least 50% of our turnover with Vinyl.<br><br> \
				Now, with Vinyl “booming” again, we do what we have always done: We sell music (sometimes also on CD).<br><br> \
				Sometimes trendy, sometimes obscure, some timeless classics, some new stuff we keep discovering.",
	contacttext: "You want to ask us a question, reserve a record or talk to us about something else? Here is our contact info:",
	faqtext: "No, we do not want to buy your old records.",
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
	newstext: "	<i>20.3.2017</i><br> \
				<h2>ES GIBT UNS NOCH!</h2> \
                Und wir haben wieder eine Webseite!!<br><br> \
				Das ist die gute Nachricht.<br><br> \
				Die vielleicht nicht ganz so gute:<br><br> \
				Es wird uns doch nicht ewig geben... (was ja viele Leute gehofft haben).<br><br> \
				Anfang 2018 werden MR DEAD & MRS FREE voraussichtlich nach 35 Jahren den Laden dichtmachen.<br><br> \
				Also kommt her, solange wir noch da sind. Es gibt jede Menge Sonderangebote und wir verkaufen auch Teile unserer eigenen Sammlungen.<br><br> \
				<h2>~</h2> \
				<i>18.11.2017</i><br> \
				<h2>Liebe Kunden</h2> \
				weil Ihr uns jetzt am Wochenende immer die Bude einrennt, und weil bald Weihnachten ist, verlängern wir unsere Öffnungszeiten:<br><br> \
				Am <b>Samstag</b> ist ab <b>Dezember</b> immer bis <b>18 Uhr</b> geöffnet.<br><br> \
				<h2>~</h2> \
				<i>11.12.2017</i><br> \
				<h2>Keine Panik!</h2> \
				Wir sind noch bis zum <b>3.2.2018</b> für Euch da.<br><br> \
				Wir freuen uns natürlich auch jetzt schon über Eure Geschenke + all das liebende Angedenken.<br><br> \
				Aber ein bisschen Zeit hat’s noch...",
	gosearch: "Durchsuchen Sie unser Lager...",
	newstuffpdf: "Neuheiten im Sortiment [pdf]",
	treasures: "Schätze von denen wir uns trennen [pdf]",
	abouttext: "MR DEAD & MRS FREE verkaufen Schallplatten seit 34 Jahren.<br><br> \
				Als es noch keine CDs und MP3s und Streaming gab (und auch noch fast keine Computer und kein Internet... dafür Karteikarten und Fax-Geräte).<br><br> \
				Als es in den 90ern – fast – nur noch CDs gab,  haben wir immer mindestens 50% vom Umsatz mit Schallplatten gemacht. Das kleine gallische Dorf des Vinyls in einem Meer von Silberlingen.<br><br> \
				Und mit dem sogenannten Vinyl-Boom machen wir, was wir immer gemacht haben: Wir verkaufen Musik – manchmal auch auf CD. Im Trend oder abseits davon, die ewigen Klassiker und das Neue, das wir immer noch entdecken.",
	contacttext: "Sie wollen uns eine Frage stellen, eine Platte reservieren oder wegen etwas anderem mit uns sprechen? Hier sind unsere Kontaktdaten:",
	faqtext: "Nein, wir wollen nicht ihre alten Platten kaufen.",
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
