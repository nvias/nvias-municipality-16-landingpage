const links = {
  app: 'https://example.com/app',
  downloads: 'https://drive.google.com',
  contact: 'mailto:info@municipio.eu',
};

const translations = {
  en: {
    tagline: 'Co-create your city',
    heroEyebrow: 'Play · Learn · Change',
    heroTitle: 'Municipio empowers young people to redesign their neighbourhoods',
    heroLead:
      'Municipio is a board game and digital toolkit that helps schools and youth organisations explore civic challenges, design inclusive solutions, and collaborate with their communities.',
    heroAppLink: 'Open the web application',
    heroDownloadLink: 'Download materials',
    aboutTitle: 'About the project',
    aboutText:
      'Municipio combines playful learning with real-world impact. The Municipality 16+ partnership co-created the game with educators, municipalities, and young changemakers across Europe to make civic participation tangible, collaborative, and fun.',
    pillarOneTitle: 'Game-based learning',
    pillarOneText:
      'Use storytelling, missions, and role cards inspired by the Municipio board game to explore how cities function and who shapes them.',
    pillarTwoTitle: 'Digital toolkit',
    pillarTwoText:
      'Access a responsive web application with challenge cards, facilitators’ guides, and ready-to-use session plans for hybrid workshops.',
    pillarThreeTitle: 'Community impact',
    pillarThreeText:
      'Prototype solutions for local issues together with students, teachers, and municipal leaders, and keep the momentum with downloadable resources.',
    howTitle: 'How Municipio sessions work',
    howIntro:
      'Each activity is designed to mirror the colourful energy of the Municipio universe—blending the board game aesthetic with digital-first collaboration.',
    stepOneTitle: 'Discover',
    stepOneText: 'Set the scene with the game board, place pins around the city, and identify community needs through playful scenarios.',
    stepTwoTitle: 'Design',
    stepTwoText: 'Use the web application to unlock missions, brainstorm inclusive ideas, and iterate on prototypes with rapid feedback.',
    stepThreeTitle: 'Activate',
    stepThreeText: 'Share action plans with local partners, download handouts, and launch real initiatives in your town or school.',
    ctaTitle: 'Ready to bring Municipio to your community?',
    ctaText: 'Start with the digital app or download the facilitation toolkit to run your own Municipio lab.',
    ctaAppLink: 'Launch the app',
    ctaDownloadLink: 'Get the download pack',
    footerText: 'A Municipality 16+ collaboration powered by nvias.org and partners across Europe.',
    footerAppLink: 'Municipio web application',
    footerDownloadLink: 'Downloadable resources',
    footerContactLink: 'Contact the team',
  },
  cs: {
    tagline: 'Spoluvytvářej své město',
    heroEyebrow: 'Hraj · Uč se · Měň',
    heroTitle: 'Municipio dává mladým lidem sílu přetvářet své okolí',
    heroLead:
      'Municipio je desková hra a digitální nástroje, které školám i organizacím práce s mládeží pomáhají zkoumat občanské výzvy, navrhovat inkluzivní řešení a spolupracovat s komunitou.',
    heroAppLink: 'Otevřít webovou aplikaci',
    heroDownloadLink: 'Stáhnout materiály',
    aboutTitle: 'O projektu',
    aboutText:
      'Municipio propojuje hravé učení se skutečným dopadem. Partnerství Municipality 16+ vytvořilo hru společně s učiteli, městy a mladými inovátory po celé Evropě, aby byla občanská participace hmatatelná, spolupracující a zábavná.',
    pillarOneTitle: 'Učení hrou',
    pillarOneText:
      'Vyprávějte příběhy, plňte mise a používejte role inspirované deskovou hrou Municipio, abyste lépe pochopili, jak města fungují a kdo je utváří.',
    pillarTwoTitle: 'Digitální balíček',
    pillarTwoText:
      'Získejte responzivní webovou aplikaci s kartami výzev, metodikami a hotovými scénáři pro hybridní workshopy.',
    pillarThreeTitle: 'Dopad na komunitu',
    pillarThreeText:
      'Společně se studenty, učiteli a zástupci města prototypujte řešení místních problémů a pokračujte díky dostupným podkladům.',
    howTitle: 'Jak probíhá setkání Municipio',
    howIntro:
      'Každá aktivita navazuje na energii barevného světa Municipio – propojuje estetiku deskové hry s digitální spoluprací.',
    stepOneTitle: 'Objevuj',
    stepOneText: 'Připrav herní plán, rozmísti piny po městě a pomocí hravých scénářů pojmenuj potřeby komunity.',
    stepTwoTitle: 'Navrhuj',
    stepTwoText: 'V aplikaci odemykej mise, vymýšlej inkluzivní nápady a rychle je prototypuj díky zpětné vazbě.',
    stepThreeTitle: 'Aktivuj',
    stepThreeText: 'Sdílej akční plány s lokálními partnery, stahuj podklady a spouštěj reálné iniciativy ve škole i ve městě.',
    ctaTitle: 'Připraveni přinést Municipio do své komunity?',
    ctaText: 'Začni digitální aplikací nebo si stáhni metodický balíček a zorganizuj vlastní Municipio lab.',
    ctaAppLink: 'Spustit aplikaci',
    ctaDownloadLink: 'Získat balíček ke stažení',
    footerText: 'Spolupráce Municipality 16+ za podpory nvias.org a partnerů po celé Evropě.',
    footerAppLink: 'Webová aplikace Municipio',
    footerDownloadLink: 'Materiály ke stažení',
    footerContactLink: 'Kontaktujte tým',
  },
  lv: {
    tagline: 'Līdzradī savu pilsētu',
    heroEyebrow: 'Spēlē · Mācies · Pārveido',
    heroTitle: 'Municipio iedrošina jauniešus pārveidot savu apkārtni',
    heroLead:
      'Municipio ir galda spēle un digitāls rīkkopums, kas palīdz skolām un jaunatnes organizācijām pētīt pilsoniskos izaicinājumus, veidot iekļaujošus risinājumus un sadarboties ar kopienām.',
    heroAppLink: 'Atvērt tīmekļa lietotni',
    heroDownloadLink: 'Lejupielādēt materiālus',
    aboutTitle: 'Par projektu',
    aboutText:
      'Municipio apvieno rotaļīgu mācīšanos ar reālu ietekmi. Municipality 16+ partnerība kopā ar pedagogiem, pašvaldībām un jaunajiem līderiem visā Eiropā radīja spēli, kas padara pilsonisko līdzdalību taustāmu, sadarbības pilnu un aizraujošu.',
    pillarOneTitle: 'Spēļmācība',
    pillarOneText:
      'Izmanto stāstniecību, misijas un lomu kārtis, ko iedvesmojusi Municipio galda spēle, lai izprastu pilsētas darbību un tās veidotājus.',
    pillarTwoTitle: 'Digitālie rīki',
    pillarTwoText:
      'Piekļūsti atsaucīgai tīmekļa lietotnei ar izaicinājumu kartītēm, vadlīnijām un gataviem nodarbību scenārijiem hibrīddarbnīcām.',
    pillarThreeTitle: 'Kopienas ietekme',
    pillarThreeText:
      'Kopā ar skolēniem, skolotājiem un pašvaldībām prototipē risinājumus vietējiem jautājumiem un uzturi virzību ar lejupielādējamiem resursiem.',
    howTitle: 'Kā norisinās Municipio sesijas',
    howIntro:
      'Katra aktivitāte iemieso krāsaino Municipio pasauli – apvienojot galda spēles estētiku ar digitālo sadarbību.',
    stepOneTitle: 'Atklāj',
    stepOneText: 'Izvieto spēles laukumu, novieto atzīmes pilsētā un rotaļīgā veidā apzinies kopienas vajadzības.',
    stepTwoTitle: 'Veido',
    stepTwoText: 'Lietotnē atslēdz misijas, ģenerē iekļaujošas idejas un ātri tās pārbaudi ar atgriezenisko saiti.',
    stepThreeTitle: 'Iedaribini',
    stepThreeText: 'Dalies ar rīcības plāniem, lejupielādē izdales materiālus un uzsāc reālas iniciatīvas savā pilsētā vai skolā.',
    ctaTitle: 'Gatavi ieviest Municipio savā kopienā?',
    ctaText: 'Sāc ar digitālo lietotni vai lejupielādē rīkkopu, lai vadītu savu Municipio darbnīcu.',
    ctaAppLink: 'Palaist lietotni',
    ctaDownloadLink: 'Saņemt lejupielādes komplektu',
    footerText: 'Municipality 16+ sadarbība ar nvias.org un partneriem visā Eiropā.',
    footerAppLink: 'Municipio tīmekļa lietotne',
    footerDownloadLink: 'Resursi lejupielādei',
    footerContactLink: 'Sazinies ar komandu',
  },
  sl: {
    tagline: 'Sooblikuj svoje mesto',
    heroEyebrow: 'Igraj · Uči se · Spreminjaj',
    heroTitle: 'Municipio mladim daje orodja, da preoblikujejo svojo skupnost',
    heroLead:
      'Municipio je namizna igra in digitalni komplet orodij, ki šolam ter mladinskim organizacijam pomaga raziskovati družbene izzive, soustvarjati vključujoče rešitve in graditi partnerstva v lokalnem okolju.',
    heroAppLink: 'Odpri spletno aplikacijo',
    heroDownloadLink: 'Prenesi gradiva',
    aboutTitle: 'O projektu',
    aboutText:
      'Municipio povezuje igrivo učenje z resničnim vplivom. Partnerstvo Municipality 16+ je skupaj z učitelji, občinami in mladimi ustvarjalci po vsej Evropi zasnovalo igro, ki omogoča oprijemljivo, sodelovalno in zabavno državljansko udejstvovanje.',
    pillarOneTitle: 'Učenje skozi igro',
    pillarOneText:
      'Uporabite pripovedovanje zgodb, misije in vloge, ki jih navdihuje namizna igra Municipio, ter spoznajte, kako mesta delujejo in kdo jih oblikuje.',
    pillarTwoTitle: 'Digitalni komplet',
    pillarTwoText:
      'Dostopajte do odzivne spletne aplikacije z izzivnimi karticami, vodniki za facilitatorje in pripravljenimi načrti delavnic.',
    pillarThreeTitle: 'Vpliv na skupnost',
    pillarThreeText:
      'Skupaj z učenci, mentorji in predstavniki občin prototipirajte rešitve za lokalne izzive in nadaljujte delo s podporo prenesenih gradiv.',
    howTitle: 'Kako potekajo srečanja Municipio',
    howIntro:
      'Vsaka aktivnost odraža barvito estetiko sveta Municipio – združuje videz namizne igre in digitalno sodelovanje.',
    stepOneTitle: 'Odkrij',
    stepOneText: 'Pripravite igralno ploščo, razporedite označevalce po mestu in skozi igrive scenarije spoznajte potrebe skupnosti.',
    stepTwoTitle: 'Oblikuj',
    stepTwoText: 'V spletni aplikaciji odklenite misije, soustvarjajte vključujoče ideje in jih hitro izpopolnite s povratnimi informacijami.',
    stepThreeTitle: 'Oživi',
    stepThreeText: 'Delite akcijske načrte z lokalnimi partnerji, prenesite gradiva in začnite resnične pobude v šoli ali mestu.',
    ctaTitle: 'Ste pripravljeni prinesti Municipio v svojo skupnost?',
    ctaText: 'Začnite s spletno aplikacijo ali prenesite paket za vodenje lastnega Municipio laboratorija.',
    ctaAppLink: 'Zaženi aplikacijo',
    ctaDownloadLink: 'Prenesi paket gradiv',
    footerText: 'Partnerstvo Municipality 16+ v sodelovanju z nvias.org in partnerji po Evropi.',
    footerAppLink: 'Spletna aplikacija Municipio',
    footerDownloadLink: 'Gradiva za prenos',
    footerContactLink: 'Kontaktiraj ekipo',
  },
};

