(function () {
  'use strict';
  const variants = {
    'neck-scarf': [
      { id: 'berry', asset: 'scarf-berry', ru: 'Ягодный шарф', de: 'Beerentuch' },
      { id: 'sky', asset: 'scarf-sky', ru: 'Звёздный шарф', de: 'Sternentuch' }
    ],
    backpack: [
      { id: 'stars', asset: 'backpack-stars', ru: 'Звёздный рюкзак', de: 'Sternenrucksack' },
      { id: 'forest', asset: 'backpack-forest', ru: 'Походный рюкзак', de: 'Wanderrucksack' }
    ]
  };
  const copy = {
    ru: { title: 'К лесному озеру', places: ['Лесная поляна', 'Лесной мостик', 'Сосновый привал', 'Лесное озеро'],
      next: ['Первая остановка — мостик', 'Перейдём мостик и найдём привал', 'Озеро уже близко', 'Мы добрались до озера!'],
      start: ['В путь!', 'Продолжить путь', 'К озеру!', 'Потренироваться'],
      arrival: ['В путь!', 'Добрались до мостика!', 'Нашли уютный привал!', 'Мы у озера!'],
      choose: 'Выбери снаряжение', take: 'Берём с собой', later: 'Выберу позже', goal: 'Выбрать оформление', preview: 'Будущая вещь', selected: 'Выбрано', home: 'Продолжить путь', lake: 'К озеру', stop: 'К результатам' },
    de: { title: 'Zum Waldsee', places: ['Waldlichtung', 'Waldbrücke', 'Kiefernrast', 'Waldsee'],
      next: ['Erster Halt: die Brücke', 'Über die Brücke zum Rastplatz', 'Der See ist schon ganz nah', 'Wir sind am Waldsee!'],
      start: ['Los geht’s!', 'Weiterreisen', 'Zum See!', 'Trainieren'],
      arrival: ['Los geht’s!', 'An der Brücke angekommen!', 'Ein gemütlicher Rastplatz!', 'Wir sind am See!'],
      choose: 'Wähle deine Ausrüstung', take: 'Nehmen wir mit', later: 'Später auswählen', goal: 'Design auswählen', preview: 'Dein nächster Gegenstand', selected: 'Ausgewählt', home: 'Weiterreisen', lake: 'Zum See', stop: 'Zum Ergebnis' }
  };
  const chapters = [["forest", "К лесному озеру", "Zum Waldsee"], ["river", "Вдоль реки", "Am Fluss entlang"], ["mountains", "В горы", "In die Berge"], ["valley", "Цветущая долина", "Das blühende Tal"], ["coast", "К морю", "Zum Meer"], ["island", "На остров", "Auf die Insel"]];
  const MAX_STEP = 23;
  const additions = {"ru": ["Бобровая плотина", "Камышовая заводь", "Переправа на плоту", "Большой водопад", "Тропа среди скал", "Подвесной мост", "Пещера кристаллов", "Снежная вершина", "Альпийский луг", "Сад бабочек", "Старая мельница", "Деревня фонариков", "Песчаные дюны", "Пляж ракушек", "Бухта черепах", "Маяк на мысе", "Причал с парусником", "Коралловая лагуна", "Тропическая тропа", "Праздничная поляна друзей"], "de": ["Biberdamm", "Schilfbucht", "Floßüberfahrt", "Großer Wasserfall", "Felsenpfad", "Hängebrücke", "Kristallhöhle", "Schneegipfel", "Almwiese", "Schmetterlingsgarten", "Alte Wassermühle", "Laternendorf", "Sanddünen", "Muschelstrand", "Schildkrötenbucht", "Leuchtturm am Kap", "Segelbootsteg", "Korallenlagune", "Tropenpfad", "Festwiese der Freunde"]};
  for (const lang of ['ru','de']) {
    const words = copy[lang], ru = lang === 'ru';
    words.places.push(...additions[lang]);
    words.next = words.places.map((_, i) => i < MAX_STEP
      ? (ru ? 'Дальше: ' : 'Nächster Halt: ') + words.places[i + 1]
      : (ru ? 'Все 24 точки открыты. Друзья ждут новых тренировок!' : 'Alle 24 Orte entdeckt. Die Freunde freuen sich aufs Weiterüben!'));
    words.start = words.places.map((_, i) => i === MAX_STEP ? (ru ? 'Потренироваться' : 'Weiterüben') : (ru ? 'Продолжить путь' : 'Weiterreisen'));
    words.arrival = words.places.map(place => (ru ? 'Мы здесь! ' : 'Angekommen! ') + place);
    words.album = ru ? 'Альбом путешествия' : 'Reisealbum';
    words.postcard = ru ? 'Новая открытка!' : 'Neue Postkarte!';
    words.close = ru ? 'Закрыть' : 'Schließen';
    words.home = ru ? 'Продолжить путь' : 'Weiterreisen';
    words.lake = ru ? 'К путешествию' : 'Zur Reise';
  }
  function chapter(step) { return Math.floor(Math.max(0, Math.min(MAX_STEP, step)) / 4); }
  function scene(step) {
    if (step < 4) return { asset: 'forest-route.png', position: ['5%','38%','63%','100%'][step] + ' 70%', size: 'auto 135%' };
    const cell = step % 4;
    return { asset: chapters[chapter(step)][0] + '-' + cell + '.webp', position: 'center', size: 'cover' };
  }
  function postcards(profile) { return [7,11,15,19,23].filter(step => step <= profile.journey.step); }
  function normalize(profile) {
    const old = profile.journey;
    profile.journey = { step: Math.max(0, Math.min(MAX_STEP, Math.floor(Number(old?.step) || 0))), sessions: Array.isArray(old?.sessions) ? old.sessions.filter(x => typeof x === 'string').slice(-MAX_STEP) : [] };
    const choices = profile.cosmeticVariants;
    profile.cosmeticVariants = {};
    for (const [reward, options] of Object.entries(variants)) {
      profile.cosmeticVariants[reward] = options.some(x => x.id === choices?.[reward]) ? choices[reward] : options[0].id;
    }
    return profile;
  }
  function complete(profile, session) {
    normalize(profile);
    if (!session.completed || profile.journey.sessions.includes(session.id) || profile.journey.step >= MAX_STEP) return false;
    profile.journey.step++;
    profile.journey.sessions.push(session.id);
    return true;
  }
  function variant(profile, id) { return variants[id]?.find(x => x.id === profile.cosmeticVariants?.[id]) || variants[id]?.[0]; }
  window.KapiJourney = { variants, copy, normalize, complete, variant, MAX_STEP, chapters, chapter, scene, postcards };
})();
