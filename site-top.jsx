/* Site sections for the redesigned Ковалівський website. */
(() => {
const { Button, Badge, Wordmark, StatBlock, ServiceCard, StepCard, ReviewCard, Accordion, Card } = window.DesignSystem_9c3c7d;
const UI = window.Icon;

const CITIES = ['Oberhausen','Duisburg','Essen','Mülheim','Düsseldorf','Bottrop','Gelsenkirchen','Bochum','Ratingen','Dinslaken','Moers','Köln'];

/* ---------- Header ---------- */
function SiteHeader({ onQuote }) {
  const links = [['Leistungen','#services'],['Ablauf','#process'],['Projekte','#projects'],['Servicegebiet','#standorte'],['Kontakt','#contact']];
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);
  const go = (href) => { setOpen(false); const el = document.querySelector(href); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: 'smooth' }); };
  return (
    <header style={{ position: 'sticky', top: 16, zIndex: 50, padding: '0 16px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', background: 'var(--nav-bg, rgba(252,250,244,0.82))', backdropFilter: 'blur(14px)',
        border: '1px solid var(--border)', borderRadius: 'var(--radius-pill)', boxShadow: 'var(--shadow-float)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 14px 12px 22px',
        position: 'relative', zIndex: 51 }}>
        <img src="./assets/kovalivskyi-logo.svg" alt="Kovalivskyi" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ height: 30.87, width: 'auto', display: 'block', cursor: 'pointer', marginLeft: 10 }} />
        <nav style={{ display: 'flex', gap: 30 }} className="nav-links">
          {links.map(([l,h]) => <a key={l} href={h} onClick={(e)=>{e.preventDefault();go(h);}} style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--text-base)', color: 'var(--ink-700)' }}>{l}</a>)}
        </nav>
        <div style={{ display: 'flex', gap: 10 }} className="header-cta">
          <Button variant="whatsapp" leadingIcon={<UI.whatsapp size={18} />}>WhatsApp</Button>
          <Button variant="primary" onClick={onQuote}>Anfrage senden</Button>
        </div>
        <button className="menu-btn" aria-label="Menü" aria-expanded={open} onClick={() => setOpen(o => !o)}
          style={{ display: 'none', width: 46, height: 46, flex: '0 0 auto', borderRadius: '50%', border: '1px solid var(--border)', background: 'var(--white)', cursor: 'pointer', placeItems: 'center', color: 'var(--text-strong)' }}>
          {open ? <UI.x size={22} /> : <UI.menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div className="mobile-drawer" data-open={open} onClick={(e) => e.target === e.currentTarget && setOpen(false)}>
        <div className="mobile-sheet">
          <nav style={{ display: 'flex', flexDirection: 'column' }}>
            {links.map(([l,h]) => (
              <a key={l} href={h} onClick={(e)=>{e.preventDefault();go(h);}}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 4px', borderBottom: '1px solid var(--border)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-xl)', color: 'var(--text-strong)' }}>
                {l}<UI.arrowRight size={20} />
              </a>
            ))}
          </nav>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 22 }}>
            <Button variant="primary" size="lg" fullWidth onClick={() => { setOpen(false); onQuote(); }}>Anfrage senden</Button>
            <Button variant="whatsapp" size="lg" fullWidth leadingIcon={<UI.whatsapp size={19} />}>WhatsApp schreiben</Button>
            <a href="tel:+491774828126" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '8px', fontWeight: 700, color: 'var(--text-strong)' }}>
              <UI.phone size={18} /> +49 177 4828126
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero({ onQuote }) {
  return (
    <section style={{ maxWidth: 1280, margin: '0 auto', padding: '28px 24px 30px',
      display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 56, alignItems: 'start' }} className="hero-grid">
      <div style={{ paddingTop: 60 }}>
        <h1 style={{ fontSize: 'clamp(40px, 4.6vw, 62px)', margin: '0 0 20px', lineHeight: 1.05 }}>
          Hausmeister &amp;<br/>Handwerksservice<br/>
          <span style={{ color: 'var(--primary)' }}>mit Fokus auf Innenausbau</span>
        </h1>
        <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-muted)', maxWidth: '46ch', margin: '0 0 26px' }}>
          Langjährige Erfahrung, saubere Ausführung und schnelle Rückmeldung. Hauptfokus: Trockenbau, Türinstallation und Bodenverlegung.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
          <div style={{ display: 'flex' }}>
            {['В','A','E','S'].map((c,i) => <span key={i} style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--blush)', color: 'var(--blush-ink)', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, marginLeft: i ? -10 : 0, border: '2px solid var(--bg)' }}>{c}</span>)}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ display: 'inline-flex', gap: 2, color: 'var(--star)' }}>{[0,1,2,3,4].map(i => <UI.star key={i} size={15} />)}</span>
            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>5,0 · 11 Google-Rezensionen</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }} className="hero-cta">
          <a href="callto:+491774828126" style={{ textDecoration: 'none' }}><Button variant="primary" size="lg" leadingIcon={<UI.phone size={19} />}>Jetzt anrufen</Button></a>
          <Button variant="secondary" size="lg" onClick={onQuote}>Anfrage senden</Button>
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        <div style={{ borderRadius: 'var(--radius-2xl)', overflow: 'hidden', aspectRatio: '4/5', background: 'var(--paper-100)' }}>
          <img src="./assets/photos/hero-worker.jpg" alt="Handwerker bei der Arbeit" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        <div style={{ position: 'absolute', left: -22, bottom: 34, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 14 }} className="hero-badge">
          <span style={{ width: 46, height: 46, borderRadius: '50%', background: 'rgba(47,125,79,0.12)', color: 'var(--success)', display: 'grid', placeItems: 'center' }}><UI.clock size={24} /></span>
          <div><div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: 'var(--text-strong)', lineHeight: 1 }}>24 Stunden</div><div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>Durchschnittliche Reaktionszeit</div></div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Trust strip ---------- */