const textElements = {
  tagline: document.getElementById('tagline'),
  heroEyebrow: document.getElementById('heroEyebrow'),
  heroTitle: document.getElementById('heroTitle'),
  heroLead: document.getElementById('heroLead'),
  heroAppLink: document.getElementById('heroAppLink'),
  heroDownloadLink: document.getElementById('heroDownloadLink'),
  aboutTitle: document.getElementById('aboutTitle'),
  aboutText: document.getElementById('aboutText'),
  pillarOneTitle: document.getElementById('pillarOneTitle'),
  pillarOneText: document.getElementById('pillarOneText'),
  pillarTwoTitle: document.getElementById('pillarTwoTitle'),
  pillarTwoText: document.getElementById('pillarTwoText'),
  pillarThreeTitle: document.getElementById('pillarThreeTitle'),
  pillarThreeText: document.getElementById('pillarThreeText'),
  howTitle: document.getElementById('howTitle'),
  howIntro: document.getElementById('howIntro'),
  stepOneTitle: document.getElementById('stepOneTitle'),
  stepOneText: document.getElementById('stepOneText'),
  stepTwoTitle: document.getElementById('stepTwoTitle'),
  stepTwoText: document.getElementById('stepTwoText'),
  stepThreeTitle: document.getElementById('stepThreeTitle'),
  stepThreeText: document.getElementById('stepThreeText'),
  ctaTitle: document.getElementById('ctaTitle'),
  ctaText: document.getElementById('ctaText'),
  ctaAppLink: document.getElementById('ctaAppLink'),
  ctaDownloadLink: document.getElementById('ctaDownloadLink'),
  footerText: document.getElementById('footerText'),
  footerAppLink: document.getElementById('footerAppLink'),
  footerDownloadLink: document.getElementById('footerDownloadLink'),
  footerContactLink: document.getElementById('footerContactLink'),
};

