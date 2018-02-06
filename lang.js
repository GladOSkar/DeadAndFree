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
	newstext: "	<i>11/12/2017</i><br> \
				<h2>Final Days</h2> \
				Our last day of business will be <b>February 3rd</b>.<br><br> \
				After that, you can come to our<br><br> \
				<b>Farewell Party</b><br><br> \
				on the <b>10th of Febuary</b> from <b>3:00 PM to 8:00 or 9:00 PM</b>.<br><br> \
				<h2>~</h2> \
				<i>1/1/2018</i><br> \
				<h2>Best Of List 2017</h2> \
                The yearly (and last) best of list by Ina and Volker is here!<br><br> \
				You can find it <a href=\"Top15_2017.pdf\">here</a>.",
	gosearch: "Search our inventory...",
	newstuffpdf: "New in stock [pdf]",
	treasures: "Treasures of which we part [pdf]",
	bestof: "Best of list 2017 [pdf]",
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
	newstext: "	<i>31.1.2018</i><br> \
				<h2>ENDSPURT!!!</h2> \
				Nach all den Jahren nur noch 3 Tage offen.<br><br> \
				Schon ein seltsames Gefühl.<br><br> \
				Am 3.2. gehen hier zum letzten Mal Platten über den Tresen.<br><br> \
				Und kommt – es sind immer noch welche da! Aber nicht mehr viele.<br><br> \
				Und wer danach immer noch Sehnsucht hat, kommt eine Woche später, am <b>10.2.</b> zu unserer<br><br> \
				<b>ABSCHIEDSPARTY</b><br><br> \
				Samstagnachmittag ab <b>15 Uhr bis 19 oder 20 Uhr</b>.<br><br> \
				Und gerne eine Platte mitbringen, die Ihr irgendwann hier gekauft habt, und die Euch wichtig ist.<br><br> \
				<h2>~</h2> \
				<i>1.1.2018</i><br> \
				<h2>Best of Liste 2017</h2> \
                Die Jährliche (und letzte) Best of Liste von Ina und Volker ist da!<br><br> \
				Ihr findet sie <a href=\"Top15_2017.pdf\">hier</a>.",
	gosearch: "Durchsuchen Sie unser Lager...",
	newstuffpdf: "Neuheiten im Sortiment [pdf]",
	treasures: "Schätze von denen wir uns trennen [pdf]",
	bestof: "Best of Liste 2017 [pdf]",
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
