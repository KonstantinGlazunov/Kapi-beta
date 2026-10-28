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
  function normalize(profile) {
    const old = profile.journey;
    profile.journey = { step: Math.max(0, Math.min(3, Math.floor(Number(old?.step) || 0))), sessions: Array.isArray(old?.sessions) ? old.sessions.filter(x => typeof x === 'string').slice(-3) : [] };
    const choices = profile.cosmeticVariants;
    profile.cosmeticVariants = {};
    for (const [reward, options] of Object.entries(variants)) {
      profile.cosmeticVariants[reward] = options.some(x => x.id === choices?.[reward]) ? choices[reward] : options[0].id;
    }
    return profile;
  }
  function complete(profile, session) {
    normalize(profile);
    if (!session.completed || profile.journey.sessions.includes(session.id) || profile.journey.step >= 3) return false;
    profile.journey.step++;
    profile.journey.sessions.push(session.id);
    return true;
  }
  function variant(profile, id) { return variants[id]?.find(x => x.id === profile.cosmeticVariants?.[id]) || variants[id]?.[0]; }
  window.KapiJourney = { variants, copy, normalize, complete, variant };
})();
