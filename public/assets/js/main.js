const participationLinks = {
  en: 'https://participationindex.eu/en',
  cs: 'https://participationindex.eu/cs-Cz',
  lv: 'https://participationindex.eu/lv',
  sl: 'https://participationindex.eu/sl-Sl',
};

// Add the public brochures here when their final URLs are available.
const ruleLinks = {
  en: null,
  cs: null,
  lv: null,
  sl: null,
};

const gameTitleArt = {
  en: 'assets/img/title-municipo.svg',
  cs: 'assets/img/title-municipo.svg',
  lv: 'assets/img/title-lv.svg',
  sl: 'assets/img/title-municipo.svg',
};

const projectLogos = {
  en: 'assets/img/logo.svg',
  cs: 'assets/img/logo.svg',
  lv: 'assets/img/lv-16plus-logo.png',
  sl: 'assets/img/logo.svg',
};

const translations = {
  en: {
    heroEyebrow: 'Civic participation tools',
    heroTitle: 'Municipality 16+',
    heroText:
      "Two practical tools for improving young people's civic participation competence.",
    gatewayTitle: 'Choose a tool',
    indexNav: 'Participation Index',
    appNav: 'Municipio App',
    participationName: 'Participation Index',
    onlineTool: 'Self-assessment tool',
    participationText:
      'Find out what you know about civic participation mechanisms for young people, how to use them, and what experience you have.',
    participationAction: 'Go to Participation Index',
    gameLabel: 'Civic Participation Trainer',
    gameName: 'Municipio',
    gameText:
      'A board game that encourages players to explore important mechanisms of civic participation.',
    gameAction: 'Explore the game',
    gameDetail:
      'A board game that encourages players to explore important mechanisms of civic participation.',
    back: 'Back to tools',
    rulesTitle: 'Game rules',
    rulesText: 'Download the rules for the board game in your language.',
    rulesUnavailable: 'Rules will be added',
    rulesAction: 'Download rules',
    appTitle: 'Online application',
    appText: 'Play the digital version of the Civic Participation Trainer.',
    appAction: 'Open online application',
    aboutProjectTitle: 'About the project',
    aboutProjectText:
      "Municipality 16+ improves young people's civic participation competence in the use of civic participation mechanisms.",
    projectLink: 'Visit the project website',
    partnersTitle: 'Project partners',
    partnersText:
      'The project was created through an international partnership of organisations working with young people.',
    fundingTitle: 'Project funding',
    fundingText:
      'Co-funded by the Erasmus+ Programme of the European Union.',
    fundingDisclaimer:
      'Funded by the European Union. Views and opinions expressed are however those of the authors only and do not necessarily reflect those of the European Union or the granting authority.',
  },
  cs: {
    heroEyebrow: 'Nástroje občanské participace',
    heroTitle: 'Municipality 16+',
    heroText:
      'Dva praktické nástroje pro rozvoj kompetencí mladých lidí v oblasti občanské participace.',
    gatewayTitle: 'Vyberte si nástroj',
    indexNav: 'Index participace',
    appNav: 'Municipo App',
    participationName: 'Index participace',
    onlineTool: 'Sebehodnoticí nástroj',
    participationText:
      'Zjistěte, jak znáte mechanismy občanské participace pro mladé lidi, jak je umíte využívat a jaké s nimi máte zkušenosti.',
    participationAction: 'Přejít na Index participace',
    gameLabel: 'Trenažér občanské participace',
    gameName: 'Municipo',
    gameText:
      'Objevujte důležité mechanismy občanské participace prostřednictvím deskové hry.',
    gameAction: 'Prozkoumat hru',
    gameDetail:
      'Desková hra, která vybízí hráče k objevování důležitých mechanismů občanské participace.',
    back: 'Zpět na nástroje',
    rulesTitle: 'Pravidla hry',
    rulesText: 'Stáhněte si pravidla deskové hry ve svém jazyce.',
    rulesUnavailable: 'Pravidla budou doplněna',
    rulesAction: 'Stáhnout pravidla',
    appTitle: 'Online aplikace',
    appText: 'Zahrajte si digitální verzi trenažéru občanské participace.',
    appAction: 'Otevřít online aplikaci',
    aboutProjectTitle: 'O projektu',
    aboutProjectText:
      'Cílem projektu Municipality 16+ je zlepšit kompetence mladých lidí v oblasti občanské participace a využívání jejích mechanismů.',
    projectLink: 'Navštívit web projektu',
    partnersTitle: 'Partneři projektu',
    partnersText:
      'Projekt vznikl v mezinárodním partnerství organizací, které pracují s mladými lidmi.',
    fundingTitle: 'Financování projektu',
    fundingText:
      'Spolufinancováno z programu Evropské unie Erasmus+.',
    fundingDisclaimer:
      'Financováno Evropskou unií. Vyjádřené názory a stanoviska jsou však pouze názory autorů a nemusí nutně odrážet názory Evropské unie ani poskytovatele grantu.',
  },
  lv: {
    heroEyebrow: 'Pilsoniskās līdzdalības rīki',
    heroTitle: 'PAŠVALDĪBA 16+',
    heroText:
      'Divi praktiski PAŠVALDĪBA 16+ rīki jauniešu pilsoniskās kompetences stiprināšanai.',
    gatewayTitle: 'Izvēlieties rīku',
    indexNav: 'Līdzdalības Indekss',
    appNav: 'Līdzdalības trenažieris',
    participationName: 'Līdzdalības Indekss',
    onlineTool: 'Pašnovērtējuma rīks',
    participationText:
      'Noskaidro, vai zini un proti izmantot jauniešiem pieejamos līdzdalības mehānismus un kāda ir tava pilsoniskās līdzdalības pieredze.',
    participationAction: 'Doties uz Līdzdalības Indeksu',
    gameLabel: 'Pilsoniskās līdzdalības trenažieris',
    gameName: 'Līdzdalības trenažieris',
    gameText:
      'Izpētiet nozīmīgus pilsoniskās līdzdalības mehānismus galda spēlē.',
    gameAction: 'Izpētīt spēli',
    gameDetail:
      'Galda spēle, kas mudina spēlētājus izpētīt nozīmīgus pilsoniskās līdzdalības mehānismus.',
    back: 'Atpakaļ pie rīkiem',
    rulesTitle: 'Spēles noteikumi',
    rulesText: 'Lejupielādējiet galda spēles noteikumus savā valodā.',
    rulesUnavailable: 'Noteikumi tiks pievienoti',
    rulesAction: 'Lejupielādēt noteikumus',
    appTitle: 'Tiešsaistes lietotne',
    appText: 'Spēlējiet pilsoniskās līdzdalības trenažiera digitālo versiju.',
    appAction: 'Atvērt tiešsaistes lietotni',
    aboutProjectTitle: 'Par projektu',
    aboutProjectText:
      'Projekta PAŠVALDĪBA 16+ mērķis ir pilnveidot izpratni par jauniešiem pieejamiem pilsoniskās līdzdalības mehānismiem un stiprināt pilsonisko kompetenci.',
    projectLink: 'Apmeklēt projekta vietni',
    partnersTitle: 'Projekta partneri',
    partnersText:
      'Projektu izveidoja starptautiska organizāciju partnerība, kas strādā ar jauniešiem.',
    fundingTitle: 'Projekta finansējums',
    fundingText:
      'Līdzfinansēts Eiropas Savienības programmas Erasmus+ ietvaros.',
    fundingDisclaimer:
      'Finansē Eiropas Savienība. Tomēr paustie uzskati un viedokļi ir tikai autoru uzskati un ne vienmēr atspoguļo Eiropas Savienības vai finansējuma piešķīrējas iestādes nostāju.',
  },
  sl: {
    heroEyebrow: 'Orodja za participacijo',
    heroTitle: 'Municipality 16+',
    heroText:
      'Dve praktični orodji za izboljšanje kompetenc mladih na področju participacije.',
    gatewayTitle: 'Izberite orodje',
    indexNav: 'Indeks participacije',
    appNav: 'Municipo App',
    participationName: 'Indeks participacije',
    onlineTool: 'Orodje za samoocenjevanje',
    participationText:
      'Preverite, kako dobro poznate participativne mehanizme za mlade, kako jih uporabljati in kakšne so vaše izkušnje s participacijo.',
    participationAction: 'Pojdi na Indeks participacije',
    gameLabel: 'Trenažer participacije',
    gameName: 'Municipo',
    gameText:
      'Skozi namizno igro raziščite pomembne participativne mehanizme.',
    gameAction: 'Razišči igro',
    gameDetail:
      'Namizna igra, ki igralce spodbuja k raziskovanju pomembnih participativnih mehanizmov.',
    back: 'Nazaj na orodja',
    rulesTitle: 'Pravila igre',
    rulesText: 'Prenesite pravila namizne igre v svojem jeziku.',
    rulesUnavailable: 'Pravila bodo dodana',
    rulesAction: 'Prenesi pravila',
    appTitle: 'Spletna aplikacija',
    appText: 'Igrajte digitalno različico trenažerja participacije.',
    appAction: 'Odpri spletno aplikacijo',
    aboutProjectTitle: 'O projektu',
    aboutProjectText:
      'Cilj projekta Municipality 16+ je izboljšati kompetence mladih na področju participacije in uporabe participativnih mehanizmov.',
    projectLink: 'Obiščite spletno stran projekta',
    partnersTitle: 'Projektni partnerji',
    partnersText:
      'Projekt je nastal v mednarodnem partnerstvu organizacij, ki delajo z mladimi.',
    fundingTitle: 'Financiranje projekta',
    fundingText:
      'Sofinancirano iz programa Evropske unije Erasmus+.',
    fundingDisclaimer:
      'Financira Evropska unija. Izražena stališča in mnenja so izključno stališča avtorjev in ne odražajo nujno stališč Evropske unije ali organa, ki je dodelil sredstva.',
  },
};

