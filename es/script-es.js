const platforms = {
  "tiktok": {
    "name": "TikTok",
    "link": "https://t.webcomicsapp.com/33",
    "title": "Lee más cómics👇",
    "rules": [
      [
        "Texto y hashtags",
        "✨Toca el enlace de mi BIO y busca [_______] para descubrir el nombre y leer✨\n#manhwa #manga #WebComicsApp y otros hashtags relevantes"
      ],
      [
        "Comentario fijado",
        "📚Nombre del cómic: __código del cómic____\n🔥Dónde buscar y leer: En el enlace de mi bio (app WebComics)"
      ],
      [
        "Tutorial (opcional)",
        "1) Abre la app WebComics (no el sitio web)\n2) Toca el botón de búsqueda\n3) ¡Llegarás directamente a la página del manhua!"
      ],
      [
        "Responder comentarios",
        "🔺Responde a los comentarios sobre el código de la hoja facilitada; los demás códigos no se contabilizarán.\n📚Nombre del cómic: ______\n🔥Dónde buscar y leer: En el enlace de mi bio (app WebComics)\n🔺Elimina los comentarios que mencionen nombres, apps competidoras o títulos alternativos."
      ]
    ]
  },
  "instagram": {
    "name": "Instagram Reels",
    "link": "https://webcomics.app/EbcI",
    "title": "Lee más cómics👇",
    "rules": [
      [
        "Texto y hashtags",
        "✨Toca el enlace de mi BIO y busca [_______] para descubrir el nombre y leer✨\n#manhwa #manga #WebComicsApp y otros hashtags relevantes"
      ],
      [
        "Comentario fijado",
        "📚Nombre del cómic: __código del cómic____\n🔥Dónde buscar y leer: En el enlace de mi bio (app WebComics)"
      ],
      [
        "Tutorial (opcional)",
        "1) Abre la app WebComics (no el sitio web)\n2) Toca el botón de búsqueda\n3) ¡Llegarás directamente a la página del manhua!"
      ],
      [
        "Responder comentarios",
        "🔺Responde a los comentarios sobre el código de la hoja facilitada; los demás códigos no se contabilizarán.\n📚Nombre del cómic: ______\n🔥Dónde buscar y leer: En el enlace de mi bio (app WebComics)\n🔺Elimina los comentarios que mencionen nombres, apps competidoras o títulos alternativos."
      ]
    ]
  },
  "youtube": {
    "name": "YouTube Shorts",
    "link": "https://webcomics.app/7eMj",
    "title": "Lee más cómics 👇",
    "rules": [
      [
        "Texto y hashtags",
        "✨Toca el enlace de mi BIO y busca [_______] para descubrir el nombre y leer✨\n#manhwa #manga #WebComicsApp y otros hashtags relevantes"
      ],
      [
        "Comentario fijado",
        "📚Nombre del cómic: __código del cómic____\n🔥Dónde buscar y leer: En el enlace de mi bio (app WebComics)"
      ],
      [
        "Tutorial (opcional)",
        "1) Abre la app WebComics (no el sitio web)\n2) Toca el botón de búsqueda\n3) ¡Llegarás directamente a la página del manhua!"
      ],
      [
        "Responder comentarios",
        "🔺Responde a los comentarios sobre el código de la hoja facilitada; los demás códigos no se contabilizarán.\n📚Nombre del cómic: ______\n🔥Dónde buscar y leer: En el enlace de mi bio (app WebComics)\n🔺Elimina los comentarios que mencionen nombres, apps competidoras o títulos alternativos."
      ]
    ]
  },
  "facebook": {
    "name": "Facebook Reels",
    "link": "https://webcomics.app/jIj0",
    "title": "Lee más cómics 👇",
    "rules": [
      [
        "Texto y hashtags",
        "✨Lee el cómic completo en el enlace de mis comentarios\n✨[Contenido personalizado]\n#manhwa #manga #WebComicsApp y otros hashtags relevantes\n\n*Asegúrate de que el enlace esté en la primera frase."
      ],
      [
        "Comentario fijado",
        "📚Nombre📖: _______🔥\n📝Capítulo📖: ______\n📖Toca https://webcomics.app/jIj0 para leer el cómic completo"
      ],
      [
        "Responder comentarios",
        "🔺Responde a los comentarios sobre el nombre del cómic y el capítulo.\n“Lee en https://webcomics.app/jIj0, nombre: xxx”\n🔺Elimina los comentarios que mencionen apps competidoras o títulos alternativos."
      ],
      [
        "Importante",
        "Publica los Reels de Facebook por separado. No uses la opción “Recommend on Facebook” de Instagram."
      ]
    ]
  }
};

const views = document.querySelector('#views');
const region = document.querySelector('#region');
const rateSelect = document.querySelector('#rate-select');
const money = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'USD' });
const number = new Intl.NumberFormat('es-ES');

function updateEstimate() {
  const total = Number(views.value);
  const share = Number(region.value);
  const rate = Number(rateSelect.value);
  document.querySelector('#views-output').textContent = number.format(total);
  document.querySelector('#region-output').textContent = `${share}%`;
  document.querySelector('#rate-display').textContent = money.format(rate);
  document.querySelector('#rate-format').textContent = rateSelect.selectedOptions[0].dataset.label;
  document.querySelector('#estimate-output').textContent = money.format(total * (share / 100) / 1000 * rate);
  document.querySelector('#estimate-formula').textContent = `reproducciones × proporción válida ÷ 1.000 × ${money.format(rate)}`;
}
views.addEventListener('input', updateEstimate);
region.addEventListener('input', updateEstimate);
rateSelect.addEventListener('change', updateEstimate);

const panel = document.querySelector('#platform-panel');
function formatRuleText(value) {
  const escaped = value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  return escaped.replace(/https:\/\/[a-zA-Z0-9./_-]+/g, url => `<a class="inline-link" href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`).replace(/\n/g, '<br>');
}
function showPlatform(key) {
  const p = platforms[key];
  const bookCodes = ['tiktok', 'instagram', 'youtube'].includes(key)
    ? '<a class="comic-list-link" href="https://docs.google.com/spreadsheets/d/10zHWq3BSsZ8fHFtBH7fb0xfazm_pdmOZF5NeOBNEIlo/edit?gid=0#gid=0" target="_blank" rel="noopener noreferrer"><span>Códigos de los cómics</span><strong>Abrir lista de cómics y códigos ↗</strong><small>Esta lista contiene los códigos de los cómics. Usa el código correspondiente en tus publicaciones.</small></a>'
    : '';
  const linkRow = p.link ? `<div class="copy-row"><span>${p.link}</span><button type="button" data-copy="${p.link}">Copiar</button></div>` : '<div class="copy-row"><span>Usa el enlace promocional exclusivo facilitado por el equipo</span></div>';
  panel.innerHTML = `<div class="platform-link"><small>Enlace del perfil</small><h3>${p.name}</h3><p>${p.title}</p>${linkRow}${bookCodes}</div><div class="platform-rules">${p.rules.map(([title, body]) => `<div><h4>${title}</h4><p>${formatRuleText(body)}</p></div>`).join('')}</div>`;
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
  button.textContent = '¡Copiado!';
  setTimeout(() => button.textContent = 'Copiar', 1600);
});

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#site-nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.addEventListener('click', event => { if (event.target.matches('a')) { nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); } });

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
