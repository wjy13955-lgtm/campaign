const platforms = {
  tiktok: {
    name: 'TikTok', link: 'https://t.webcomicsapp.com/03', title: 'Read more comics👇',
    rules: [
      ['Caption & hashtag', '[Customized content]\n🎉 Read on bio\n💜 Name: [Full comic name]\n#manhwa #manga #WebComicsApp'],
      ['Comment', 'Pin a “Read on bio” comment with the full comic name.'],
      ['Replies', 'Answer questions about the comic name and chapter. Direct readers to your bio.'],
      ['Moderation', 'Remove comments mentioning competitor apps or alternative titles.']
    ]
  },
  instagram: {
    name: 'Instagram Reels', link: 'https://webcomics.app/MqOw', title: 'Read more comics👇',
    rules: [
      ['Caption & hashtag', '✨ Tap my BIO link and search [code] ✨\n#manhwa #manga #WebComicsApp'],
      ['Pinned comment', 'Add the comic name, reading location and the four-step in-app search tutorial.'],
      ['Replies', 'Reply with the code number provided in the official sheet.'],
      ['Moderation', 'Remove comments mentioning comic names, competitors or alternative titles.']
    ]
  },
  youtube: {
    name: 'YouTube Shorts', link: 'https://webcomics.app/ArfL', title: 'Read more comics 👇',
    rules: [
      ['Caption & hashtag', 'Put the fixed CTA in the first two lines. Add the comic name and relevant hashtags.'],
      ['Description', 'Comic Name: ______'],
      ['Pinned comment', 'Add the comic name and direct viewers to the homepage link.'],
      ['Replies', 'Answer questions about the comic name and chapter; remove competitor mentions.']
    ]
  },
  facebook: {
    name: 'Facebook Reels', link: 'https://webcomics.app/vJZz', title: 'Read more comics 👇',
    rules: [
      ['Caption & hashtag', '✨ Read full in my comments link\n✨ Name: [comic]\n#manhwa #manga #WebComicsApp'],
      ['Pinned comment', 'Add comic name, chapter and the full reading link.'],
      ['Replies', 'Reply with the WebComics link, comic name and chapter.'],
      ['Important', 'Post Facebook Reels separately. Do not use Instagram’s “Recommend on Facebook” option.']
    ]
  }
};

const views = document.querySelector('#views');
const region = document.querySelector('#region');
const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
const number = new Intl.NumberFormat('en-US');

function updateEstimate() {
  const total = Number(views.value);
  const share = Number(region.value);
  document.querySelector('#views-output').textContent = number.format(total);
  document.querySelector('#region-output').textContent = `${share}%`;
  document.querySelector('#estimate-output').textContent = money.format(total * (share / 100) / 1000 * .8);
}
views.addEventListener('input', updateEstimate);
region.addEventListener('input', updateEstimate);

const panel = document.querySelector('#platform-panel');
function showPlatform(key) {
  const p = platforms[key];
  panel.innerHTML = `<div class="platform-link"><small>Profile link</small><h3>${p.name}</h3><p>${p.title}</p><div class="copy-row"><span>${p.link}</span><button type="button" data-copy="${p.link}">Copy</button></div></div><div class="platform-rules">${p.rules.map(([title, body]) => `<div><h4>${title}</h4><p>${body}</p></div>`).join('')}</div>`;
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
