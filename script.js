document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    document.body.dataset.lastAction = link.getAttribute('href');
  });
});

const translations = {
  de: {
    title: "LARA CUMKITTEN — Deine neue Obsession",
    description: "Lara Cumkitten — dominante Fitnessliebhaberin, US-Car-Fan und Katzenmama aus Deutschland. Cam- und Telefon-Sessions, fertige Fotos und Videos sowie Custom Content.",
    ogDescription: "Folge Lara auf X für Cam- und Telefon-Sessions, fertige Fotos und Videos sowie Custom Content.",
    homeLabel: "Lara Cumkittens Startseite",
    switchLabel: "Zu Englisch wechseln",
    live: "LIVE AUF X",
    eyebrow: "LARA CUMKITTEN / 34 / DEUTSCHLAND",
    heroTitle: "DEINE NEUE<br /><em>OBSESSION</em>",
    heroSub: "Leggingsleben. Fitnessliebe. US-Car-Fan. Katzenmama.",
    heroButton: "FIND DEINE SESSION",
    portraitLabel: "Lara Cumkitten auf einem Porträt",
    portraitAlt: "Lara Cumkitten",
    manifestoTitle: "SO EIN GUTES<br /><span>LEBEN</span><br />IST NICHT GRATIS",
    manifestoCopy: "Leggings, Gym, schnelle Autos und Katzen. Auf X zeige ich dir meine Welt. Willst du mehr, verdien dir den näheren Zugang: Cam- und Telefon-Sessions, fertige Fotos und Videos oder Custom Content ganz nach deiner Vorstellung.",
    feedLink: "BETRITT MEINEN FEED",
    attentionTitle: "DU WILLST<br /><em>MEINE AUFMERKSAMKEIT?</em>",
    attentionCommand: "VERDIEN SIE DIR.",
    obey: "GEHORCHE",
    submit: "UNTERWIRF DICH",
    prove: "BEWEIS DICH",
    themes: "Rot: Öffentliche Entblößung. Blau: Finanzieller Druck. Gelb: Gehorsamstraining. Grün: Der ultimative Mindfuck. Lila: Totale Unterwerfung. Schwarz: Demütigungsspiel. Weiß: Popper- oder Aufgaben-Session.",
    tributeTitle: "WÄHL<br /><em>DEIN</em><br />TRIBUT",
    tributeIntro: "Cam- und Telefon-Sessions<br /><strong>Fertige Fotos und Videos<br />Custom Content nach deinem Wunsch</strong>",
    camName: "CAM-SESSIONS",
    camNote: "Komm in meine private Show.",
    callName: "TELEFON-SESSIONS",
    callNote: "Hör genau, was ich von dir erwarte.",
    photoName: "FERTIGE FOTOS",
    photoNote: "Such dir deinen Favoriten aus.",
    videoName: "FERTIGE VIDEOS",
    videoNote: "Finde deine nächste Obsession.",
    customName: "MAẞGESCHNEIDERTER CONTENT",
    customNote: "Sag mir, was ich nur für dich machen soll.",
    specialName: "SONDER-SESSIONS",
    specialNote: "Exposition, Training, Aufgaben und mehr.",
    lifestyleTitle: "DAS LEBEN,<br /><em>DAS DU</em><br />FINANZIERST",
    lifestyleCopy: "Ein kleiner Einblick in meine Welt<br />Fitness, Leggings, schnelle Autos und alles, was ich liebe.",
    directContact: "DIREKTKONTAKT",
    messageTitle: "SCHREIB<br /><em>LARA</em>",
    messageX: "SCHREIB MIR AUF X",
    followTitle: "DEINE NEUE<br /><em>OBSESSION</em>",
    followCopy: "34. Deutschland. Fitnessfan, US-Car-Fan und Katzenmama.<br />Folge mir und schreib mir, um deine Session oder deinen Content zu vereinbaren.",
    followLink: "FOLGE @LARACUMKITTENOF",
    footerTagline: "DEINE NEUE OBSESSION",
    footerFollow: "X / FOLGEN & ANFRAGEN",
    footerCam: "CAM & TELEFON",
    footerMedia: "FOTOS & VIDEOS",
    footerCustom: "CUSTOM CONTENT",
    footerSpecial: "SONDER-SESSIONS",
    footerLast: "DU EXISTIERST NUR, DAMIT ICH REICHER WERDE",
    legal: "AB 18 / ADULT-PERSONA / ALLE LINKS FÜHREN NACH EXTERN",
  },
  en: {
    title: "LARA CUMKITTEN — Your New Obsession",
    description: "Lara Cumkitten — dominant fitness lover, US car lover, and cat mom from Germany. Cam and call sessions, premade photos and videos, and custom content.",
    ogDescription: "Follow Lara on X for cam and call sessions, premade photos and videos, and custom content.",
    homeLabel: "Lara Cumkitten home",
    switchLabel: "Switch to German",
    live: "LIVE FROM X",
    eyebrow: "LARA CUMKITTEN / 34 / GERMANY",
    heroTitle: "YOUR NEW<br /><em>OBSESSION</em>",
    heroSub: "Leggings life. Fitness love. US car lover. Cat mom.",
    heroButton: "FIND YOUR SESSION",
    portraitLabel: "Lara Cumkitten in a portrait",
    portraitAlt: "Lara Cumkitten",
    manifestoTitle: "A LIFE THIS<br /><span>GOOD</span><br />ISN'T FREE",
    manifestoCopy: "Leggings, the gym, fast cars, and cats. Follow my world on X, then earn a closer look with cam and call sessions, premade photos and videos, or custom content made for you.",
    feedLink: "ENTER THE FEED",
    attentionTitle: "YOU WANT<br /><em>MY ATTENTION?</em>",
    attentionCommand: "EARN IT.",
    obey: "OBEY",
    submit: "SUBMIT",
    prove: "PROVE YOURSELF",
    themes: "Red: Public Exposure. Blue: Financial Strain. Yellow: Obedience Training. Green: Ultimate Mindfuck. Purple: Total Submission. Black: Humiliation Game. White: Popper / Task Session.",
    tributeTitle: "CHOOSE<br /><em>YOUR</em><br />TRIBUTE",
    tributeIntro: "Cam and call sessions<br /><strong>Premade photos and videos<br />Custom content made for you</strong>",
    camName: "CAM SESSIONS",
    camNote: "Step into my private show.",
    callName: "CALL SESSIONS",
    callNote: "Hear exactly what I expect.",
    photoName: "PREMADE PHOTOS",
    photoNote: "Choose a favorite from my collection.",
    videoName: "PREMADE VIDEOS",
    videoNote: "Find your next obsession.",
    customName: "CUSTOM CONTENT",
    customNote: "Tell me what you want made for you.",
    specialName: "SPECIAL SESSIONS",
    specialNote: "Exposure, training, tasks, and more.",
    lifestyleTitle: "THE LIFE<br /><em>YOU PAY</em><br />FOR",
    lifestyleCopy: "A glimpse into my world<br />Fitness, leggings, fast cars, and everything I love.",
    directContact: "DIRECT CONTACT",
    messageTitle: "MESSAGE<br /><em>LARA</em>",
    messageX: "MESSAGE ME ON X",
    followTitle: "YOUR NEW<br /><em>OBSESSION</em>",
    followCopy: "34. Germany. Fitness lover, US car lover, and cat mom.<br />Follow along and message me to arrange your session or content.",
    followLink: "FOLLOW @LARACUMKITTENOF",
    footerTagline: "YOUR NEW OBSESSION",
    footerFollow: "X / FOLLOW & INQUIRIES",
    footerCam: "CAM & CALLS",
    footerMedia: "PHOTOS & VIDEOS",
    footerCustom: "CUSTOM CONTENT",
    footerSpecial: "SPECIAL SESSIONS",
    footerLast: "YOU ONLY EXIST TO MAKE ME RICHER",
    legal: "18+ / ADULT PERSONA / ALL LINKS OPEN EXTERNALLY",
  },
};

