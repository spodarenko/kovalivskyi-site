/* QuoteWizard — guided multi-step booking/quote flow.
   A major upgrade over the original single contact form: it walks the
   customer from "what do you need" → details → photos → contact → confirmed. */
(() => {
const { Button, Field, Input, Textarea, Select, Badge } = window.DesignSystem_9c3c7d;

const SERVICES = [
  { id: 'interior', label: 'Innenausbau + Trockenbau', icon: 'drywall' },
  { id: 'doors',    label: 'Türmontage', icon: 'door' },
  { id: 'floor',    label: 'Bodenverlegung', icon: 'floor' },
  { id: 'locks',    label: 'Schlüssel-/Notdienst', icon: 'lock' },
  { id: 'furniture',label: 'Möbelmontage', icon: 'sofa' },
  { id: 'repair',   label: 'Kleinreparaturen', icon: 'wrench' },
  { id: 'maint',    label: 'Hausmeisterservice', icon: 'building' },
  { id: 'garden',   label: 'Gartenarbeiten', icon: 'tree' },
];
const OBJECTS = [
  { id: 'apartment', label: 'Wohnung' },
  { id: 'house', label: 'Haus' },
  { id: 'commercial', label: 'Gewerbe' },
];
const URGENCY = [
  { id: 'urgent', label: 'Dringend', hint: 'So schnell wie möglich' },
  { id: 'soon', label: 'Diese Woche', hint: '2–7 Tage' },
  { id: 'planned', label: 'Geplant', hint: 'Flexible Termine' },
];
const STEPS = ['Leistung', 'Objekt', 'Details', 'Kontakt'];

function ProgressRail({ step }) {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
        {STEPS.map((s, i) => {
          const done = i < step, active = i === step;
          return (
            <React.Fragment key={s}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{
                  width: 30, height: 30, borderRadius: '50%', display: 'grid', placeItems: 'center',
                  flex: '0 0 auto', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15,
                  background: done ? 'var(--primary)' : active ? 'var(--ink-900)' : 'var(--paper-100)',
                  color: (done || active) ? 'var(--paper-0)' : 'var(--text-faint)',
                  border: active ? '0' : '1px solid var(--border)',
                  transition: 'all var(--dur-base) var(--ease-out)',
                }}>
                  {done ? <window.Icon.check size={16} /> : i + 1}
                </span>
                <span className="qw-step-label" style={{
                  fontFamily: 'var(--font-body)', fontWeight: active ? 700 : 600, fontSize: 'var(--text-sm)',
                  color: active ? 'var(--text-strong)' : done ? 'var(--text-muted)' : 'var(--text-faint)',
                  whiteSpace: 'nowrap',
                }}>{s}</span>
              </div>
              {i < STEPS.length - 1 && (
                <span style={{ flex: 1, height: 2, margin: '0 14px', borderRadius: 2,
                  background: done ? 'var(--rust-300)' : 'var(--border)' }} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}

function Toggle({ selected, onClick, children, style }) {
  const [h, setH] = React.useState(false);
  return (
    <button type="button" onClick={onClick}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 14, textAlign: 'left', width: '100%',
        padding: '16px 18px', cursor: 'pointer',
        background: selected ? 'var(--rust-50)' : 'var(--white)',
        border: `1.5px solid ${selected ? 'var(--primary)' : h ? 'var(--border-strong)' : 'var(--border)'}`,
        borderRadius: 'var(--radius-md)', transition: 'all var(--dur-fast) var(--ease-out)',
        boxShadow: selected ? '0 0 0 4px var(--focus-ring)' : 'none', ...style,
      }}>
      {children}
    </button>
  );
}

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const MAX_FILES = 4;
const DESC_LIMIT = 1000;

function QuoteWizard({ onClose, embedded = false }) {
  const I = window.Icon;
  const [step, setStep] = React.useState(0);
  React.useEffect(() => {
    const s = document.createElement('style');
    s.id = 'qw-mobile';
    s.textContent = '@media (max-width: 600px) { .qw-step-label { display: none !important; } .qw-service-grid { grid-template-columns: 1fr !important; } }';
    if (!document.getElementById('qw-mobile')) document.head.appendChild(s);
    return () => { const el = document.getElementById('qw-mobile'); if (el) el.remove(); };
  }, []);
  const [done, setDone] = React.useState(false);
  const [fileError, setFileError] = React.useState('');
  const fileInputRef = React.useRef();
  const [data, setData] = React.useState({
    services: ['doors'], object: 'apartment', urgency: 'soon',
    desc: '', files: [], name: '', phone: '', contact: 'whatsapp', email: '',
  });
  const set = (patch) => setData((d) => ({ ...d, ...patch }));
  const [errors, setErrors] = React.useState({});
  const setErr = (field, msg) => setErrors(e => ({ ...e, [field]: msg }));

  const validateName  = v => /\d/.test(v) ? "Name darf keine Ziffern enthalten" : '';
  const validatePhone = v => { const d = v.replace(/\D/g,''); return /[a-zA-Z]/.test(v) ? 'Telefonnummer darf keine Buchstaben enthalten' : d.length < 6 ? 'Bitte gültige Nummer eingeben' : ''; };
  const validateEmail = v => v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? 'Ungültiges E-Mail-Format' : '';

  const handleFileAdd = (e) => {
    const f = e.target.files[0];
    e.target.value = '';
    if (!f) return;
    if (f.size > MAX_FILE_SIZE) { setFileError('Datei zu groß. Maximal 5 MB pro Datei.'); return; }
    setFileError('');
    set({ files: [...data.files, f] });
  };
  const handleFileRemove = (i) => set({ files: data.files.filter((_, idx) => idx !== i) });
  const toggleService = (id) => set({
    services: data.services.includes(id) ? data.services.filter(s => s !== id) : [...data.services, id],
  });

  const canNext = [
    data.services.length > 0,
    !!data.object && !!data.urgency,
    true,
    data.name.trim() && data.phone.trim() && !errors.name && !errors.phone && !errors.email,
  ][step];

  const next = () => { if (step < 3) setStep(step + 1); else setDone(true); };
  const back = () => setStep(Math.max(0, step - 1));

  const summaryLabels = data.services.map(id => SERVICES.find(s => s.id === id)?.label).filter(Boolean);

  if (done) {
    return (
      <div style={{ padding: '52px 48px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
        <span style={{ width: 76, height: 76, borderRadius: '50%', background: 'rgba(47,125,79,0.12)', color: 'var(--success)', display: 'grid', placeItems: 'center' }}>
          <I.checkCircle size={40} sw={1.8} />
        </span>
        <h2 style={{ margin: 0, fontSize: 'var(--text-3xl)' }}>Anfrage gesendet!</h2>
        <p style={{ margin: 0, maxWidth: '44ch', fontSize: 'var(--text-lg)', color: 'var(--text-muted)' }}>
          Vielen Dank, {data.name || 'Sie'}. Wir melden uns per <strong style={{ color: 'var(--text-strong)' }}>{data.contact === 'whatsapp' ? 'WhatsApp' : data.contact === 'email' ? 'E-Mail' : 'Telefon'}</strong> in der Regel innerhalb von <strong style={{ color: 'var(--text-strong)' }}>24 Stunden</strong>.
        </p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginTop: 6 }}>
          {summaryLabels.map(l => <Badge key={l} variant="blush">{l}</Badge>)}
        </div>
        <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
          <Button variant="whatsapp" leadingIcon={<I.whatsapp size={18} />}>WhatsApp schreiben</Button>
          {onClose && <Button variant="secondary" onClick={onClose}>Schließen</Button>}
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', maxHeight: embedded ? 'none' : '88vh' }}>
      {/* header */}
      <div style={{ padding: '26px 36px 22px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 4 }}>Kostenlose Anfrage</div>
            <h2 style={{ margin: 0, fontSize: 'var(--text-2xl)' }}>Beschreiben Sie Ihr Anliegen</h2>
          </div>
          {onClose && (
            <button onClick={onClose} aria-label="Schließen" style={{ width: 42, height: 42, borderRadius: '50%', border: '1px solid var(--border)', background: 'var(--white)', cursor: 'pointer', display: 'grid', placeItems: 'center', color: 'var(--text-muted)' }}>
              <I.x size={20} />
            </button>
          )}
        </div>
        <ProgressRail step={step} />
      </div>

      {/* body */}
      <div style={{ padding: '30px 36px', overflowY: 'auto', flex: 1 }}>
        {step === 0 && (
          <div>
            <p style={{ marginTop: 0, color: 'var(--text-muted)' }}>Was soll erledigt werden? Mehrere Auswahl möglich.</p>
            <div className="qw-service-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {SERVICES.map(s => {
                const Ico = I[s.icon];
                const on = data.services.includes(s.id);
                return (
                  <Toggle key={s.id} selected={on} onClick={() => toggleService(s.id)}>
                    <span style={{ color: on ? 'var(--primary)' : 'var(--ink-500)', display: 'inline-flex' }}><Ico size={24} sw={1.9} /></span>
                    <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--text-base)', color: 'var(--text-strong)', lineHeight: 1.2 }}>{s.label}</span>
                    <span style={{ marginLeft: 'auto', color: 'var(--primary)', opacity: on ? 1 : 0, transition: 'opacity var(--dur-fast)' }}><I.checkCircle size={20} /></span>
                  </Toggle>
                );
              })}
            </div>
          </div>
        )}

        {step === 1 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
            <div>
              <h3 style={{ margin: '0 0 12px' }}>Art des Objekts</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                {OBJECTS.map(o => (
                  <Toggle key={o.id} selected={data.object === o.id} onClick={() => set({ object: o.id })} style={{ justifyContent: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--text-strong)', textAlign: 'center', lineHeight: 1.25 }}>{o.label}</span>
                  </Toggle>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{ margin: '0 0 12px' }}>Dringlichkeit</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                {URGENCY.map(u => (
                  <Toggle key={u.id} selected={data.urgency === u.id} onClick={() => set({ urgency: u.id })} style={{ flexDirection: 'column', alignItems: 'center', gap: 4, textAlign: 'center' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--text-strong)' }}>
                      {u.id === 'urgent' && <span style={{ color: 'var(--primary)', display: 'inline-flex' }}><I.zap size={15} /></span>}
                      {u.label}
                    </span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{u.hint}</span>
                  </Toggle>
                ))}
              </div>
            </div>
            <Field label="Stadt / Stadtteil">
              <Select value={data.city} onChange={e => set({ city: e.target.value })} placeholder="Stadt auswählen…"
                options={['Oberhausen','Duisburg','Essen','Mülheim','Düsseldorf','Bottrop','Gelsenkirchen','Bochum','Ratingen','Dinslaken','Moers','Köln']} />
            </Field>
          </div>
        )}

        {step === 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <div>
              <Field label="Aufgabe beschreiben">
                <Textarea value={data.desc} onChange={e => set({ desc: e.target.value.slice(0, DESC_LIMIT) })} rows={4}
                  placeholder="z.B.: 2 Innentüren montieren und Schloss an der Eingangstür tauschen…" maxLength={DESC_LIMIT} />
              </Field>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4, fontSize: 'var(--text-sm)', color: 'var(--text-faint)' }}>
                <span>Je detaillierter — desto genauer die Einschätzung.</span>
                <span style={{ color: data.desc.length >= DESC_LIMIT * 0.9 ? 'var(--primary)' : 'var(--text-faint)' }}>{data.desc.length}/{DESC_LIMIT}</span>
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--text-strong)', marginBottom: 4 }}>Fotos oder Video <span style={{ color: 'var(--text-faint)', fontWeight: 400 }}>(optional)</span></div>
              <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-faint)', marginBottom: 8 }}>Bis zu {MAX_FILES} Dateien, max. 5 MB pro Datei. Fotos, Videos.</div>
              <input ref={fileInputRef} type="file" accept="image/*,video/*" style={{ display: 'none' }} onChange={handleFileAdd} />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
                {[0,1,2,3].map(i => {
                  const f = data.files[i];
                  const canAdd = !f && data.files.length < MAX_FILES;
                  return (
                    <button key={i} type="button"
                      onClick={() => f ? handleFileRemove(i) : (canAdd && fileInputRef.current.click())}
                      style={{ aspectRatio: '1', borderRadius: 'var(--radius-md)', cursor: f || canAdd ? 'pointer' : 'default',
                        border: f ? '1.5px solid var(--rust-300)' : '1.5px dashed var(--border-strong)',
                        background: f ? 'var(--rust-50)' : 'var(--white)', color: f ? 'var(--primary)' : 'var(--text-faint)',
                        display: 'grid', placeItems: 'center', position: 'relative' }}>
                      {f ? (
                        <span title={f.name} style={{ display: 'grid', placeItems: 'center' }}>
                          <I.check size={22} />
                        </span>
                      ) : <I.camera size={22} />}
                    </button>
                  );
                })}
              </div>
              {fileError && <div style={{ marginTop: 6, fontSize: 'var(--text-sm)', color: 'var(--danger, #c0392b)' }}>{fileError}</div>}
            </div>
          </div>
        )}

        {step === 3 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
              <div>
                <Field label="Name" required>
                  <Input value={data.name}
                    onChange={e => { set({ name: e.target.value }); setErr('name', validateName(e.target.value)); }}
                    onBlur={e => setErr('name', validateName(e.target.value))}
                    placeholder="Ihr Name" />
                </Field>
                {errors.name && <div style={{ marginTop: 4, fontSize: 'var(--text-sm)', color: 'var(--danger,#c0392b)' }}>{errors.name}</div>}
              </div>
              <div>
                <Field label="Telefon" required>
                  <Input value={data.phone}
                    onChange={e => { set({ phone: e.target.value }); setErr('phone', validatePhone(e.target.value)); }}
                    onBlur={e => setErr('phone', validatePhone(e.target.value))}
                    type="tel" placeholder="+49 …" leadingIcon={<I.phone size={18} />} />
                </Field>
                {errors.phone && <div style={{ marginTop: 4, fontSize: 'var(--text-sm)', color: 'var(--danger,#c0392b)' }}>{errors.phone}</div>}
              </div>
            </div>
            <div>
              <Field label="E-mail">
                <Input value={data.email}
                  onChange={e => { set({ email: e.target.value }); setErr('email', validateEmail(e.target.value)); }}
                  onBlur={e => setErr('email', validateEmail(e.target.value))}
                  type="email" placeholder="you@email.com" leadingIcon={<I.mail size={18} />} />
              </Field>
              {errors.email && <div style={{ marginTop: 4, fontSize: 'var(--text-sm)', color: 'var(--danger,#c0392b)' }}>{errors.email}</div>}
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--text-strong)', marginBottom: 8 }}>Wie soll ich mich melden?</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                {[{id:'phone',label:'Телефон',icon:'phone'},{id:'whatsapp',label:'WhatsApp',icon:'whatsapp'},{id:'email',label:'E-mail',icon:'mail'}].map(c => {
                  const Ico = I[c.icon];
                  return (
                    <Toggle key={c.id} selected={data.contact === c.id} onClick={() => set({ contact: c.id })} style={{ justifyContent: 'center' }} aria-label={c.label}>
                      <span style={{ color: data.contact === c.id ? (c.id==='whatsapp'?'var(--whatsapp)':'var(--primary)') : 'var(--ink-500)', display: 'inline-flex' }}><Ico size={22} /></span>
                    </Toggle>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* footer */}
      <div style={{ padding: '20px 36px', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, background: 'var(--paper-0)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-muted)', fontSize: 'var(--text-sm)' }}>
          <I.shield size={18} /> Unverbindlich
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          {step > 0 && <Button variant="secondary" onClick={back} leadingIcon={<I.arrowLeft size={18} />} aria-label="Zurück" />}
          <Button variant="primary" onClick={next} disabled={!canNext}
            trailingIcon={step < 3 ? <I.arrowRight size={18} /> : null}>
            {step < 3 ? 'Weiter' : 'Anfrage senden'}
          </Button>
        </div>
      </div>
    </div>
  );
}

window.QuoteWizard = QuoteWizard;
})();
