/* Bottom site sections: Projects, Reviews, FAQ, Contact (booking), Footer. */
(() => {
const { Button: B2, Badge: Bd2, Wordmark: WM2, ReviewCard: RC2, Accordion: AC2 } = window.DesignSystem_9c3c7d;
const UI2 = window.Icon;

/* ---------- Projects (grid + lightbox) ---------- */
function Projects() {
  const BASE = './assets/gallery/';
  const NUMS = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106];
  const all = [...NUMS].reverse().map(n => `${BASE}gallery-${n}.jpg`);
  const [expanded, setExpanded] = React.useState(false);
  const [lb, setLb] = React.useState(null); // lightbox index or null
  const visible = expanded ? all : all.slice(0, 6);

  React.useEffect(() => {
    if (lb === null) return;
    const handler = (e) => {
      if (e.key === 'Escape') setLb(null);
      if (e.key === 'ArrowLeft') setLb(i => (i > 0 ? i - 1 : all.length - 1));
      if (e.key === 'ArrowRight') setLb(i => (i < all.length - 1 ? i + 1 : 0));
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lb]);

  React.useEffect(() => {
    document.body.style.overflow = lb !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lb]);

  const btnBase = { position: 'absolute', top: '50%', transform: 'translateY(-50%)', width: 48, height: 48, borderRadius: '50%', border: 'none', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(4px)', color: '#fff', fontSize: 24, cursor: 'pointer', display: 'grid', placeItems: 'center', lineHeight: 1 };

  return (
    <section id="projects" style={{ maxWidth: 1180, margin: '0 auto', padding: '80px 24px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, marginBottom: 36, flexWrap: 'wrap' }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Portfolio</div>
          <h2 style={{ fontSize: 'var(--text-3xl)', margin: 0 }}>Projekte und Beispielarbeiten</h2>
        </div>
        <Bd2 variant="neutral" size="md">120+ abgeschlossene Aufgaben</Bd2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 16 }} className="proj-grid">
        {visible.map((src, i) => (
          <div key={i} onClick={() => setLb(i)} className="proj-item" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', aspectRatio: '4/3', background: 'var(--paper-100)', boxShadow: 'var(--shadow-card)', cursor: 'pointer' }}>
            <img src={src} alt={`Projekt ${i + 1}`} className="proj-item-img" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <B2 variant="secondary" size="lg" onClick={() => setExpanded(e => !e)}>
          {expanded ? 'Weniger Fotos' : 'Mehr Fotos'}
        </B2>
      </div>

      {lb !== null && (
        <div onClick={() => setLb(null)} style={{ position: 'fixed', inset: 0, zIndex: 300, background: 'rgba(14,11,8,0.9)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <button onClick={(e) => { e.stopPropagation(); setLb(null); }} style={{ position: 'absolute', top: 20, right: 20, width: 44, height: 44, borderRadius: '50%', border: 'none', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(4px)', color: '#fff', fontSize: 20, cursor: 'pointer', display: 'grid', placeItems: 'center' }}>✕</button>
          <button onClick={(e) => { e.stopPropagation(); setLb(i => (i > 0 ? i - 1 : all.length - 1)); }} style={{ ...btnBase, left: 20 }}>‹</button>
          <img
            src={all[lb]}
            alt={`Projekt ${lb + 1}`}
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: 'min(900px, 92vw)', maxHeight: '88vh', objectFit: 'contain', borderRadius: 8, boxShadow: '0 8px 48px rgba(0,0,0,0.6)', display: 'block' }}
          />
          <button onClick={(e) => { e.stopPropagation(); setLb(i => (i < all.length - 1 ? i + 1 : 0)); }} style={{ ...btnBase, right: 20 }}>›</button>
          <div style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.55)', fontSize: 13 }}>{lb + 1} / {all.length}</div>
        </div>
      )}
    </section>
  );
}

/* ---------- Service Area (map) ---------- */
function ServiceArea() {
  return (
    <section id="standorte" style={{ background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '80px 24px' }}>
        <div className="eyebrow" style={{ marginBottom: 14 }}>Servicegebiet</div>
        <h2 style={{ fontSize: 'var(--text-3xl)', maxWidth: '20ch', margin: '0 0 36px' }}>Wo wir für Sie arbeiten</h2>
        <div className="area-grid" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 24, alignItems: 'stretch' }}>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 32, boxShadow: 'var(--shadow-card)', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-2xl)', color: 'var(--text-strong)', margin: '0 0 18px' }}>Oberhausen und das Ruhrgebiet</h3>
            <p style={{ color: 'var(--text-muted)', margin: 0 }}>
              Wir arbeiten in Oberhausen und im gesamten Ruhrgebiet. Häufige Einsatzorte: Essen, Duisburg, Mülheim an der Ruhr, Düsseldorf, Bottrop, Gelsenkirchen, Bochum, Ratingen, Dinslaken, Moers und Köln.
            </p>
            <a href="https://www.google.com/maps?q=Hausmeister-+und+Handwerksservice,+Vestische+Str.+184,+46145+Oberhausen&ftid=0x47b8eb4693c46823:0x87289737505445bc&entry=gps&lucs=,94284475,47071704,94218641&g_ep=CAISDTYuMTI0LjEuNzM0NDAYACCs3wEqGyw5NDI4NDQ3NSw0NzA3MTcwNCw5NDIxODY0MUICREU%3D&skid=c7539dc4-4460-4024-9a5d-6d695e5597a9&g_st=iwb" target="_blank" rel="noopener noreferrer" style={{ marginTop: 'auto', paddingTop: 22 }}>
              <B2 variant="secondary" size="lg" fullWidth>Karte öffnen</B2>
            </a>
          </div>
          <div className="area-map-img" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: 'var(--shadow-card)', minHeight: 380, background: 'var(--paper-100)' }}>
            <img src="./assets/photos/service-area-map.png" alt="Servicegebiet im Ruhrgebiet" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Reviews ---------- */