function TrustStrip() {
  const stats = [['24h','Schnelle Rückmeldung'],['50+ km','Oberhausen + Umgebung'],['Flexibel','Termine auch am Wochenende'],['Fair','Transparente Preise']];
  return (
    <section style={{ maxWidth: 1180, margin: '0 auto', padding: '36px 24px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: 24 }} className="trust-grid">
        {stats.map(([v,l]) => <StatBlock key={v} value={v} label={l} />)}
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section style={{ maxWidth: 1180, margin: '0 auto', padding: '40px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }} className="about-grid">
      <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', aspectRatio: '5/4', background: 'var(--paper-100)' }}>
        <img src="./assets/photos/about-drilling.jpg" alt="Montagearbeiten" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>
      <div>
        <div className="eyebrow" style={{ marginBottom: 14 }}>Lokaler Service</div>
        <h2 style={{ fontSize: 'var(--text-3xl)', margin: '0 0 18px' }}>Für Wohnungen, Häuser und Objekte</h2>
        <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-muted)', margin: '0 0 16px' }}>
          Hausmeister und Handwerksservice Kovalivskyi unterstützt Privatkunden, Hausverwaltungen und kleine Unternehmen in Oberhausen, Duisburg, Essen und dem gesamten Ruhrgebiet.
        </p>
        <p style={{ color: 'var(--text-muted)', margin: 0 }}>
          Wir reagieren in der Regel innerhalb von 24 Stunden und führen Arbeiten sauber und zuverlässig aus. Unsere Kunden schätzen schnelle Reaktionszeiten, faire und transparente Preise sowie die Möglichkeit, dringende Aufgaben kurzfristig umzusetzen.
        </p>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
function Services() {
  const illus = [
    { image: './assets/illustrations/drywall.png', title: 'Innenausbau + Trockenbau', description: 'Trockenbau- und Montagearbeiten im Innenbereich, Verkleidungen und kleinere Konstruktionen.' },
    { image: './assets/illustrations/door.png', title: 'Türmontage', description: 'Montage von Innentüren und Türbeschlägen gemäß Herstellervorgaben und mit sauberer Anpassung.' },
    { image: './assets/illustrations/floor.png', title: 'Bodenverlegung', description: 'Laminat- und Vinylverlegung inklusive Untergrundvorbereitung und Sockelleistenmontage.' },
    { image: './assets/illustrations/lock.png', title: 'Schlüssel-/Notdienst', description: 'Austausch von Türschlössern und Fenstergriffen bei dringendem Bedarf, schnell und zuverlässig.' },
  ];
  return (
    <section id="services" style={{ background: 'var(--paper-100)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '76px 24px' }}>
        <div className="eyebrow" style={{ marginBottom: 14 }}>Leistungen</div>
        <h2 style={{ fontSize: 'var(--text-3xl)', maxWidth: '20ch', margin: '0 0 36px' }}>Leistungen für die häufigsten Aufgaben</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: 20 }} className="serv-illus">
          {illus.map(s => <ServiceCard key={s.title} variant="media" {...s} />)}
        </div>
      </div>
    </section>
  );
}

/* ---------- Full service range (own section) ---------- */
function ServiceRange() {
  const grid = [
    { icon: 'building', title: 'Hausmeisterservice', description: 'Regelmäßige Kontrollen, technische Betreuung und laufende Unterstützung für Eigentümer und Verwaltungen.' },
    { icon: 'wrench', title: 'Kleinreparaturen', description: 'Schnelle handwerkliche Lösungen im Alltag, inklusive kleiner Instandsetzungen im Innenbereich.' },
    { icon: 'sofa', title: 'Möbelmontage', description: 'Fachgerechter Aufbau von Schränken, Regalen, Kommoden und weiteren Möbeln nach Herstellervorgaben.' },
    { icon: 'roller', title: 'Renovierungsarbeiten', description: 'Unterstützung bei Innenrenovierung, Modernisierung und vorbereitenden Arbeiten in Wohnräumen.' },
    { icon: 'settings', title: 'Wartungsarbeiten', description: 'Regelmäßige Wartung zur Werterhaltung von Gebäuden und zur Vermeidung größerer Schäden.' },
    { icon: 'tree', title: 'Gartenarbeiten', description: 'Rasen mähen, Unkraut entfernen, Hecken schneiden, Laub entfernen und saisonale Pflege von Außenanlagen.' },
  ];
  return (
    <section id="service-range" style={{ background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '80px 24px' }}>
        <div className="eyebrow" style={{ marginBottom: 14 }}>Alle Leistungen</div>
        <h2 style={{ fontSize: 'var(--text-3xl)', maxWidth: '30ch', margin: '0 0 36px' }}>Kompletter Service für Wohnungen, Häuser und Gewerbeobjekte</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 20 }} className="serv-grid">
          {grid.map(s => { const Ico = UI[s.icon]; return <ServiceCard key={s.title} variant="icon" icon={<Ico size={28} sw={1.8} />} title={s.title} description={s.description} />; })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Process (dark) ---------- */
function Process() {
  const steps = [
    ['1','Kontakt','Telefon, WhatsApp oder Kontaktformular. Sie erhalten schnell eine Rückmeldung und einen ersten Überblick über den Ablauf.'],
    ['2','Klärung','Wir prüfen Umfang, Aufwand und Materialien. Bei Bedarf helfen Fotos oder ein kurzes Video für eine genauere Einschätzung.'],
    ['3','Angebot','Sie erhalten eine verständliche Einschätzung mit fairen, transparenten Preisen sowie einen passenden Termin.'],
    ['4','Ausführung','Die Arbeiten werden pünktlich, sauber und fachgerecht durchgeführt. Nach Abschluss erhalten Sie ein sichtbares, ordentliches Ergebnis.'],
  ];
  return (
    <section id="process" style={{ background: 'var(--surface-dark)', color: 'var(--text-on-dark)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '88px 24px' }}>
        <h2 style={{ fontSize: 'var(--text-3xl)', color: 'var(--text-on-dark)', margin: '0 0 16px' }}>Arbeitsablauf</h2>
        <p style={{ color: 'var(--text-on-dark-muted)', maxWidth: '95ch', fontSize: 'var(--text-lg)', margin: '0 0 44px' }}>
          Kontaktieren Sie uns auf Ihrem bevorzugten Weg und erhalten Sie eine Rückmeldung innerhalb von 24 Stunden. Von der ersten Anfrage bis zum Ergebnis — vier einfache Schritte.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: 20 }} className="proc-grid">
          {steps.map(([n,t,d]) => <StepCard key={n} step={n} title={t} description={d} />)}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { SiteHeader, Hero, TrustStrip, About, Services, ServiceRange, Process });
})();