const languageToggle = document.querySelector("#language-toggle");

function setLanguage(language) {
  const copy = translations[language];
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.innerHTML = copy[element.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", copy[element.dataset.i18nAria]);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.alt = copy[element.dataset.i18nAlt];
  });
  document.querySelector('[data-i18n-meta="description"]').content = copy.description;
  document.querySelector('[data-i18n-meta="ogDescription"]').content = copy.ogDescription;
  document.querySelectorAll('[data-i18n-meta="title"]').forEach((element) => {
    if (element instanceof HTMLMetaElement) element.content = copy.title;
    else element.textContent = copy.title;
  });
  languageToggle.textContent = language === "de" ? "EN" : "DE";
  languageToggle.setAttribute("aria-label", copy.switchLabel);
  languageToggle.lang = language === "de" ? "en" : "de";
}

languageToggle.addEventListener("click", () => {
  setLanguage(document.documentElement.lang === "de" ? "en" : "de");
});

const slideshowPools = {
  hero: 17,
  lifestyle: 13,
};

const slideshowElements = document.querySelectorAll('[data-slideshow]');
const slideshowState = new Map();

function slidePath(pool, index) {
  return `assets/slideshow/${pool}/${String(index + 1).padStart(2, "0")}.jpg`;
}

function setSlide(element, pool, index) {
  const nextPath = slidePath(pool, index % slideshowPools[pool]);
  const commit = () => {
    element.classList.add("is-slideshow-fading");
    window.setTimeout(() => {
      if (element.matches("img")) {
        element.src = nextPath;
      } else {
        element.style.backgroundImage = `url("${nextPath}")`;
      }
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

  if (element.matches("img")) {
    element.src = slidePath(pool, offset);
  } else {
    element.style.backgroundImage = `url("${slidePath(pool, offset)}")`;
  }
});

window.setInterval(() => {
  slideshowElements.forEach((element) => {
    const pool = element.dataset.slideshow;
    const nextIndex = (slideshowState.get(element) + 1) % slideshowPools[pool];
    slideshowState.set(element, nextIndex);
    setSlide(element, pool, nextIndex);
  });
}, 6000);