function Reviews() {
  const data = [
    { name: 'Вика Мит', role: 'Montage von Türen', quote: 'Tür professionell und schnell eingebaut. Vielen Dank!' },
    { name: 'Artyom', role: 'Sanitär & Geräteanschluss', quote: 'Sehr guter Hausmeister. Wasserhahn und Waschmaschine schnell erledigt. Zuverlässig und freundlich.' },
    { name: 'Ellen Habarat', role: 'Faire Arbeit', quote: 'Schnell, professionell, faire Preise. Werde nur noch diese Firma beauftragen!' },
    { name: 'Вика Виктоша', role: 'Hochwertige Arbeit', quote: 'Alles sorgfältig und hochwertig gemacht. Klare Empfehlung!' },
    { name: 'Svitlana Rupcheva', role: 'Detailarbeit', quote: 'Professionell, schnell, aufmerksam für alle Details. Komme definitiv wieder!' },
    { name: 'Abdo Harouchi', role: 'Zuverlässiger Service', quote: 'Von ganzem Herzen empfehlenswert — schnell, zuverlässig und professionell!' },
  ];
  return (
    <section style={{ background: 'var(--paper-100)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '80px 24px' }}>
        <h2 style={{ fontSize: 'var(--text-3xl)', margin: '0 0 8px' }}>Was Kunden sagen</h2>
        <p style={{ color: 'var(--text-muted)', margin: '0 0 36px', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ display: 'inline-flex', gap: 2, color: 'var(--star)' }}>{[0,1,2,3,4].map(i => <UI2.star key={i} size={16} />)}</span>
          Google Rezensionen: 5,0 aus 11 Bewertungen
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="rev-grid">
          {data.map(r => <RC2 key={r.name} {...r} rating={5} />)}
        </div>
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <a href="https://www.google.com/maps/place/Hausmeister-+und+Handwerksservice/@51.5111482,6.8627592,17z/data=!4m8!3m7!1s0x47b8eb4693c46823:0x87289737505445bc!8m2!3d51.5111482!4d6.8627592!9m1!1b1!16s%2Fg%2F11zk24bnk5?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
            <B2 variant="secondary" size="lg">Mehr Bewertungen auf Google</B2>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function Faq() {
  const items = [
    { q: 'In welchen Städten sind Sie im Einsatz?', a: 'Unser Team arbeitet in Oberhausen, Duisburg, Essen, Mülheim an der Ruhr, Düsseldorf, Bottrop, Gelsenkirchen, Bochum, Ratingen, Dinslaken, Moers und Köln.' },
    { q: 'Welche Leistungen sind am häufigsten gefragt?', a: 'Besonders häufig angefragt werden Hausmeisterservice, Kleinreparaturen, Möbelmontage, Trockenbau, Bodenverlegung und Türmontage.' },
    { q: 'Wie schnell bekommen wir eine Antwort?', a: 'In der Regel melden wir uns innerhalb von 24 Stunden zurück. Für dringende Anliegen sind kurzfristige Termine möglich.' },
    { q: 'Gibt es transparente Preise?', a: 'Ja. Vor der Ausführung klären wir Aufwand, Leistungen und Termin transparent ab, damit Sie eine klare Grundlage für die Entscheidung haben.' },
    { q: 'Ist ein Vertrag erforderlich?', a: 'Für private Kleinaufträge ist kein Vertrag notwendig. Für regelmäßige Objektbetreuung erstellen wir auf Wunsch eine Vereinbarung.' },
  ];
  return (
    <section id="faq" style={{ background: 'var(--paper-100)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 880, margin: '0 auto', padding: '80px 24px' }}>
        <h2 style={{ fontSize: 'var(--text-3xl)', margin: '0 0 32px' }}>Häufige Fragen</h2>
        <AC2 items={items} defaultOpen={0} />
      </div>
    </section>
  );
}

/* ---------- Contact / booking ---------- */
function ContactBooking({ children }) {
  return (
    <section id="contact" style={{ background: 'var(--surface-dark)', color: 'var(--text-on-dark)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '88px 24px', display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 40, alignItems: 'start' }} className="contact-grid">
        <div>
          <div className="eyebrow" style={{ marginBottom: 14 }}>Kontakt</div>
          <h2 style={{ fontSize: 'var(--text-3xl)', color: 'var(--text-on-dark)', margin: '0 0 28px', maxWidth: '14ch' }}>Beschreiben Sie Ihr Anliegen — wir melden uns schnellstmöglich</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 28 }}>
            {[['phone','+49 177 4828126'],['mail','mkovalevskij47@gmail.com'],['mapPin','Vestischestr 184, 46145 Oberhausen'],['clock','Mo–Sa: 08:00–19:00 · So: Geschlossen']].map(([ic,t]) => {
              const Ico = UI2[ic];
              return <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 14, color: 'var(--text-on-dark)' }}>
                <span style={{ width: 44, height: 44, flex: '0 0 auto', borderRadius: 'var(--radius-md)', background: 'rgba(243,238,229,0.08)', display: 'grid', placeItems: 'center', color: 'var(--clay-300)' }}><Ico size={21} /></span>
                <span style={{ fontSize: 'var(--text-lg)' }}>{t}</span>
              </div>;
            })}
          </div>
          <B2 variant="whatsapp" size="lg" leadingIcon={<UI2.whatsapp size={19} />} fullWidth>WhatsApp schreiben</B2>
        </div>
        <div style={{ background: 'var(--surface)', color: 'var(--text)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)', overflow: 'hidden' }}>
          {children}
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function SiteFooter() {
  return (
    <footer style={{ background: 'var(--ink-950)', color: 'var(--text-on-dark)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '40px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <WM2 variant="full" tone="cream" size="sm" name="Kovalivskyi" />
        </div>
        <div style={{ color: 'var(--text-on-dark-muted)', fontSize: 'var(--text-sm)' }}>© 2026 Handwerks- &amp; Hausmeisterservice Kovalivskyi</div>
        <div style={{ display: 'flex', gap: 22 }}>
          <a href="#" style={{ color: 'var(--text-on-dark)', fontWeight: 600 }}>Impressum</a>
          <a href="#" style={{ color: 'var(--text-on-dark)', fontWeight: 600 }}>Datenschutz</a>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Projects, Reviews, ServiceArea, Faq, ContactBooking, SiteFooter });
})();
