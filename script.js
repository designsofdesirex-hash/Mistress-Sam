document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => { document.body.dataset.lastAction = link.getAttribute("href"); });
});

const translations = {
  fr: {
    title: "QUEEN SAM — Spécialiste findom et experte en humiliation à Bordeaux", feetPhotoAlt: "Queen Sam sur fond rose",
    description: "Queen Sam — findom, humiliation, sessions et contenu réservé aux adultes. Française et Polonaise, basée à Bordeaux.",
    ogDescription: "Découvrez l'univers de Queen Sam et préparez votre demande de réservation.", homeLabel: "Accueil de Queen Sam", switchLabel: "Switch to English", live: "EN LIGNE SUR X",
    eyebrow: "LA REINE DE BORDEAUX", heroTitle: "TON PIRE CAUCHEMAR<br /><em>DANS UN CORPS DE RÊVE</em>", heroSub: "Spécialiste findom. Experte en humiliation. Dresseuse de chiens.", heroButton: "PRÉPARE TA DEMANDE", portraitLabel: "Portrait de Queen Sam", portraitAlt: "Queen Sam",
    manifestoTitle: "TON OBSESSION<br /><span>A UN PRIX</span><br />ET TU LE SAIS", feedLink: "REJOINS MON UNIVERS",
    attentionTitle: "TU VEUX<br /><em>MON ATTENTION ?</em>", attentionCommand: "MÉRITE-LA.", obey: "OBÉIS", submit: "SOUMETS-TOI", prove: "FAIS TES PREUVES", themes: "Findom, humiliation, obéissance, dressage et exploration des fantasmes — toujours dans le respect des limites établies ensemble.",
    tributeTitle: "CHOISIS<br /><em>TON</em><br />TRIBUT", tributeIntro: "Contenu et expériences<br /><strong>Photos, vidéos et sessions<br />À Bordeaux ou en ligne</strong>", photoName: "PHOTOS PRÉFAITES", photoNote: "Choisis ton prochain fantasme.", videoName: "VIDÉOS PRÉFAITES", videoNote: "Trouve ta nouvelle obsession.", onlineName: "SESSIONS EN LIGNE", onlineNote: "À distance, selon tes envies.", realName: "SESSIONS EN PRÉSENTIEL", realNote: "Rendez-vous à Bordeaux uniquement.",
    lifestyleTitle: "LE MONDE<br /><em>QUE TU</em><br />FINANCES", lifestyleCopy: "Entre dans mon univers<br />Et découvre ce qui te fait obéir.", directContact: "MES LIENS", messageTitle: "RETROUVE<br /><em>QUEEN SAM</em>", socialLabel: "Liens de Queen Sam", xMain: "X PRINCIPAL ↗", xBackup: "X SECONDAIRE ↗",
    followTitle: "TU CONNAIS<br /><em>TA PLACE</em>", followCopy: "Ta Reine française et polonaise, basée à Bordeaux.<br />Findom, humiliation, dressage : à genoux, petit chien. Ton tribut parlera pour toi.", followLink: "SUIS @SAM DCTLL", servicesTitle: "MES<br /><em>SERVICES</em>", servicesIntro: "Choisis ton expérience. Paiement avant la prestation, tarifs non négociables.", camTitle: "SESSIONS CAM", cam5Name: "Cam · 5 min", cam10Name: "Cam · 10 min", cam25Name: "Cam · 25 min", cam5: "Cam · 5 min — 30 €", cam10: "Cam · 10 min — 60 €", cam25: "Cam · 25 min — 120 €", videoTitle: "VIDÉOS", video1Name: "Vidéo custom · 1 min", video5Name: "Vidéo custom · 5 min", videoFeetName: "Vidéo custom pieds · selon durée", video1: "Vidéo custom · 1 min — 40 €", video5: "Vidéo custom · 5 min — 160 €", videoFeet: "Vidéo custom pieds · selon durée — à partir de 60 €", videoFeetPrice: "À partir de 60 €", photoTitle: "PHOTOS", photo1Name: "1 photo", photoFeet5Name: "5 photos de pieds", photoCustomName: "1 photo personnalisée", photo1: "1 photo — 10 €", photoFeet5: "5 photos de pieds — 40 €", photoCustom: "1 photo personnalisée — 15 €", feetTitle: "PIEDS & CHAUSSETTES", socksDayName: "Chaussettes portées · 1 jour", socksPhotosName: "Chaussettes + photos", socksVideoName: "Chaussettes + vidéo courte", socksLongName: "Chaussettes portées plus longtemps", feetExclusiveName: "Contenu pieds exclusif", socksDay: "Chaussettes portées · 1 jour — 40 €", socksPhotos: "Chaussettes + photos — 55 €", socksVideo: "Chaussettes + vidéo courte — 70 €", socksLong: "Chaussettes portées plus longtemps — sur demande", feetExclusive: "Contenu pieds exclusif — 150 €", chatTitle: "SÉANCES CHAT", chat5Name: "5 minutes · à partir de", chat5: "Séance chat · 5 min — à partir de 15 €", onRequest: "Sur demande", serviceTerms: "Paiement avant la prestation · Tarifs non négociables · Offrande obligatoire avant toute session.",
    bookingTitle: "PRÉPARE<br /><em>TA DEMANDE</em>", bookingKicker: "18+ · CONFIDENTIEL · CONSENTEMENT MUTUEL", bookingIntro: "Réservé aux adultes. Présente tes envies, tes fétiches et tes limites. Ta demande reste sur ton appareil : copie-la pour l'envoyer ou ouvre mes DM sur X.", nameLabel: "Ton nom ou pseudo", tributeLabel: "Montant du tribut initial envoyé (€)", requestLabel: "Que souhaites-tu réserver ?", detailsLabel: "Décris tes envies, fétiches, kinks et limites (facultatif)", ageCheck: "Je confirme avoir 18 ans ou plus.", consentTitle: "CADRE & CONSENTEMENT", consentCheck: "Je confirme le consentement mutuel, le respect strict de nos limites et la confidentialité de nos échanges.", tributeCheck: "Je confirme avoir envoyé le tribut initial indiqué ci-dessus.", copyButton: "COPIER LA DEMANDE", copyXButton: "COPIER ET OUVRIR MES DM X ↗", bookingNote: "Aucune demande n'est transmise ni enregistrée sur ce site. La réservation est à confirmer en DM.", copySuccess: "Demande copiée. Colle-la dans ton message à Queen Sam.", copyFallback: "La copie automatique a échoué. Sélectionne et copie le texte de ta demande.", missingInfo: "Vérifie les champs obligatoires et tes confirmations avant de continuer.", xOpened: "Demande copiée. La page X s'ouvre dans un nouvel onglet.",
    footerTagline: "DRESSEUSE DE CHIENS · EXPERTE EN HUMILIATION", footerFollow: "X PRINCIPAL / SUIVRE", footerBackup: "X SECONDAIRE", footerLast: "TON TRIBUT. MES RÈGLES.", legal: "18+ / PERSONA ADULTE / CONSENTEMENT MUTUEL / LIENS EXTERNES",
  },
  en: {
    title: "QUEEN SAM — Findom specialist and humiliation expert in Bordeaux", feetPhotoAlt: "Queen Sam against a pink backdrop", description: "Queen Sam — findom specialist, humiliation expert, sessions and adult content. French and Polish, based in Bordeaux.", ogDescription: "Discover Queen Sam's world and prepare your booking request.", homeLabel: "Queen Sam home", switchLabel: "Passer en français", live: "LIVE ON X",
    eyebrow: "BORDEAUX'S QUEEN", heroTitle: "YOUR WORST NIGHTMARE<br /><em>IN A DREAM BODY</em>", heroSub: "Findom specialist. Humiliation expert. Skilled dog trainer.", heroButton: "PREPARE YOUR REQUEST", portraitLabel: "Portrait of Queen Sam", portraitAlt: "Queen Sam",
    manifestoTitle: "YOUR OBSESSION<br /><span>HAS A PRICE</span><br />YOU KNOW IT", feedLink: "ENTER MY WORLD",
    attentionTitle: "YOU WANT<br /><em>MY ATTENTION?</em>", attentionCommand: "EARN IT.", obey: "OBEY", submit: "SUBMIT", prove: "PROVE YOURSELF", themes: "Findom, humiliation, obedience, training, and exploring fantasies — always respecting the limits we agree on together.",
    tributeTitle: "CHOOSE<br /><em>YOUR</em><br />TRIBUTE", tributeIntro: "Content and experiences<br /><strong>Photos, videos, and sessions<br />In Bordeaux or online</strong>", photoName: "PREMADE PHOTOS", photoNote: "Choose your next fantasy.", videoName: "PREMADE VIDEOS", videoNote: "Find your next obsession.", onlineName: "ONLINE SESSIONS", onlineNote: "Remote, shaped around your desires.", realName: "IN-PERSON SESSIONS", realNote: "Available in Bordeaux only.",
    lifestyleTitle: "THE WORLD<br /><em>YOU</em><br />FINANCE", lifestyleCopy: "Step into my world<br />And discover what makes you obey.", directContact: "MY LINKS", messageTitle: "FIND<br /><em>QUEEN SAM</em>", socialLabel: "Queen Sam links", xMain: "MAIN X ↗", xBackup: "BACKUP X ↗",
    followTitle: "KNOW<br /><em>YOUR PLACE</em>", followCopy: "Your French-Polish Queen in Bordeaux.<br />Findom, humiliation, training: on your knees, little dog. Let your tribute speak for you.", followLink: "FOLLOW @SAM DCTLL", servicesTitle: "MY<br /><em>SERVICES</em>", servicesIntro: "Choose your experience. Payment is due before the service; prices are non-negotiable.", camTitle: "CAM SESSIONS", cam5Name: "Cam · 5 min", cam10Name: "Cam · 10 min", cam25Name: "Cam · 25 min", cam5: "Cam · 5 min — €30", cam10: "Cam · 10 min — €60", cam25: "Cam · 25 min — €120", videoTitle: "VIDEOS", video1Name: "Custom video · 1 min", video5Name: "Custom video · 5 min", videoFeetName: "Custom foot video · duration varies", video1: "Custom video · 1 min — €40", video5: "Custom video · 5 min — €160", videoFeet: "Custom foot video · duration varies — from €60", videoFeetPrice: "From €60", photoTitle: "PHOTOS", photo1Name: "1 photo", photoFeet5Name: "5 foot photos", photoCustomName: "1 custom photo", photo1: "1 photo — €10", photoFeet5: "5 foot photos — €40", photoCustom: "1 custom photo — €15", feetTitle: "FEET & SOCKS", socksDayName: "Worn socks · 1 day", socksPhotosName: "Worn socks + photos", socksVideoName: "Worn socks + short video", socksLongName: "Socks worn longer", feetExclusiveName: "Exclusive feet content", socksDay: "Worn socks · 1 day — €40", socksPhotos: "Worn socks + photos — €55", socksVideo: "Worn socks + short video — €70", socksLong: "Socks worn longer — on request", feetExclusive: "Exclusive feet content — €150", chatTitle: "CHAT SESSIONS", chat5Name: "5 minutes · starting at", chat5: "Chat session · 5 min — from €15", onRequest: "On request", serviceTerms: "Payment before service · Prices are non-negotiable · Tribute required before every session.",
    bookingTitle: "PREPARE<br /><em>YOUR REQUEST</em>", bookingKicker: "18+ · PRIVATE · MUTUAL CONSENT", bookingIntro: "Adults only. Share what you desire, your fetishes, and your limits. Your request stays on your device: copy it to send or open my X DMs.", nameLabel: "Your name or username", tributeLabel: "Initial tribute sent (€)", requestLabel: "What would you like to book?", detailsLabel: "Describe your wishes, fetishes, kinks, and limits (optional)", ageCheck: "I confirm that I am 18 or older.", consentTitle: "BOUNDARIES & CONSENT", consentCheck: "I agree to mutual consent, strict respect for our limits, and confidentiality in our exchanges.", tributeCheck: "I confirm that I sent the initial tribute amount entered above.", copyButton: "COPY REQUEST", copyXButton: "COPY AND OPEN MY X DMS ↗", bookingNote: "This site does not send or store requests. Confirm your booking by DM.", copySuccess: "Request copied. Paste it into your message to Queen Sam.", copyFallback: "Automatic copying failed. Select and copy your request text.", missingInfo: "Complete the required fields and confirmations before continuing.", xOpened: "Request copied. X is opening in a new tab.",
    footerTagline: "SKILLED DOG TRAINER · HUMILIATION EXPERT", footerFollow: "MAIN X / FOLLOW", footerBackup: "BACKUP X", footerLast: "YOUR TRIBUTE. MY RULES.", legal: "18+ / ADULT PERSONA / MUTUAL CONSENT / EXTERNAL LINKS",
  },
};