const getInitialLanguage = () => {
  const stored = localStorage.getItem('municipality16-language');
  return stored && translations[stored] ? stored : 'en';
};

const updateLanguage = (language) => {
  const copy = translations[language] ?? translations.en;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (copy[key]) {
      element.textContent = copy[key];
    }
  });

  document.querySelectorAll('.participation-link').forEach((link) => {
    link.href = participationLinks[language] ?? participationLinks.en;
  });

  const rulesLink = document.getElementById('rules-link');
  if (rulesLink) {
    const url = ruleLinks[language] ?? ruleLinks.en;
    if (url) {
      rulesLink.href = url;
      rulesLink.target = '_blank';
      rulesLink.rel = 'noopener';
      rulesLink.classList.remove('is-disabled');
      rulesLink.removeAttribute('aria-disabled');
      rulesLink.querySelector('span').textContent = copy.rulesAction;
    }
  }

  const titleArt = document.getElementById('game-title-art');
  if (titleArt) {
    titleArt.src = gameTitleArt[language] ?? gameTitleArt.en;
  }

  const projectLogo = document.getElementById('project-logo');
  if (projectLogo) {
    projectLogo.src = projectLogos[language] ?? projectLogos.en;
  }

  document.documentElement.lang = language;
  document.title =
    document.body.dataset.page === 'game'
      ? `${copy.gameName} | Municipality 16+`
      : 'Municipality 16+';
};

const init = () => {
  const languageSwitcher = document.getElementById('language-switcher');
  const initialLanguage = getInitialLanguage();

  languageSwitcher.value = initialLanguage;
  updateLanguage(initialLanguage);

  languageSwitcher.addEventListener('change', (event) => {
    const language = event.target.value;
    localStorage.setItem('municipality16-language', language);
    updateLanguage(language);
  });
};

document.addEventListener('DOMContentLoaded', init);
