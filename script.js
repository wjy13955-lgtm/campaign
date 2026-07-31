const platforms = {
  tiktok: {
    name: 'TikTok', link: 'https://t.webcomicsapp.com/03', title: 'Read more comics👇',
    rules: [
      ['Caption & Hashtag', '✨Tap my BIO link and search [_______] to get name & read✨\n#manhwa #manga #WebComicsApp and other relevant hashtags'],
      ['Pinned Comment', '📚Comic Name: __books code____\n🔥Where to search & read: Read on bio (WebComics app)'],
      ['Tutorial (optional)', '1) Open the WebComics app (not the website)\n2) Type the code in the SEARCH BAR (not “Enter share code” ❌)\n3) Tap the search button\n4) It’ll take you directly to the manhua page!'],
      ['Reply to Comments', '🔺Respond to comments about the code number in the provided sheet; other code numbers won’t be counted.\n📚Comic Name: ______\n🔥Where to search & read: Read on bio (WebComics app)\n🔺Remove comments mentioning names, competitor apps or alternative titles.'],
      ['Romance Book Codes', 'https://docs.google.com/spreadsheets/d/1b4iXMtjpXwlcdgIjcjInz5rEH2aDoDQgfW5YMURkHz8/edit'],
      ['Action Book Codes', 'https://docs.google.com/spreadsheets/d/14DeMjLVsijA4mqtBsrTy1wZr6DPxXvpZ81ClVvBca0U/edit?gid=0#gid=0']
    ]
  },
  instagram: {
    name: 'Instagram Reels', link: 'https://webcomics.app/MqOw', title: 'Read more comics👇',
    rules: [
      ['Caption & Hashtag', '✨Tap my BIO link and search [_______] to get name & read✨\n#manhwa #manga #WebComicsApp and other relevant hashtags'],
      ['Pinned Comment', '📚Comic Name: __books code____\n🔥Where to search & read: Read on bio (WebComics app)'],
      ['Tutorial (optional)', '1) Open the WebComics app (not the website)\n2) Type the code in the SEARCH BAR (not “Enter share code” ❌)\n3) Tap the search button\n4) It’ll take you directly to the manhua page!'],
      ['Reply to Comments', '🔺Respond to comments about the code number in the provided sheet; other code numbers won’t be counted.\n📚Comic Name: ______\n🔥Where to search & read: Read on bio (WebComics app)\n🔺Remove comments mentioning names, competitor apps or alternative titles.'],
      ['Romance Book Codes', 'https://docs.google.com/spreadsheets/d/1b4iXMtjpXwlcdgIjcjInz5rEH2aDoDQgfW5YMURkHz8/edit'],
      ['Action Book Codes', 'https://docs.google.com/spreadsheets/d/14DeMjLVsijA4mqtBsrTy1wZr6DPxXvpZ81ClVvBca0U/edit?gid=0#gid=0']
    ]
  },
  youtube: {
    name: 'YouTube Shorts', link: 'https://webcomics.app/ArfL', title: 'Read more comics 👇',
    rules: [
      ['Caption & Hashtag', '✨Tap my BIO link and search [_______] to get name & read✨\n#manhwa #manga #WebComicsApp and other relevant hashtags'],
      ['Pinned Comment', '📚Comic Name: __books code____\n🔥Where to search & read: Read on bio (WebComics app)'],
      ['Tutorial (optional)', '1) Open the WebComics app (not the website)\n2) Type the code in the SEARCH BAR (not “Enter share code” ❌)\n3) Tap the search button\n4) It’ll take you directly to the manhua page!'],
      ['Reply to Comments', '🔺Respond to comments about the code number in the provided sheet; other code numbers won’t be counted.\n📚Comic Name: ______\n🔥Where to search & read: Read on bio (WebComics app)\n🔺Remove comments mentioning names, competitor apps or alternative titles.'],
      ['Romance Book Codes', 'https://docs.google.com/spreadsheets/d/1b4iXMtjpXwlcdgIjcjInz5rEH2aDoDQgfW5YMURkHz8/edit'],
      ['Action Book Codes', 'https://docs.google.com/spreadsheets/d/14DeMjLVsijA4mqtBsrTy1wZr6DPxXvpZ81ClVvBca0U/edit?gid=0#gid=0']
    ]
  },
  facebook: {
    name: 'Facebook Reels', link: 'https://webcomics.app/vJZz', title: 'Read more comics 👇',
    rules: [
      ['Caption & Hashtag', '✨Read full in my comments link\n✨[Customized Content]\n#manhwa #manga #WebComicsApp and other relevant hashtags\n\n*Make sure the link is in the first sentence.'],
      ['Pinned Comment', '📚Name📖: _______🔥\n📝Chp📖: ______\n📖Tap https://webcomics.app/vJZz to read the full comic'],
      ['Reply to Comments', '🔺Respond to comments about the comic name and chapter.\n“Read on https://webcomics.app/vJZz, Name: xxx”\n🔺Remove comments mentioning competitor apps or alternative titles.'],
      ['Important', 'Post Facebook Reels separately. Do not use Instagram’s “Recommend on Facebook” option.'],
      ['Romance Book Codes', 'https://docs.google.com/spreadsheets/d/1b4iXMtjpXwlcdgIjcjInz5rEH2aDoDQgfW5YMURkHz8/edit'],
      ['Action Book Codes', 'https://docs.google.com/spreadsheets/d/14DeMjLVsijA4mqtBsrTy1wZr6DPxXvpZ81ClVvBca0U/edit?gid=0#gid=0']
    ]
  }
};