const languageToggle = document.querySelector("#language-toggle");
function setLanguage(language) {
  const copy = translations[language];
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => { element.innerHTML = copy[element.dataset.i18n]; });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => { element.setAttribute("aria-label", copy[element.dataset.i18nAria]); });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => { element.alt = copy[element.dataset.i18nAlt]; });
  document.querySelector('[data-i18n-meta="description"]').content = copy.description;
  document.querySelector('[data-i18n-meta="ogDescription"]').content = copy.ogDescription;
  document.querySelectorAll('[data-i18n-meta="title"]').forEach((element) => {
    if (element instanceof HTMLMetaElement) element.content = copy.title;
    else element.textContent = copy.title;
  });
  languageToggle.textContent = language === "fr" ? "EN" : "FR";
  languageToggle.setAttribute("aria-label", copy.switchLabel);
  languageToggle.lang = language === "fr" ? "en" : "fr";
}
languageToggle.addEventListener("click", () => setLanguage(document.documentElement.lang === "fr" ? "en" : "fr"));

const bookingForm = document.querySelector("#booking-form");
const bookingStatus = document.querySelector("#booking-status");
let lastRequest = "";
function makeRequest() {
  if (!bookingForm.reportValidity()) return null;
  const language = document.documentElement.lang;
  const copy = translations[language];
  const values = new FormData(bookingForm);
  const serviceKey = values.get("service");
  const details = String(values.get("details") || "").trim();
  return `${copy.requestLabel}: ${copy[serviceKey]}\n${copy.nameLabel}: ${values.get("name")}\n${copy.tributeLabel}: ${values.get("tribute")} €${details ? `\n${copy.detailsLabel}: ${details}` : ""}\n\n18+: Yes\nMutual consent and agreed limits: Yes\nInitial tribute sent: Yes`;
}
async function copyRequest() {
  lastRequest = makeRequest() || "";
  if (!lastRequest) return false;
  const copy = translations[document.documentElement.lang];
  try {
    await navigator.clipboard.writeText(lastRequest);
    bookingStatus.textContent = copy.copySuccess;
  } catch {
    const fallback = document.createElement("textarea");
    fallback.value = lastRequest;
    fallback.setAttribute("readonly", "");
    fallback.className = "copy-fallback";
    document.body.append(fallback);
    fallback.select();
    const copied = document.execCommand("copy");
    fallback.remove();
    bookingStatus.textContent = copied ? copy.copySuccess : copy.copyFallback;
    return copied;
  }
  return true;
}
bookingForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  await copyRequest();
});
document.querySelector("#copy-x-button").addEventListener("click", async () => {
  if (!bookingForm.reportValidity()) return;
  const destination = window.open("about:blank", "_blank");
  const copied = await copyRequest();
  if (!copied) {
    destination?.close();
    return;
  }
  const copy = translations[document.documentElement.lang];
  bookingStatus.textContent = copy.xOpened;
  if (destination) destination.location.href = "https://x.com/messages/compose?text=" + encodeURIComponent(lastRequest);
});

