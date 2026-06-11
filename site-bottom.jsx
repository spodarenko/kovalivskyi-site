/* Bottom site sections: Projects, Reviews, FAQ, Contact (booking), Footer. */
(() => {
const { Button: B2, Badge: Bd2, Wordmark: WM2, ReviewCard: RC2, Accordion: AC2 } = window.DesignSystem_9c3c7d;
const UI2 = window.Icon;

/* ---------- Projects (grid) ---------- */
function Projects() {
  const BASE = './assets/gallery/';
  const NUMS = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];
  const all = [...NUMS].reverse().map(n => `${BASE}gallery-${n}.jpg`);
  const [expanded, setExpanded] = React.useState(false);
  const visible = expanded ? all : all.slice(0, 8);
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
          <div key={i} style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', aspectRatio: '4/3', background: 'var(--paper-100)', boxShadow: 'var(--shadow-card)' }}>
            <img src={src} alt={`Projekt ${NUMS[i]}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <B2 variant="secondary" size="lg" onClick={() => setExpanded(e => !e)}>
          {expanded ? 'Weniger Fotos' : 'Mehr Fotos'}
        </B2>
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
    <section id="faq" style={{ maxWidth: 880, margin: '0 auto', padding: '80px 24px' }}>
      <h2 style={{ fontSize: 'var(--text-3xl)', margin: '0 0 32px' }}>Häufige Fragen</h2>
      <AC2 items={items} defaultOpen={0} />
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

Object.assign(window, { Projects, Reviews, Faq, ContactBooking, SiteFooter });
})();