const views = document.querySelector('#views');
const region = document.querySelector('#region');
const rateSelect = document.querySelector('#rate-select');
const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
const number = new Intl.NumberFormat('en-US');

function updateEstimate() {
  const total = Number(views.value);
  const share = Number(region.value);
  const rate = Number(rateSelect.value);
  document.querySelector('#views-output').textContent = number.format(total);
  document.querySelector('#region-output').textContent = `${share}%`;
  document.querySelector('#rate-display').textContent = money.format(rate);
  document.querySelector('#rate-format').textContent = rateSelect.selectedOptions[0].dataset.label;
  document.querySelector('#estimate-output').textContent = money.format(total * (share / 100) / 1000 * rate);
  document.querySelector('#estimate-formula').textContent = `views × valid-region share ÷ 1,000 × ${money.format(rate)}`;
}
views.addEventListener('input', updateEstimate);
region.addEventListener('input', updateEstimate);
rateSelect.addEventListener('change', updateEstimate);

const panel = document.querySelector('#platform-panel');
function formatRuleText(value) {
  const escaped = value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return escaped.replace(/https:\/\/\S+/g, url => `<a class="inline-link" href="${url}" target="_blank" rel="noopener">${url}</a>`);
}
function formatRuleBody(title, body) {
  if (title === 'Romance Book Codes' || title === 'Action Book Codes') {
    const label = title === 'Romance Book Codes' ? 'Open Romance Book Codes' : 'Open Action Book Codes';
    return `<a class="book-code-button" href="${body}" target="_blank" rel="noopener"><span>${label}</span><b>↗</b></a>`;
  }
  return formatRuleText(body);
}
function showPlatform(key) {
  const p = platforms[key];
  panel.innerHTML = `<div class="platform-link"><small>Profile link</small><h3>${p.name}</h3><p>${p.title}</p><div class="copy-row"><span>${p.link}</span><button type="button" data-copy="${p.link}">Copy</button></div></div><div class="platform-rules">${p.rules.map(([title, body]) => `<div><h4>${title}</h4><p>${formatRuleBody(title, body)}</p></div>`).join('')}</div>`;
}
showPlatform('tiktok');

document.querySelectorAll('.platform-tabs button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.platform-tabs button').forEach(item => { item.classList.remove('active'); item.setAttribute('aria-selected', 'false'); });
    button.classList.add('active'); button.setAttribute('aria-selected', 'true'); showPlatform(button.dataset.platform);
  });
});

panel.addEventListener('click', async event => {
  const button = event.target.closest('[data-copy]');
  if (!button) return;
  await navigator.clipboard.writeText(button.dataset.copy);
  button.textContent = 'Copied!';
  setTimeout(() => button.textContent = 'Copy', 1600);
});

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#site-nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.addEventListener('click', event => { if (event.target.matches('a')) { nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); } });

// Progressive scroll motion: content remains visible when JavaScript or motion is disabled.
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealTargets = document.querySelectorAll('.section-title, .section-intro, .calculator, .metric-card, .steps-card, .feature-card, .checklist, .platform-tabs, .platform-panel, .timeline article, .notice-grid article, .compliance > div, .cta-section > div');
  revealTargets.forEach((item, index) => {
    item.classList.add('reveal');
    if (index % 3 === 1) item.classList.add('reveal-delay');
  });
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: .12, rootMargin: '0px 0px -6% 0px' });
  revealTargets.forEach(item => revealObserver.observe(item));

  const heroLogo = document.querySelector('.logo-burst');
  window.addEventListener('pointermove', event => {
    if (window.innerWidth < 901 || !heroLogo) return;
    const x = (event.clientX / window.innerWidth - .5) * 8;
    const y = (event.clientY / window.innerHeight - .5) * 8;
    heroLogo.style.marginLeft = `${x}px`;
    heroLogo.style.marginTop = `${y}px`;
  }, { passive: true });
}