const slideshowPools = { hero: 18, lifestyle: 13 };
const slideshowElements = document.querySelectorAll("[data-slideshow]");
const slideshowState = new Map();
function slidePath(pool, index) { return `assets/slideshow/${pool}/${String(index + 1).padStart(2, "0")}.jpg`; }
function setSlide(element, pool, index) {
  const nextPath = slidePath(pool, index % slideshowPools[pool]);
  const commit = () => {
    element.classList.add("is-slideshow-fading");
    window.setTimeout(() => {
      if (element.matches("img")) element.src = nextPath;
      else element.style.backgroundImage = `url("${nextPath}")`;
      element.classList.remove("is-slideshow-fading");
    }, 220);
  };
  if (element.matches("img")) {
    const preload = new Image();
    preload.onload = commit;
    preload.onerror = () => element.classList.remove("is-slideshow-fading");
    preload.src = nextPath;
    return;
  }
  commit();
}
slideshowElements.forEach((element) => {
  const pool = element.dataset.slideshow;
  const offset = Number(element.dataset.slideOffset || 0);
  slideshowState.set(element, offset);
  if (element.matches("img")) element.src = slidePath(pool, offset);
  else element.style.backgroundImage = `url("${slidePath(pool, offset)}")`;
});
window.setInterval(() => {
  slideshowElements.forEach((element) => {
    const pool = element.dataset.slideshow;
    const nextIndex = (slideshowState.get(element) + 1) % slideshowPools[pool];
    slideshowState.set(element, nextIndex);
    setSlide(element, pool, nextIndex);
  });
}, 6000);