const linkElements = [
  document.getElementById('navAppLink'),
  document.getElementById('navDownloadLink'),
  document.getElementById('heroAppLink'),
  document.getElementById('heroDownloadLink'),
  document.getElementById('ctaAppLink'),
  document.getElementById('ctaDownloadLink'),
  document.getElementById('footerAppLink'),
  document.getElementById('footerDownloadLink'),
  document.getElementById('footerContactLink'),
];

const updateLanguage = (language) => {
  const copy = translations[language] ?? translations.en;
  Object.entries(textElements).forEach(([key, element]) => {
    if (element && copy[key]) {
      element.textContent = copy[key];
    }
  });
};

const applyLinks = () => {
  linkElements.forEach((element) => {
    if (!element) return;
    const id = element.id.toLowerCase();
    if (id.includes('app')) {
      element.href = links.app;
    } else if (id.includes('download')) {
      element.href = links.downloads;
    } else if (id.includes('contact')) {
      element.href = links.contact;
    }
  });
};

const languageSwitcher = document.getElementById('language-switcher');

languageSwitcher.addEventListener('change', (event) => {
  const selected = event.target.value;
  updateLanguage(selected);
  localStorage.setItem('municipio-lang', selected);
  document.documentElement.lang = selected;
});

const init = () => {
  applyLinks();
  const stored = localStorage.getItem('municipio-lang');
  const initial = stored && translations[stored] ? stored : 'en';
  languageSwitcher.value = initial;
  updateLanguage(initial);
  document.documentElement.lang = initial;
};

document.addEventListener('DOMContentLoaded', init);
