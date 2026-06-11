/* Phosphor Icons (https://phosphoricons.com) — loaded via the @phosphor-icons/web
   font (regular + fill weights, linked in the page <head>). Each export keeps the
   same API as before — <Icon.name size={n} /> — but renders a Phosphor glyph.
   The `sw` prop is accepted and ignored (Phosphor uses weights, not stroke width). */
(() => {
const make = (name, weightClass = 'ph') => ({ size = 24, color, style, sw, ...p }) =>
  React.createElement('i', {
    className: `${weightClass} ph-${name}`,
    style: { fontSize: size, lineHeight: 1, display: 'inline-flex', color, ...style },
    ...p,
  });

const Icon = {
  building:    make('buildings'),
  wrench:      make('wrench'),
  sofa:        make('couch'),
  roller:      make('paint-roller'),
  settings:    make('gear'),
  tree:        make('tree'),
  drywall:     make('wall'),
  door:        make('door'),
  floor:       make('grid-four'),
  lock:        make('lock-key'),
  phone:       make('phone'),
  mail:        make('envelope'),
  mapPin:      make('map-pin'),
  clock:       make('clock'),
  check:       make('check'),
  checkCircle: make('check-circle'),
  arrowRight:  make('arrow-right'),
  arrowLeft:   make('arrow-left'),
  x:           make('x'),
  camera:      make('camera'),
  upload:      make('upload-simple'),
  menu:        make('list'),
  zap:         make('lightning'),
  shield:      make('shield-check'),
  whatsapp:    make('whatsapp-logo', 'ph-fill'),
  star:        make('star', 'ph-fill'),
};

window.Icon = Icon;
})();
