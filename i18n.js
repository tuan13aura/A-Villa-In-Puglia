/* A Villa in Puglia — selettore di lingua IT/EN
   Traduce i testi visibili al volo (nessuna duplicazione di pagine) e
   ricorda la scelta tra le pagine via localStorage.
   I nomi propri (A Villa in Puglia, Fasano, Puglia, Airbnb, ecc.),
   indirizzo, email e telefono restano invariati. */
(function () {
  "use strict";

  /* Dizionario: chiave = testo italiano (trim del nodo di testo) -> inglese */
  var DICT = {
    /* ---- Navigazione / footer / comuni ---- */
    "La Villa": "The Villa",
    "Camere": "Rooms",
    "Galleria": "Gallery",
    "Il territorio": "The Area",
    "Contatti": "Contact",
    "Prenota": "Book",
    "Tutti i diritti riservati": "All rights reserved",
    "Prenota il tuo soggiorno": "Book your stay",

    /* ---- Home ---- */
    "Tra natura": "Between nature",
    "e comfort.": "and comfort.",
    "Un equilibrio perfetto tra architettura contemporanea": "A perfect balance between contemporary architecture",
    "e paesaggio pugliese.": "and the Apulian landscape.",
    "Scopri la villa": "Discover the villa",
    "Benvenuti": "Welcome",
    "Una residenza esclusiva,": "An exclusive residence,",
    "nel verde della Puglia.": "amid the green of Puglia.",
    "A Villa in Puglia è una casa indipendente recentemente ristrutturata, pensata per chi cerca silenzio, eleganza e la luce piena della Puglia.": "A Villa in Puglia is a recently renovated detached house, designed for those seeking silence, elegance and the full light of Puglia.",
    "La villa": "The villa",
    "Uno sguardo": "A glimpse",
    "La villa,": "The villa,",
    "in quattro istanti.": "in four moments.",
    "Apri la galleria": "Open the gallery",
    "Esplora": "Explore",
    "Tra gli spazi della villa": "Among the spaces of the villa",
    "e la bellezza della Puglia.": "and the beauty of Puglia.",
    "Le Camere": "The Rooms",
    "Due camere luminose con dettagli artigianali.": "Two bright rooms with artisanal details.",
    "Scopri": "Discover",
    "Ogni angolo della villa, in immagini.": "Every corner of the villa, in pictures.",
    "Il Territorio": "The Area",
    "Trulli, mare e antichi scavi a portata di mano.": "Trulli, sea and ancient ruins within reach.",
    "Soggiorna tra ulivi": "Stay among olive trees",
    "e mare Adriatico.": "and the Adriatic sea.",

    /* ---- La Villa ---- */
    "Eleganza discreta,": "Understated elegance,",
    "immersa negli ulivi.": "nestled among the olive trees.",
    "La casa": "The house",
    "Una villa indipendente,": "A detached villa,",
    "ristrutturata con cura.": "renovated with care.",
    "Immersa nella quiete della campagna di Fasano, tra ulivi e giardini mediterranei, la villa è un rifugio indipendente pensato per chi desidera vivere la Puglia con tranquillità e autenticità. Gli interni, recentemente ristrutturati, accolgono fino a quattro ospiti in ambienti luminosi e confortevoli, mentre all'esterno una veranda arredata, un ampio giardino privato e una doccia all'aperto invitano a trascorrere le giornate tra relax e natura.": "Set in the quiet of the Fasano countryside, among olive trees and Mediterranean gardens, the villa is a detached retreat designed for those who wish to experience Puglia with calm and authenticity. The recently renovated interiors welcome up to four guests in bright, comfortable spaces, while outside a furnished veranda, a large private garden and an open-air shower invite you to spend your days between relaxation and nature.",
    "Ospiti": "Guests",
    "Recensioni": "Reviews",
    "Vedi le camere →": "See the rooms →",
    "Apri la galleria →": "Open the gallery →",
    "Spazi da vivere": "Spaces to live in",
    "Soggiorno": "Living room",
    "e cucina.": "and kitchen.",
    "Il cuore della villa è uno spazio aperto che unisce soggiorno e sala da pranzo, con ampie vetrate che portano all'esterno. La cucina è completamente attrezzata — piano cottura, forno, lavastoviglie, frigorifero — ideale per chi ama cucinare con i prodotti del territorio.": "The heart of the villa is an open space that combines living and dining areas, with large windows opening to the outdoors. The kitchen is fully equipped — hob, oven, dishwasher, fridge — ideal for those who love to cook with local produce.",
    "Soggiorno open space": "Open-plan living room",
    "Cucina completamente attrezzata": "Fully equipped kitchen",
    "Sala da pranzo interna": "Indoor dining room",
    "Lavastoviglie e lavatrice": "Dishwasher and washing machine",
    "Zona Notte": "Sleeping area",
    "Camere da letto,": "Bedrooms,",
    "e bagno.": "and bathroom.",
    "La camera matrimoniale accoglie con un letto king size e un ambiente essenziale, luminoso e rilassante, affacciato sul verde esterno. La seconda camera dispone di due letti singoli, ideale per ospiti o bambini. Un bagno moderno con doccia walk-in serve entrambe le camere, fino a quattro ospiti in totale.": "The master bedroom welcomes you with a king-size bed and an essential, bright and relaxing space overlooking the greenery outside. The second room has two single beds, ideal for guests or children. A modern bathroom with a walk-in shower serves both rooms, for up to four guests in total.",
    "Scopri le camere →": "Discover the rooms →",
    "All'aperto": "Outdoors",
    "Il giardino": "The garden",
    "e gli spazi esterni.": "and the outdoor spaces.",
    "La veranda coperta è il salotto all'aperto della villa: un tavolo da pranzo, sedie a sdraio e la vista sugli ulivi secolari. Il giardino privato regala silenzio assoluto, mentre la doccia esterna è perfetta al rientro dal mare.": "The covered veranda is the villa's outdoor lounge: a dining table, sun loungers and views over the centuries-old olive trees. The private garden offers absolute silence, while the outdoor shower is perfect after a day at the sea.",
    "Veranda coperta con pranzo esterno": "Covered veranda with outdoor dining",
    "Giardino privato": "Private garden",
    "Doccia esterna": "Outdoor shower",
    "Vista uliveto secolare": "Centuries-old olive grove view",
    "Parcheggio privato": "Private parking",
    "Servizi": "Services",
    "Il necessario,": "Everything you need,",
    "curato nei dettagli.": "down to the detail.",
    "Ogni dotazione è pensata per un soggiorno fluido e silenzioso. Comfort contemporaneo nel rispetto del carattere autentico della casa.": "Every amenity is designed for a smooth and quiet stay. Contemporary comfort that respects the authentic character of the house.",
    "Aria condizionata": "Air conditioning",
    "Wi-Fi ad alta velocità": "High-speed Wi-Fi",
    "Cucina attrezzata": "Equipped kitchen",
    "Veranda coperta": "Covered veranda",
    "Dotazioni per bambini": "Amenities for children",
    "Prenota il tuo": "Book your",
    "rifugio in Puglia.": "retreat in Puglia.",
    "Richiedi disponibilità": "Request availability",

    /* ---- Camere ---- */
    "Camere & Bagno": "Rooms & Bathroom",
    "Spazi semplici,": "Simple spaces,",
    "pensati per il relax.": "designed for relaxation.",
    "Fino a 4 ospiti": "Up to 4 guests",
    "Due camere, un bagno di design.": "Two rooms, one designer bathroom.",
    "Tutto curato a mano.": "All crafted by hand.",
    "Ogni ambiente è stato pensato per evocare la calma della campagna pugliese: materiali naturali, luce mediterranea e biancheria scelta per il riposo.": "Every space has been designed to evoke the calm of the Apulian countryside: natural materials, Mediterranean light and linens chosen for a restful sleep.",
    "Camera 01": "Room 01",
    "Camera Matrimoniale": "Double Bedroom",
    "Padronale": "Master",
    "Una camera luminosa e accogliente, arredata con gusto contemporaneo e tonalità calde che invitano al relax. Il comodo letto matrimoniale, l'illuminazione soffusa e gli spazi essenziali creano un ambiente intimo e rilassante, ideale per vivere un soggiorno all'insegna della tranquillità e del comfort.": "A bright and welcoming room, furnished with contemporary taste and warm tones that invite relaxation. The comfortable double bed, soft lighting and essential spaces create an intimate and relaxing atmosphere, ideal for a stay devoted to calm and comfort.",
    "Letto king-size 180×200": "King-size bed 180×200",
    "Armadio capiente": "Spacious wardrobe",
    "Vista uliveto": "Olive grove view",
    "Biancheria in lino": "Linen bed sheets",
    "Camera 02": "Room 02",
    "Camera Doppia": "Twin Room",
    "Eleganza e relax": "Elegance and relaxation",
    "Spazi luminosi, linee essenziali e un design contemporaneo definiscono questa camera doppia. I letti confortevoli, i colori naturali e l'atmosfera tranquilla creano un ambiente ideale per rilassarsi e vivere un soggiorno all'insegna del benessere e della semplicità.": "Bright spaces, clean lines and a contemporary design define this twin room. The comfortable beds, natural colours and calm atmosphere create an ideal setting to relax and enjoy a stay devoted to wellbeing and simplicity.",
    "Due letti singoli 90×200 cm": "Two single beds 90×200 cm",
    "Letti unibili su richiesta": "Beds can be joined on request",
    "Wi-Fi gratuito": "Free Wi-Fi",
    "Lampade da lettura": "Reading lamps",
    "Bagno": "Bathroom",
    "Bagno Privato": "Private Bathroom",
    "Design moderno e funzionalità": "Modern design and functionality",
    "Ampio e luminoso, il bagno è caratterizzato da linee essenziali, tonalità naturali e finiture contemporanee. La spaziosa doccia walk-in con parete in vetro e mosaico scuro crea un piacevole contrasto con gli arredi moderni, offrendo un ambiente confortevole e rilassante.": "Spacious and bright, the bathroom features clean lines, natural tones and contemporary finishes. The roomy walk-in shower with a glass wall and dark mosaic creates a pleasing contrast with the modern fittings, offering a comfortable and relaxing space.",
    "Doccia walk-in": "Walk-in shower",
    "Ampio lavabo": "Large washbasin",
    "Set cortesia": "Courtesy set",
    "Asciugacapelli": "Hairdryer",
    "Specchio illuminato": "Illuminated mirror",
    "Pronti a sognare": "Ready to dream",
    "tra gli ulivi?": "among the olive trees?",
    "Verifica disponibilità": "Check availability",

    /* ---- Galleria ---- */
    "alla villa.": "of the villa.",
    "Tutte": "All",
    "Zona giorno": "Living area",
    "Esterni": "Exteriors",
    "Un soggiorno che": "A stay you",
    "non dimenticherai.": "won't forget.",

    /* ---- Il territorio ---- */
    "Un territorio": "An area",
    "da scoprire.": "to discover.",
    "Dintorni": "Surroundings",
    "Tutto ciò che rende": "Everything that makes",
    "la Puglia indimenticabile.": "Puglia unforgettable.",
    "A pochi chilometri dalla villa, un territorio antico e straordinario: trulli, mare cristallino, scavi romani, masserie e borghi bianchi affacciati sull'Adriatico.": "Just a few kilometres from the villa lies an ancient and extraordinary land: trulli, crystal-clear sea, Roman ruins, masserie and white towns overlooking the Adriatic.",
    "Vicino alla villa": "Near the villa",
    "A pochi passi dalla villa": "A few steps from the villa",
    "Una delle masserie storiche più affascinanti della zona, tra uliveti secolari, degustazioni di olio extravergine e cucina del territorio.": "One of the most charming historic masserie in the area, among centuries-old olive groves, extra-virgin olive oil tastings and local cuisine.",
    "8 km dalla villa": "8 km from the villa",
    "Acque cristalline, piccoli porti di pescatori, stabilimenti balneari e spiagge lungo la costa adriatica.": "Crystal-clear waters, small fishing harbours, beach clubs and beaches along the Adriatic coast.",
    "30 km dalla villa": "30 km from the villa",
    "Un vivace borgo marinaro con un centro storico affacciato sul mare, calette nascoste e il suggestivo Castello Carlo V.": "A lively seaside town with a historic centre overlooking the sea, hidden coves and the striking Castello Carlo V.",
    "Da scoprire": "To discover",
    "Patrimonio UNESCO e simbolo della Puglia, con i suoi celebri trulli in pietra bianca.": "A UNESCO World Heritage Site and symbol of Puglia, with its famous white-stone trulli.",
    "18 km dalla villa": "18 km from the villa",
    "La celebre Città Bianca, un intreccio di vicoli, piazzette e scorci panoramici sulla campagna e sul mare.": "The famous White City, a maze of alleys, small squares and panoramic views over the countryside and the sea.",
    "Uno dei borghi più iconici della regione, arroccato sulle scogliere che si affacciano sull'Adriatico.": "One of the region's most iconic towns, perched on the cliffs overlooking the Adriatic.",
    "Vivi la Puglia,": "Experience Puglia,",
    "davvero.": "for real.",

    /* ---- Contatti ---- */
    "Scrivici,": "Write to us,",
    "ti rispondiamo entro 24 ore.": "we reply within 24 hours.",
    "Per disponibilità, tariffe stagionali o richieste particolari, contattaci direttamente. Una proposta su misura per il tuo soggiorno ti attende.": "For availability, seasonal rates or special requests, contact us directly. A tailor-made proposal for your stay awaits.",
    "Telefono": "Phone",
    "Indirizzo": "Address",
    "Prenota su Airbnb": "Book on Airbnb",
    "Prenota su VRBO": "Book on VRBO",

    /* ---- 404 ---- */
    "Errore 404": "Error 404",
    "Pagina": "Page",
    "non trovata.": "not found.",
    "La pagina che cercavi non esiste o è stata spostata. Torna alla home e riprova da lì.": "The page you were looking for doesn't exist or has been moved. Go back to the home page and try again from there.",
    "Torna alla home": "Back to home",

    /* ---- Privacy (chrome) ---- */
    "← Torna alla home": "← Back to home"
  };

  var TITLES = {
    "A Villa in Puglia — Rifugio di Lusso in Puglia": "A Villa in Puglia — Luxury Retreat in Puglia",
    "La Villa — A Villa in Puglia": "The Villa — A Villa in Puglia",
    "Camere — A Villa in Puglia": "Rooms — A Villa in Puglia",
    "Galleria — A Villa in Puglia": "Gallery — A Villa in Puglia",
    "Il territorio — A Villa in Puglia": "The Area — A Villa in Puglia",
    "Contatti & Prenotazioni — A Villa in Puglia": "Contact & Booking — A Villa in Puglia",
    "Pagina non trovata — A Villa in Puglia": "Page not found — A Villa in Puglia"
  };

  var SKIP_TAGS = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEXTAREA: 1 };
  var itTitle = document.title;

  function walkText(root, cb) {
    if (!root) return;
    (function rec(node) {
      for (var n = node.firstChild; n; n = n.nextSibling) {
        if (n.nodeType === 3) {
          cb(n);
        } else if (n.nodeType === 1) {
          if (SKIP_TAGS[n.nodeName]) continue;
          if (n.classList && n.classList.contains('lang-switch')) continue;
          rec(n);
        }
      }
    })(root);
  }

  function applyLang(lang) {
    var root = document.querySelector('main') || document.body;
    if (lang === 'en') {
      walkText(root, function (node) {
        var t = node.nodeValue;
        var key = t.trim();
        if (!key) return;
        if (DICT[key] != null) {
          if (node.__itText == null) node.__itText = t;
          node.nodeValue = t.replace(key, DICT[key]);
        }
      });
      if (TITLES[itTitle]) document.title = TITLES[itTitle];
    } else {
      walkText(root, function (node) {
        if (node.__itText != null) node.nodeValue = node.__itText;
      });
      document.title = itTitle;
    }
    document.documentElement.lang = lang;
  }

  function setActive(lang) {
    var btns = document.querySelectorAll('.lang-btn');
    Array.prototype.forEach.call(btns, function (b) {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
  }

  function getLang() {
    try { return localStorage.getItem('lang') || 'it'; } catch (e) { return 'it'; }
  }
  function saveLang(lang) {
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  function makeSwitch(extraClass) {
    var w = document.createElement('div');
    w.className = 'lang-switch ' + extraClass;
    w.innerHTML =
      '<button type="button" class="lang-btn" data-lang="it" aria-label="Italiano">IT</button>' +
      '<span class="lang-sep" aria-hidden="true">/</span>' +
      '<button type="button" class="lang-btn" data-lang="en" aria-label="English">EN</button>';
    return w;
  }

  function inject() {
    // Desktop: raggruppa selettore lingua + bottone "Prenota" a destra nella nav
    var navInner = document.querySelector('.nav-inner');
    if (navInner && !navInner.querySelector('.lang-switch-desktop')) {
      var cta = navInner.querySelector('.nav-cta');
      var group = document.createElement('div');
      group.className = 'nav-right';
      if (cta) {
        navInner.insertBefore(group, cta);
        group.appendChild(makeSwitch('lang-switch-desktop'));
        group.appendChild(cta);
      } else {
        navInner.appendChild(group);
        group.appendChild(makeSwitch('lang-switch-desktop'));
      }
    }
    // Mobile: dentro il menu, sopra al bottone "Prenota"
    var menu = document.getElementById('mobileMenu');
    if (menu && !menu.querySelector('.lang-switch-mobile')) {
      var mcta = menu.querySelector('.mobile-menu-cta');
      var sw = makeSwitch('lang-switch-mobile');
      if (mcta) menu.insertBefore(sw, mcta);
      else menu.appendChild(sw);
    }
  }

  inject();

  document.addEventListener('click', function (e) {
    var b = e.target.closest ? e.target.closest('.lang-btn') : null;
    if (!b) return;
    var lang = b.dataset.lang;
    saveLang(lang);
    applyLang(lang);
    setActive(lang);
  });

  var current = getLang();
  if (current === 'en') applyLang('en');
  setActive(current);
})();
