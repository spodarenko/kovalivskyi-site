/* @ds-bundle: {"format":3,"namespace":"DesignSystem_9c3c7d","components":[{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"Rating","sourcePath":"components/content/Rating.jsx"},{"name":"Avatar","sourcePath":"components/content/ReviewCard.jsx"},{"name":"ReviewCard","sourcePath":"components/content/ReviewCard.jsx"},{"name":"ServiceCard","sourcePath":"components/content/ServiceCard.jsx"},{"name":"StatBlock","sourcePath":"components/content/StatBlock.jsx"},{"name":"StepCard","sourcePath":"components/content/StatBlock.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/brand/Wordmark.jsx":"3be3c6dfb23d","components/content/Accordion.jsx":"b3091fdb4c55","components/content/Card.jsx":"05b9d48ea70f","components/content/Rating.jsx":"9afb0f42aa78","components/content/ReviewCard.jsx":"6294d8d26272","components/content/ServiceCard.jsx":"6701fd48879f","components/content/StatBlock.jsx":"c6d71a0fd531","components/core/Badge.jsx":"ffd7a7f11168","components/core/Button.jsx":"12e111e04ff9","components/core/IconButton.jsx":"42d9a6aaaf61","components/forms/Field.jsx":"508a3a59188b","components/forms/Input.jsx":"c73ef5b6a674","components/forms/Select.jsx":"a19ded9a481e","ui_kits/website/icons.jsx":"c0e05df2bc01","ui_kits/website/quote-wizard.jsx":"57875c10d618","ui_kits/website/site-bottom.jsx":"cdf282e928e7","ui_kits/website/site-top.jsx":"91e595bbf0ec","ui_kits/website/tweaks-panel.jsx":"6591467622ed"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_9c3c7d = window.DesignSystem_9c3c7d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Wordmark — the Ковалівський brand lockup.
 * A rounded monogram tile ("К") paired with the name set in Philosopher.
 */
function Wordmark({
  variant = 'full',
  // 'full' | 'mark'
  tone = 'ink',
  // 'ink' | 'cream' | 'rust'
  size = 'md',
  // 'sm' | 'md' | 'lg'
  name = 'Ковалівський',
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      mark: 32,
      radius: 9,
      glyph: 18,
      label: 18,
      gap: 10
    },
    md: {
      mark: 44,
      radius: 12,
      glyph: 25,
      label: 25,
      gap: 13
    },
    lg: {
      mark: 60,
      radius: 16,
      glyph: 34,
      label: 34,
      gap: 16
    }
  };
  const s = sizes[size] || sizes.md;
  const tones = {
    ink: {
      tile: 'var(--ink-900)',
      glyph: 'var(--paper-0)',
      label: 'var(--text-strong)'
    },
    cream: {
      tile: 'var(--paper-0)',
      glyph: 'var(--rust-600)',
      label: 'var(--paper-0)'
    },
    rust: {
      tile: 'var(--rust-600)',
      glyph: 'var(--paper-0)',
      label: 'var(--text-strong)'
    }
  };
  const t = tones[tone] || tones.ink;
  const mark = /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: s.mark,
      height: s.mark,
      flex: '0 0 auto',
      borderRadius: '50%',
      background: t.tile,
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: s.glyph,
      lineHeight: 1,
      color: t.glyph,
      letterSpacing: '-0.02em'
    }
  }, "\u041A");
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: s.gap,
      cursor: onClick ? 'pointer' : 'default',
      userSelect: 'none',
      ...style
    }
  }, rest), mark, variant === 'full' && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: s.label,
      lineHeight: 1,
      color: t.label,
      letterSpacing: '-0.01em',
      whiteSpace: 'nowrap'
    }
  }, name));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/content/Accordion.jsx
try { (() => {
/**
 * Accordion — FAQ disclosure list. Controlled internally; one open at a time.
 */
function Accordion({
  items = [],
  defaultOpen = 0,
  style
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      ...style
    }
  }, items.map((it, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: 'var(--surface)',
        border: `1.5px solid ${isOpen ? 'var(--rust-300)' : 'var(--border)'}`,
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        transition: 'border-color var(--dur-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        padding: '22px 26px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'var(--text-xl)',
        color: 'var(--text-strong)'
      }
    }, it.q, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        flex: '0 0 auto',
        color: 'var(--ink-500)',
        transform: isOpen ? 'rotate(180deg)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "m6 9 6 6 6-6"
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: isOpen ? '1fr' : '0fr',
        transition: 'grid-template-rows var(--dur-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        padding: '0 26px 24px',
        fontSize: 'var(--text-base)',
        lineHeight: 'var(--leading-normal)',
        color: 'var(--text-muted)'
      }
    }, it.a))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the brand surface container. Soft radius, whisper border, gentle lift.
 */
function Card({
  children,
  tone = 'paper',
  // 'paper' | 'sunken' | 'dark' | 'outline'
  padding = 'md',
  // 'none' | 'sm' | 'md' | 'lg'
  hoverable = false,
  style,
  ...rest
}) {
  const pads = {
    none: 0,
    sm: 18,
    md: 24,
    lg: 32
  };
  const tones = {
    paper: {
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      color: 'var(--text)'
    },
    sunken: {
      background: 'var(--surface-sunken)',
      border: '1px solid var(--border)',
      color: 'var(--text)'
    },
    dark: {
      background: 'var(--surface-dark-2)',
      border: '1px solid var(--border-dark)',
      color: 'var(--text-on-dark)'
    },
    outline: {
      background: 'transparent',
      border: '1.5px solid var(--border-strong)',
      color: 'var(--text)'
    }
  };
  const t = tones[tone] || tones.paper;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => hoverable && setHover(true),
    onMouseLeave: () => hoverable && setHover(false),
    style: {
      borderRadius: 'var(--radius-lg)',
      padding: pads[padding],
      boxShadow: tone === 'dark' ? 'none' : hover ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      transform: hoverable && hover ? 'translateY(-3px)' : 'none',
      ...t,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/Rating.jsx
try { (() => {
/**
 * Rating — a row of stars (filled / empty).
 */
function Rating({
  value = 5,
  max = 5,
  size = 18,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "img",
    "aria-label": label || `${value} / ${max}`,
    style: {
      display: 'inline-flex',
      gap: 4
    }
  }, Array.from({
    length: max
  }).map((_, i) => /*#__PURE__*/React.createElement("svg", {
    key: i,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: i < value ? 'var(--star)' : 'none',
    stroke: i < value ? 'var(--star)' : 'var(--rust-300)',
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2.5l2.9 6.06 6.6.78-4.9 4.5 1.3 6.56L12 17.9l-5.9 2.5 1.3-6.56-4.9-4.5 6.6-.78z"
  }))));
}
Object.assign(__ds_scope, { Rating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Rating.jsx", error: String((e && e.message) || e) }); }

// components/content/ReviewCard.jsx
try { (() => {
/**
 * Avatar — blush circle with an initial (matches the reviews section).
 */
function Avatar({
  name = '',
  src,
  size = 52
}) {
  const initial = (name.trim()[0] || '?').toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-pill)',
      background: src ? `center/cover url(${src})` : 'var(--blush)',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: size * 0.42,
      color: 'var(--blush-ink)',
      overflow: 'hidden'
    }
  }, !src && initial);
}

/**
 * ReviewCard — customer testimonial: avatar, name, role, quote, rating.
 */
function ReviewCard({
  name,
  role,
  quote,
  rating = 5,
  avatarSrc,
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    padding: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      height: '100%',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: name,
    src: avatarSrc
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-lg)',
      color: 'var(--text-strong)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, role))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--ink-700)'
    }
  }, quote), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Rating, {
    value: rating,
    size: 20
  })));
}
Object.assign(__ds_scope, { Avatar, ReviewCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ReviewCard.jsx", error: String((e && e.message) || e) }); }

// components/content/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ServiceCard — a service offering. Two looks:
 *  - "icon"  : rust line-icon + title + description (6-up grid)
 *  - "media" : isometric illustration on a cream panel + title + description (4-up)
 */
function ServiceCard({
  title,
  description,
  icon,
  image,
  variant = 'icon',
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = !!onClick;
  if (variant === 'media') {
    return /*#__PURE__*/React.createElement("div", _extends({
      onClick: onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: hover ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
        transform: interactive && hover ? 'translateY(-3px)' : 'none',
        transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
        cursor: interactive ? 'pointer' : 'default',
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--paper-50)',
        aspectRatio: '3 / 2',
        overflow: 'hidden'
      }
    }, image && /*#__PURE__*/React.createElement("img", {
      src: image,
      alt: "",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '22px 24px 26px'
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: '0 0 8px',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'var(--text-xl)',
        color: 'var(--text-strong)',
        lineHeight: 1.15
      }
    }, title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 'var(--text-base)',
        lineHeight: 'var(--leading-normal)',
        color: 'var(--text-muted)'
      }
    }, description)));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      padding: '28px 28px 30px',
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: hover ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
      transform: interactive && hover ? 'translateY(-3px)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      height: '100%',
      boxSizing: 'border-box',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--primary)'
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-xl)',
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--text-muted)'
    }
  }, description));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/content/StatBlock.jsx
try { (() => {
/**
 * StatBlock — a big Philosopher display figure over a label.
 * Used for the trust strip (24h · 50+ км · Гнучко · Чесно).
 */
function StatBlock({
  value,
  label,
  align = 'center',
  onDark = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-4xl)',
      lineHeight: 1,
      letterSpacing: '-0.02em',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-strong)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, label));
}

/**
 * StepCard — a numbered process step for dark sections.
 */
function StepCard({
  step,
  title,
  description,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      padding: '26px 24px 30px',
      minHeight: 'auto',
      background: 'transparent',
      border: '1px solid var(--border-dark)',
      borderRadius: 'var(--radius-lg)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-2xl)',
      lineHeight: 1,
      color: 'var(--clay-300)'
    }
  }, step), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '6px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-xl)',
      color: 'var(--text-on-dark)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--text-on-dark-muted)'
    }
  }, description));
}
Object.assign(__ds_scope, { StatBlock, StepCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — a small status/category chip.
 */
function Badge({
  children,
  variant = 'neutral',
  // 'neutral' | 'rust' | 'blush' | 'success' | 'dark' | 'outline'
  size = 'md',
  // 'sm' | 'md'
  icon,
  style,
  ...rest
}) {
  const variants = {
    neutral: {
      background: 'var(--paper-100)',
      color: 'var(--ink-700)',
      border: '1px solid var(--border)'
    },
    rust: {
      background: 'var(--rust-600)',
      color: 'var(--on-primary)',
      border: '1px solid transparent'
    },
    blush: {
      background: 'var(--blush)',
      color: 'var(--rust-700)',
      border: '1px solid transparent'
    },
    success: {
      background: 'rgba(47,125,79,0.12)',
      color: 'var(--success)',
      border: '1px solid transparent'
    },
    dark: {
      background: 'var(--ink-900)',
      color: 'var(--paper-0)',
      border: '1px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1.5px solid var(--border-strong)'
    }
  };
  const v = variants[variant] || variants.neutral;
  const s = size === 'sm' ? {
    h: 24,
    px: 9,
    fs: 'var(--text-2xs)'
  } : {
    h: 30,
    px: 12,
    fs: 'var(--text-xs)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: s.h,
      padding: `0 ${s.px}px`,
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: s.fs,
      letterSpacing: '0.01em',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      borderRadius: 'var(--radius-pill)',
      ...v,
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, icon), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the primary action element. Fully-pill, warm, tactile.
 */
function Button({
  children,
  variant = 'primary',
  // 'primary' | 'secondary' | 'ghost' | 'whatsapp' | 'dark'
  size = 'md',
  // 'sm' | 'md' | 'lg'
  leadingIcon,
  trailingIcon,
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      h: 'var(--control-sm)',
      px: 18,
      fs: 'var(--text-sm)'
    },
    md: {
      h: 'var(--control-md)',
      px: 26,
      fs: 'var(--text-base)'
    },
    lg: {
      h: 'var(--control-lg)',
      px: 34,
      fs: 'var(--text-lg)'
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--primary)',
      color: 'var(--on-primary)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1.5px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1px solid transparent'
    },
    whatsapp: {
      background: 'var(--whatsapp)',
      color: '#F2FBF5',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    dark: {
      background: 'var(--ink-900)',
      color: 'var(--paper-0)',
      border: '1px solid transparent'
    }
  };
  const v = variants[variant] || variants.primary;
  const [hover, setHover] = React.useState(false);
  const hoverFx = !disabled && hover ? {
    primary: {
      background: 'var(--primary-hover)'
    },
    secondary: {
      background: 'var(--paper-0)',
      borderColor: 'var(--ink-700)'
    },
    ghost: {
      background: 'var(--rust-50)',
      color: 'var(--rust-700)'
    },
    whatsapp: {
      background: 'var(--whatsapp-700)'
    },
    dark: {
      background: 'var(--ink-800)'
    }
  }[variant] : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      height: s.h,
      padding: `0 ${s.px}px`,
      width: fullWidth ? '100%' : 'auto',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: s.fs,
      lineHeight: 1,
      letterSpacing: '0.005em',
      whiteSpace: 'nowrap',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
      transform: !disabled && hover ? 'translateY(-1px)' : 'none',
      ...v,
      ...hoverFx,
      ...style
    }
  }, rest), leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      marginLeft: -2
    }
  }, leadingIcon), children, trailingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      marginRight: -2
    }
  }, trailingIcon));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — a square/round button for a single icon (nav, close, +/-).
 */
function IconButton({
  icon,
  variant = 'soft',
  // 'soft' | 'ghost' | 'outline' | 'primary'
  size = 'md',
  // 'sm' | 'md' | 'lg'
  shape = 'round',
  // 'round' | 'square'
  label,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: 36,
    md: 44,
    lg: 52
  };
  const dim = sizes[size] || sizes.md;
  const variants = {
    soft: {
      background: 'var(--paper-0)',
      color: 'var(--text-strong)',
      border: '1px solid var(--border)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1.5px solid var(--border-strong)'
    },
    primary: {
      background: 'var(--primary)',
      color: 'var(--on-primary)',
      border: '1px solid transparent'
    }
  };
  const v = variants[variant] || variants.soft;
  const [hover, setHover] = React.useState(false);
  const hoverFx = !disabled && hover ? {
    soft: {
      background: 'var(--paper-50)',
      borderColor: 'var(--border-strong)'
    },
    ghost: {
      background: 'var(--rust-50)'
    },
    outline: {
      borderColor: 'var(--ink-700)'
    },
    primary: {
      background: 'var(--primary-hover)'
    }
  }[variant] : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dim,
      height: dim,
      flex: '0 0 auto',
      display: 'inline-grid',
      placeItems: 'center',
      borderRadius: shape === 'round' ? 'var(--radius-pill)' : 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
      ...v,
      ...hoverFx,
      ...style
    }
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
/**
 * Field — label + optional hint/error wrapper for form controls.
 */
function Field({
  label,
  htmlFor,
  hint,
  error,
  required,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-strong)',
      letterSpacing: '0.005em'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--rust-600)',
      marginLeft: 3
    }
  }, "*")), children, (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--danger)' : 'var(--text-faint)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const baseField = (invalid, focus) => ({
  width: '100%',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-base)',
  color: 'var(--text-strong)',
  background: 'var(--white)',
  border: `1.5px solid ${invalid ? 'var(--danger)' : focus ? 'var(--primary)' : 'var(--border-strong)'}`,
  borderRadius: 'var(--radius-md)',
  boxShadow: focus ? '0 0 0 4px var(--focus-ring)' : 'none',
  outline: 'none',
  transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
});

/**
 * Input — single-line text field.
 */
function Input({
  value,
  onChange,
  placeholder,
  type = 'text',
  name,
  id,
  invalid = false,
  disabled = false,
  leadingIcon,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 16,
      display: 'inline-flex',
      color: 'var(--text-faint)',
      pointerEvents: 'none'
    }
  }, leadingIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    name: name,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...baseField(invalid, focus),
      height: 'var(--control-lg)',
      padding: leadingIcon ? '0 16px 0 46px' : '0 var(--field-pad-x)',
      opacity: disabled ? 0.6 : 1,
      cursor: disabled ? 'not-allowed' : 'text',
      ...style
    }
  }, rest)));
}

/**
 * Textarea — multi-line text field.
 */
function Textarea({
  value,
  onChange,
  placeholder,
  name,
  id,
  rows = 4,
  invalid = false,
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    name: name,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...baseField(invalid, focus),
      padding: '14px var(--field-pad-x)',
      resize: 'vertical',
      lineHeight: 'var(--leading-normal)',
      minHeight: 120,
      opacity: disabled ? 0.6 : 1,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Input, Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — styled native dropdown that matches Input.
 */
function Select({
  value,
  onChange,
  name,
  id,
  options = [],
  placeholder,
  invalid = false,
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    name: name,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: 'var(--control-lg)',
      padding: '0 44px 0 var(--field-pad-x)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: value ? 'var(--text-strong)' : 'var(--text-faint)',
      background: 'var(--white)',
      border: `1.5px solid ${invalid ? 'var(--danger)' : focus ? 'var(--primary)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? '0 0 0 4px var(--focus-ring)' : 'none',
      outline: 'none',
      appearance: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 16,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/icons.jsx
try { (() => {
/* Phosphor Icons (https://phosphoricons.com) — loaded via the @phosphor-icons/web
   font (regular + fill weights, linked in the page <head>). Each export keeps the
   same API as before — <Icon.name size={n} /> — but renders a Phosphor glyph.
   The `sw` prop is accepted and ignored (Phosphor uses weights, not stroke width). */
(() => {
  const make = (name, weightClass = 'ph') => ({
    size = 24,
    color,
    style,
    sw,
    ...p
  }) => React.createElement('i', {
    className: `${weightClass} ph-${name}`,
    style: {
      fontSize: size,
      lineHeight: 1,
      display: 'inline-flex',
      color,
      ...style
    },
    ...p
  });
  const Icon = {
    building: make('buildings'),
    wrench: make('wrench'),
    sofa: make('couch'),
    roller: make('paint-roller'),
    settings: make('gear'),
    tree: make('tree'),
    drywall: make('wall'),
    door: make('door'),
    floor: make('grid-four'),
    lock: make('lock-key'),
    phone: make('phone'),
    mail: make('envelope'),
    mapPin: make('map-pin'),
    clock: make('clock'),
    check: make('check'),
    checkCircle: make('check-circle'),
    arrowRight: make('arrow-right'),
    arrowLeft: make('arrow-left'),
    x: make('x'),
    camera: make('camera'),
    upload: make('upload-simple'),
    menu: make('list'),
    zap: make('lightning'),
    shield: make('shield-check'),
    whatsapp: make('whatsapp-logo', 'ph-fill'),
    star: make('star', 'ph-fill')
  };
  window.Icon = Icon;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/quote-wizard.jsx
try { (() => {
/* QuoteWizard — guided multi-step booking/quote flow.
   A major upgrade over the original single contact form: it walks the
   customer from "what do you need" → details → photos → contact → confirmed. */
(() => {
  const {
    Button,
    Field,
    Input,
    Textarea,
    Select,
    Badge
  } = window.DesignSystem_9c3c7d;
  const SERVICES = [{
    id: 'interior',
    label: 'Внутрішні роботи + гіпсокартон',
    icon: 'drywall'
  }, {
    id: 'doors',
    label: 'Монтаж дверей',
    icon: 'door'
  }, {
    id: 'floor',
    label: 'Укладання підлоги',
    icon: 'floor'
  }, {
    id: 'locks',
    label: 'Заміна замків',
    icon: 'lock'
  }, {
    id: 'furniture',
    label: 'Монтаж меблів',
    icon: 'sofa'
  }, {
    id: 'repair',
    label: 'Дрібний ремонт',
    icon: 'wrench'
  }, {
    id: 'maint',
    label: 'Hausmeisterservice',
    icon: 'building'
  }, {
    id: 'garden',
    label: 'Садові роботи',
    icon: 'tree'
  }];
  const OBJECTS = [{
    id: 'apartment',
    label: 'Квартира'
  }, {
    id: 'house',
    label: 'Будинок'
  }, {
    id: 'commercial',
    label: "Комерційний об'єкт"
  }];
  const URGENCY = [{
    id: 'urgent',
    label: 'Терміново',
    hint: 'Якнайшвидше'
  }, {
    id: 'soon',
    label: 'Цього тижня',
    hint: '2–7 днів'
  }, {
    id: 'planned',
    label: 'Планую',
    hint: 'Гнучкі дати'
  }];
  const STEPS = ['Послуга', "Об'єкт", 'Деталі', 'Контакт'];
  function ProgressRail({
    step
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 0
      }
    }, STEPS.map((s, i) => {
      const done = i < step,
        active = i === step;
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: s
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 10
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 30,
          height: 30,
          borderRadius: '50%',
          display: 'grid',
          placeItems: 'center',
          flex: '0 0 auto',
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 15,
          background: done ? 'var(--primary)' : active ? 'var(--ink-900)' : 'var(--paper-100)',
          color: done || active ? 'var(--paper-0)' : 'var(--text-faint)',
          border: active ? '0' : '1px solid var(--border)',
          transition: 'all var(--dur-base) var(--ease-out)'
        }
      }, done ? /*#__PURE__*/React.createElement(window.Icon.check, {
        size: 16
      }) : i + 1), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-body)',
          fontWeight: active ? 700 : 600,
          fontSize: 'var(--text-sm)',
          color: active ? 'var(--text-strong)' : done ? 'var(--text-muted)' : 'var(--text-faint)',
          whiteSpace: 'nowrap'
        }
      }, s)), i < STEPS.length - 1 && /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1,
          height: 2,
          margin: '0 14px',
          borderRadius: 2,
          background: done ? 'var(--rust-300)' : 'var(--border)'
        }
      }));
    }));
  }
  function Toggle({
    selected,
    onClick,
    children,
    style
  }) {
    const [h, setH] = React.useState(false);
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: onClick,
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        textAlign: 'left',
        width: '100%',
        padding: '16px 18px',
        cursor: 'pointer',
        background: selected ? 'var(--rust-50)' : 'var(--white)',
        border: `1.5px solid ${selected ? 'var(--primary)' : h ? 'var(--border-strong)' : 'var(--border)'}`,
        borderRadius: 'var(--radius-md)',
        transition: 'all var(--dur-fast) var(--ease-out)',
        boxShadow: selected ? '0 0 0 4px var(--focus-ring)' : 'none',
        ...style
      }
    }, children);
  }
  function QuoteWizard({
    onClose,
    embedded = false
  }) {
    const I = window.Icon;
    const [step, setStep] = React.useState(0);
    const [done, setDone] = React.useState(false);
    const [data, setData] = React.useState({
      services: ['doors'],
      object: 'apartment',
      urgency: 'soon',
      desc: '',
      photos: 2,
      name: '',
      phone: '',
      contact: 'whatsapp',
      email: ''
    });
    const set = patch => setData(d => ({
      ...d,
      ...patch
    }));
    const toggleService = id => set({
      services: data.services.includes(id) ? data.services.filter(s => s !== id) : [...data.services, id]
    });
    const canNext = [data.services.length > 0, !!data.object && !!data.urgency, true, data.name.trim() && data.phone.trim()][step];
    const next = () => {
      if (step < 3) setStep(step + 1);else setDone(true);
    };
    const back = () => setStep(Math.max(0, step - 1));
    const summaryLabels = data.services.map(id => SERVICES.find(s => s.id === id)?.label).filter(Boolean);
    if (done) {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          padding: '52px 48px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 20
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 76,
          height: 76,
          borderRadius: '50%',
          background: 'rgba(47,125,79,0.12)',
          color: 'var(--success)',
          display: 'grid',
          placeItems: 'center'
        }
      }, /*#__PURE__*/React.createElement(I.checkCircle, {
        size: 40,
        sw: 1.8
      })), /*#__PURE__*/React.createElement("h2", {
        style: {
          margin: 0,
          fontSize: 'var(--text-3xl)'
        }
      }, "\u0417\u0430\u043F\u0438\u0442 \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u043D\u043E!"), /*#__PURE__*/React.createElement("p", {
        style: {
          margin: 0,
          maxWidth: '44ch',
          fontSize: 'var(--text-lg)',
          color: 'var(--text-muted)'
        }
      }, "\u0414\u044F\u043A\u0443\u0454\u043C\u043E, ", data.name || 'друже', ". \u041C\u0438 \u043F\u0435\u0440\u0435\u0434\u0437\u0432\u043E\u043D\u0438\u043C\u043E \u0430\u0431\u043E \u043D\u0430\u043F\u0438\u0448\u0435\u043C\u043E \u0443 ", /*#__PURE__*/React.createElement("strong", {
        style: {
          color: 'var(--text-strong)'
        }
      }, data.contact === 'whatsapp' ? 'WhatsApp' : data.contact === 'email' ? 'e-mail' : 'телефон'), " \u0437\u0430\u0437\u0432\u0438\u0447\u0430\u0439 \u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C ", /*#__PURE__*/React.createElement("strong", {
        style: {
          color: 'var(--text-strong)'
        }
      }, "24 \u0433\u043E\u0434\u0438\u043D"), "."), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 10,
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: 6
        }
      }, summaryLabels.map(l => /*#__PURE__*/React.createElement(Badge, {
        key: l,
        variant: "blush"
      }, l))), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 12,
          marginTop: 12
        }
      }, /*#__PURE__*/React.createElement(Button, {
        variant: "whatsapp",
        leadingIcon: /*#__PURE__*/React.createElement(I.whatsapp, {
          size: 18
        })
      }, "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u0438 \u0443 WhatsApp"), onClose && /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        onClick: onClose
      }, "\u0413\u043E\u0442\u043E\u0432\u043E")));
    }
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        maxHeight: embedded ? 'none' : '88vh'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '26px 36px 22px',
        borderBottom: '1px solid var(--border)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "eyebrow",
      style: {
        marginBottom: 4
      }
    }, "\u0411\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0430 \u043E\u0446\u0456\u043D\u043A\u0430"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 'var(--text-2xl)'
      }
    }, "\u0420\u043E\u0437\u043A\u0430\u0436\u0456\u0442\u044C \u043F\u0440\u043E \u0437\u0430\u0434\u0430\u0447\u0443")), onClose && /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      "aria-label": "\u0417\u0430\u043A\u0440\u0438\u0442\u0438",
      style: {
        width: 42,
        height: 42,
        borderRadius: '50%',
        border: '1px solid var(--border)',
        background: 'var(--white)',
        cursor: 'pointer',
        display: 'grid',
        placeItems: 'center',
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(I.x, {
      size: 20
    }))), /*#__PURE__*/React.createElement(ProgressRail, {
      step: step
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '30px 36px',
        overflowY: 'auto',
        flex: 1
      }
    }, step === 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 0,
        color: 'var(--text-muted)'
      }
    }, "\u0429\u043E \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E \u0437\u0440\u043E\u0431\u0438\u0442\u0438? \u041C\u043E\u0436\u043D\u0430 \u043E\u0431\u0440\u0430\u0442\u0438 \u043A\u0456\u043B\u044C\u043A\u0430."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 12
      }
    }, SERVICES.map(s => {
      const Ico = I[s.icon];
      const on = data.services.includes(s.id);
      return /*#__PURE__*/React.createElement(Toggle, {
        key: s.id,
        selected: on,
        onClick: () => toggleService(s.id)
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          color: on ? 'var(--primary)' : 'var(--ink-500)',
          display: 'inline-flex'
        }
      }, /*#__PURE__*/React.createElement(Ico, {
        size: 24,
        sw: 1.9
      })), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-body)',
          fontWeight: 700,
          fontSize: 'var(--text-base)',
          color: 'var(--text-strong)',
          lineHeight: 1.2
        }
      }, s.label), /*#__PURE__*/React.createElement("span", {
        style: {
          marginLeft: 'auto',
          color: 'var(--primary)',
          opacity: on ? 1 : 0,
          transition: 'opacity var(--dur-fast)'
        }
      }, /*#__PURE__*/React.createElement(I.checkCircle, {
        size: 20
      })));
    }))), step === 1 && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 26
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: '0 0 12px'
      }
    }, "\u0422\u0438\u043F \u043E\u0431'\u0454\u043A\u0442\u0430"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: 12
      }
    }, OBJECTS.map(o => /*#__PURE__*/React.createElement(Toggle, {
      key: o.id,
      selected: data.object === o.id,
      onClick: () => set({
        object: o.id
      }),
      style: {
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        color: 'var(--text-strong)'
      }
    }, o.label))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: '0 0 12px'
      }
    }, "\u0422\u0435\u0440\u043C\u0456\u043D\u043E\u0432\u0456\u0441\u0442\u044C"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: 12
      }
    }, URGENCY.map(u => /*#__PURE__*/React.createElement(Toggle, {
      key: u.id,
      selected: data.urgency === u.id,
      onClick: () => set({
        urgency: u.id
      }),
      style: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        color: 'var(--text-strong)'
      }
    }, u.id === 'urgent' && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--primary)',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(I.zap, {
      size: 17
    })), u.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-sm)',
        color: 'var(--text-muted)'
      }
    }, u.hint))))), /*#__PURE__*/React.createElement(Field, {
      label: "\u041C\u0456\u0441\u0442\u043E / \u0440\u0430\u0439\u043E\u043D \u0432\u0438\u0457\u0437\u0434\u0443"
    }, /*#__PURE__*/React.createElement(Select, {
      value: data.city,
      onChange: e => set({
        city: e.target.value
      }),
      placeholder: "\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E\u2026",
      options: ['Обергаузен', 'Дуйсбург', 'Ессен', 'Мюльгайм', 'Дюссельдорф', 'Ботроп', 'Гельзенкірхен', 'Бохум', 'Ратінген', 'Дінслакен', 'Моерс', 'Кельн']
    }))), step === 2 && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 22
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "\u041E\u043F\u0438\u0448\u0456\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0443",
      hint: "\u0427\u0438\u043C \u0434\u0435\u0442\u0430\u043B\u044C\u043D\u0456\u0448\u0435 \u2014 \u0442\u0438\u043C \u0442\u043E\u0447\u043D\u0456\u0448\u0430 \u043E\u0446\u0456\u043D\u043A\u0430."
    }, /*#__PURE__*/React.createElement(Textarea, {
      value: data.desc,
      onChange: e => set({
        desc: e.target.value
      }),
      rows: 4,
      placeholder: "\u041D\u0430\u043F\u0440.: \u0432\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0438 2 \u043C\u0456\u0436\u043A\u0456\u043C\u043D\u0430\u0442\u043D\u0456 \u0434\u0432\u0435\u0440\u0456 \u0442\u0430 \u0437\u0430\u043C\u0456\u043D\u0438\u0442\u0438 \u0437\u0430\u043C\u043E\u043A \u043D\u0430 \u0432\u0445\u0456\u0434\u043D\u0438\u0445\u2026"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 'var(--text-sm)',
        color: 'var(--text-strong)',
        marginBottom: 8
      }
    }, "\u0424\u043E\u0442\u043E \u0430\u0431\u043E \u0432\u0456\u0434\u0435\u043E ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-faint)',
        fontWeight: 400
      }
    }, "(\u043D\u0435\u043E\u0431\u043E\u0432'\u044F\u0437\u043A\u043E\u0432\u043E)")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 12
      }
    }, [0, 1, 2, 3].map(i => {
      const filled = i < data.photos;
      return /*#__PURE__*/React.createElement("button", {
        key: i,
        type: "button",
        onClick: () => set({
          photos: filled ? i : i + 1
        }),
        style: {
          aspectRatio: '1',
          borderRadius: 'var(--radius-md)',
          cursor: 'pointer',
          border: filled ? '1.5px solid var(--rust-300)' : '1.5px dashed var(--border-strong)',
          background: filled ? 'var(--rust-50)' : 'var(--white)',
          color: filled ? 'var(--primary)' : 'var(--text-faint)',
          display: 'grid',
          placeItems: 'center'
        }
      }, filled ? /*#__PURE__*/React.createElement(I.check, {
        size: 22
      }) : /*#__PURE__*/React.createElement(I.camera, {
        size: 22
      }));
    })))), step === 3 && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "\u0406\u043C'\u044F",
      required: true
    }, /*#__PURE__*/React.createElement(Input, {
      value: data.name,
      onChange: e => set({
        name: e.target.value
      }),
      placeholder: "\u0412\u0430\u0448\u0435 \u0456\u043C'\u044F"
    })), /*#__PURE__*/React.createElement(Field, {
      label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
      required: true
    }, /*#__PURE__*/React.createElement(Input, {
      value: data.phone,
      onChange: e => set({
        phone: e.target.value
      }),
      type: "tel",
      placeholder: "+49 \u2026",
      leadingIcon: /*#__PURE__*/React.createElement(I.phone, {
        size: 18
      })
    }))), /*#__PURE__*/React.createElement(Field, {
      label: "E-mail"
    }, /*#__PURE__*/React.createElement(Input, {
      value: data.email,
      onChange: e => set({
        email: e.target.value
      }),
      type: "email",
      placeholder: "you@email.com",
      leadingIcon: /*#__PURE__*/React.createElement(I.mail, {
        size: 18
      })
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 'var(--text-sm)',
        color: 'var(--text-strong)',
        marginBottom: 8
      }
    }, "\u042F\u043A \u0437 \u0432\u0430\u043C\u0438 \u0437\u0432'\u044F\u0437\u0430\u0442\u0438\u0441\u044F?"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: 12
      }
    }, [{
      id: 'phone',
      label: 'Телефон',
      icon: 'phone'
    }, {
      id: 'whatsapp',
      label: 'WhatsApp',
      icon: 'whatsapp'
    }, {
      id: 'email',
      label: 'E-mail',
      icon: 'mail'
    }].map(c => {
      const Ico = I[c.icon];
      return /*#__PURE__*/React.createElement(Toggle, {
        key: c.id,
        selected: data.contact === c.id,
        onClick: () => set({
          contact: c.id
        }),
        style: {
          justifyContent: 'center',
          gap: 8
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          color: data.contact === c.id ? c.id === 'whatsapp' ? 'var(--whatsapp)' : 'var(--primary)' : 'var(--ink-500)',
          display: 'inline-flex'
        }
      }, /*#__PURE__*/React.createElement(Ico, {
        size: 19
      })), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-body)',
          fontWeight: 700,
          color: 'var(--text-strong)'
        }
      }, c.label));
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '20px 36px',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        background: 'var(--paper-0)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        color: 'var(--text-muted)',
        fontSize: 'var(--text-sm)'
      }
    }, /*#__PURE__*/React.createElement(I.shield, {
      size: 18
    }), " \u0411\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u043E \u0442\u0430 \u0431\u0435\u0437 \u0437\u043E\u0431\u043E\u0432'\u044F\u0437\u0430\u043D\u044C"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12
      }
    }, step > 0 && /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: back,
      leadingIcon: /*#__PURE__*/React.createElement(I.arrowLeft, {
        size: 18
      })
    }, "\u041D\u0430\u0437\u0430\u0434"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: next,
      disabled: !canNext,
      trailingIcon: step < 3 ? /*#__PURE__*/React.createElement(I.arrowRight, {
        size: 18
      }) : null
    }, step < 3 ? 'Далі' : 'Надіслати запит'))));
  }
  window.QuoteWizard = QuoteWizard;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/quote-wizard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/site-bottom.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Bottom site sections: Projects, Reviews, FAQ, Contact (booking), Footer. */
(() => {
  const {
    Button: B2,
    Badge: Bd2,
    Wordmark: WM2,
    ReviewCard: RC2,
    Accordion: AC2
  } = window.DesignSystem_9c3c7d;
  const UI2 = window.Icon;

  /* ---------- Projects (masonry) ---------- */
  function Projects() {
    const photos = ['../../assets/photos/proj-handle.jpg', '../../assets/photos/proj-paint.jpg', '../../assets/photos/proj-radiator.jpg', '../../assets/photos/proj-ceiling.jpg'];
    return /*#__PURE__*/React.createElement("section", {
      id: "projects",
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '80px 24px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: 24,
        marginBottom: 36,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "eyebrow",
      style: {
        marginBottom: 12
      }
    }, "\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'var(--text-3xl)',
        margin: 0
      }
    }, "\u041F\u0440\u043E\u0435\u043A\u0442\u0438 \u0442\u0430 \u0442\u0438\u043F\u043E\u0432\u0456 \u0440\u043E\u0431\u043E\u0442\u0438")), /*#__PURE__*/React.createElement(Bd2, {
      variant: "neutral",
      size: "md"
    }, "120+ \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u0438\u0445 \u0437\u0430\u0434\u0430\u0447")), /*#__PURE__*/React.createElement("div", {
      style: {
        columnCount: 4,
        columnGap: 18
      },
      className: "proj-masonry"
    }, [0, 1, 2, 3, 1, 2, 0, 3].map((idx, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        breakInside: 'avoid',
        marginBottom: 18,
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        background: 'var(--paper-100)',
        boxShadow: 'var(--shadow-card)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: photos[idx],
      alt: "\u041F\u0440\u043E\u0435\u043A\u0442",
      style: {
        width: '100%',
        display: 'block'
      }
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        marginTop: 28
      }
    }, /*#__PURE__*/React.createElement(B2, {
      variant: "secondary",
      size: "lg"
    }, "\u0411\u0456\u043B\u044C\u0448\u0435 \u043F\u0440\u043E\u0454\u043A\u0442\u0456\u0432")));
  }

  /* ---------- Reviews ---------- */
  function Reviews() {
    const data = [{
      name: 'Вика Мит',
      role: 'Montage von Türen',
      quote: 'Tür professionell und schnell eingebaut. Vielen Dank!'
    }, {
      name: 'Artyom',
      role: 'Sanitär & Geräteanschluss',
      quote: 'Sehr guter Hausmeister. Wasserhahn und Waschmaschine schnell erledigt. Zuverlässig und freundlich.'
    }, {
      name: 'Ellen Habarat',
      role: 'Faire Arbeit',
      quote: 'Schnell, professionell, faire Preise. Werde nur noch diese Firma beauftragen!'
    }, {
      name: 'Вика Виктоша',
      role: 'Hochwertige Arbeit',
      quote: 'Alles sorgfältig und hochwertig gemacht. Klare Empfehlung!'
    }, {
      name: 'Svitlana Rupcheva',
      role: 'Detailarbeit',
      quote: 'Professionell, schnell, aufmerksam für alle Details. Komme definitiv wieder!'
    }, {
      name: 'Abdo Harouchi',
      role: 'Zuverlässiger Service',
      quote: 'Von ganzem Herzen empfehlenswert — schnell, zuverlässig und professionell!'
    }];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--paper-100)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '80px 24px'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'var(--text-3xl)',
        margin: '0 0 8px'
      }
    }, "\u0429\u043E \u043A\u0430\u0436\u0443\u0442\u044C \u043A\u043B\u0456\u0454\u043D\u0442\u0438"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-muted)',
        margin: '0 0 36px',
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        gap: 2,
        color: 'var(--star)'
      }
    }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(UI2.star, {
      key: i,
      size: 16
    }))), "Google Rezensionen: 5,0 \u0456\u0437 11 \u0432\u0456\u0434\u0433\u0443\u043A\u0456\u0432"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 20
      },
      className: "rev-grid"
    }, data.map(r => /*#__PURE__*/React.createElement(RC2, _extends({
      key: r.name
    }, r, {
      rating: 5
    }))))));
  }

  /* ---------- FAQ ---------- */
  function Faq() {
    const items = [{
      q: 'У яких містах ви працюєте?',
      a: 'Наша команда працює в Обергаузені, Дуйсбурзі, Ессені, Мюльгаймі-ан-дер-Рур, Дюссельдорфі, Ботропі, Гельзенкірхені, Бохумі, Ратінгені, Дінслакені, Моерсі та Кельні.'
    }, {
      q: 'Які послуги найбільш затребувані?',
      a: 'Найчастіше — монтаж дверей, укладання підлоги, гіпсокартон та заміна замків. Також регулярний Hausmeisterservice для керуючих компаній.'
    }, {
      q: 'Як швидко ви відповідаєте?',
      a: 'Зазвичай протягом 24 годин. Для термінових задач (наприклад, заміна замка) — ще швидше.'
    }, {
      q: 'Чи є прозорі ціни?',
      a: 'Так. Перед стартом ви отримуєте зрозумілу оцінку з чесними цінами та орієнтовним терміном — без прихованих доплат.'
    }, {
      q: 'Чи потрібен договір?',
      a: 'Для приватних дрібних робіт договір не обов\u2019язковий. Для регулярного обслуговування об\u2019єктів ми оформлюємо угоду на ваш запит.'
    }];
    return /*#__PURE__*/React.createElement("section", {
      id: "faq",
      style: {
        maxWidth: 880,
        margin: '0 auto',
        padding: '80px 24px'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'var(--text-3xl)',
        margin: '0 0 32px'
      }
    }, "\u0427\u0430\u0441\u0442\u0456 \u043F\u0438\u0442\u0430\u043D\u043D\u044F"), /*#__PURE__*/React.createElement(AC2, {
      items: items,
      defaultOpen: 0
    }));
  }

  /* ---------- Contact / booking ---------- */
  function ContactBooking({
    children
  }) {
    return /*#__PURE__*/React.createElement("section", {
      id: "contact",
      style: {
        background: 'var(--surface-dark)',
        color: 'var(--text-on-dark)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '88px 24px',
        display: 'grid',
        gridTemplateColumns: '0.9fr 1.1fr',
        gap: 40,
        alignItems: 'start'
      },
      className: "contact-grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "eyebrow",
      style: {
        marginBottom: 14
      }
    }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'var(--text-3xl)',
        color: 'var(--text-on-dark)',
        margin: '0 0 28px',
        maxWidth: '14ch'
      }
    }, "\u041E\u043F\u0438\u0448\u0456\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0443 \u2014 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u043C\u043E \u044F\u043A\u043D\u0430\u0439\u0448\u0432\u0438\u0434\u0448\u0435"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
        marginBottom: 28
      }
    }, [['phone', '+49 177 4828126'], ['mail', 'mkovalevskij47@gmail.com'], ['mapPin', 'Vestischestr 184, 46145 Oberhausen'], ['clock', 'Пн–Сб: 08:00–19:00 · Нд: вихідний']].map(([ic, t]) => {
      const Ico = UI2[ic];
      return /*#__PURE__*/React.createElement("div", {
        key: t,
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          color: 'var(--text-on-dark)'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 44,
          height: 44,
          flex: '0 0 auto',
          borderRadius: 'var(--radius-md)',
          background: 'rgba(243,238,229,0.08)',
          display: 'grid',
          placeItems: 'center',
          color: 'var(--clay-300)'
        }
      }, /*#__PURE__*/React.createElement(Ico, {
        size: 21
      })), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 'var(--text-lg)'
        }
      }, t));
    })), /*#__PURE__*/React.createElement(B2, {
      variant: "whatsapp",
      size: "lg",
      leadingIcon: /*#__PURE__*/React.createElement(UI2.whatsapp, {
        size: 19
      }),
      fullWidth: true
    }, "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u0438 \u0443 WhatsApp")), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--surface)',
        color: 'var(--text)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--shadow-xl)',
        overflow: 'hidden'
      }
    }, children)));
  }

  /* ---------- Footer ---------- */
  function SiteFooter() {
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: 'var(--ink-950)',
        color: 'var(--text-on-dark)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '40px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(WM2, {
      variant: "full",
      tone: "cream",
      size: "sm"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-on-dark-muted)',
        fontSize: 'var(--text-sm)'
      }
    }, "\xA9 2026 Handwerks- & Hausmeisterservice Kovalivskyi"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 22
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        color: 'var(--text-on-dark)',
        fontWeight: 600
      }
    }, "\u0406\u043C\u043F\u0440\u0435\u0441\u0443\u043C"), /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        color: 'var(--text-on-dark)',
        fontWeight: 600
      }
    }, "\u0417\u0430\u0445\u0438\u0441\u0442 \u0434\u0430\u043D\u0438\u0445"))));
  }
  Object.assign(window, {
    Projects,
    Reviews,
    Faq,
    ContactBooking,
    SiteFooter
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/site-bottom.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/site-top.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Site sections for the redesigned Ковалівський website. */
(() => {
  const {
    Button,
    Badge,
    Wordmark,
    StatBlock,
    ServiceCard,
    StepCard,
    ReviewCard,
    Accordion,
    Card
  } = window.DesignSystem_9c3c7d;
  const UI = window.Icon;
  const CITIES = ['Обергаузен', 'Дуйсбург', 'Ессен', 'Мюльгайм', 'Дюссельдорф', 'Ботроп', 'Гельзенкірхен', 'Бохум', 'Ратінген', 'Дінслакен', 'Моерс', 'Кельн'];

  /* ---------- Header ---------- */
  function SiteHeader({
    onQuote
  }) {
    const links = [['Послуги', '#services'], ['Процес', '#process'], ['Проекти', '#projects'], ['Локації', '#faq'], ['Контакти', '#contact']];
    const [open, setOpen] = React.useState(false);
    React.useEffect(() => {
      document.body.style.overflow = open ? 'hidden' : '';
      return () => {
        document.body.style.overflow = '';
      };
    }, [open]);
    const go = href => {
      setOpen(false);
      const el = document.querySelector(href);
      if (el) window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 90,
        behavior: 'smooth'
      });
    };
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: 'sticky',
        top: 16,
        zIndex: 50,
        padding: '0 16px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1280,
        margin: '0 auto',
        background: 'var(--nav-bg, rgba(252,250,244,0.82))',
        backdropFilter: 'blur(14px)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-pill)',
        boxShadow: 'var(--shadow-float)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 14px 12px 22px'
      }
    }, /*#__PURE__*/React.createElement(Wordmark, {
      variant: "full",
      tone: "ink",
      size: "md"
    }), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        gap: 30
      },
      className: "nav-links"
    }, links.map(([l, h]) => /*#__PURE__*/React.createElement("a", {
      key: l,
      href: h,
      onClick: e => {
        e.preventDefault();
        go(h);
      },
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: 'var(--text-base)',
        color: 'var(--ink-700)'
      }
    }, l))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10
      },
      className: "header-cta"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "whatsapp",
      leadingIcon: /*#__PURE__*/React.createElement(UI.whatsapp, {
        size: 18
      })
    }, "WhatsApp"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: onQuote
    }, "\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438 \u0437\u0430\u043F\u0438\u0442")), /*#__PURE__*/React.createElement("button", {
      className: "menu-btn",
      "aria-label": "\u041C\u0435\u043D\u044E",
      "aria-expanded": open,
      onClick: () => setOpen(o => !o),
      style: {
        display: 'none',
        width: 46,
        height: 46,
        flex: '0 0 auto',
        borderRadius: '50%',
        border: '1px solid var(--border)',
        background: 'var(--white)',
        cursor: 'pointer',
        placeItems: 'center',
        color: 'var(--text-strong)'
      }
    }, open ? /*#__PURE__*/React.createElement(UI.x, {
      size: 22
    }) : /*#__PURE__*/React.createElement(UI.menu, {
      size: 22
    }))), /*#__PURE__*/React.createElement("div", {
      className: "mobile-drawer",
      "data-open": open,
      onClick: e => e.target === e.currentTarget && setOpen(false)
    }, /*#__PURE__*/React.createElement("div", {
      className: "mobile-sheet"
    }, /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, links.map(([l, h]) => /*#__PURE__*/React.createElement("a", {
      key: l,
      href: h,
      onClick: e => {
        e.preventDefault();
        go(h);
      },
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '18px 4px',
        borderBottom: '1px solid var(--border)',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'var(--text-xl)',
        color: 'var(--text-strong)'
      }
    }, l, /*#__PURE__*/React.createElement(UI.arrowRight, {
      size: 20
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      fullWidth: true,
      onClick: () => {
        setOpen(false);
        onQuote();
      }
    }, "\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438 \u0437\u0430\u043F\u0438\u0442"), /*#__PURE__*/React.createElement(Button, {
      variant: "whatsapp",
      size: "lg",
      fullWidth: true,
      leadingIcon: /*#__PURE__*/React.createElement(UI.whatsapp, {
        size: 19
      })
    }, "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u0438 \u0443 WhatsApp"), /*#__PURE__*/React.createElement("a", {
      href: "tel:+491774828126",
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        padding: '8px',
        fontWeight: 700,
        color: 'var(--text-strong)'
      }
    }, /*#__PURE__*/React.createElement(UI.phone, {
      size: 18
    }), " +49 177 4828126")))));
  }

  /* ---------- Hero ---------- */
  function Hero({
    onQuote
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: 1280,
        margin: '0 auto',
        padding: '28px 24px 30px',
        display: 'grid',
        gridTemplateColumns: '1.05fr 0.95fr',
        gap: 56,
        alignItems: 'start'
      },
      className: "hero-grid"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: 60
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 'clamp(40px, 4.6vw, 62px)',
        margin: '0 0 20px',
        lineHeight: 1.05
      }
    }, "Hausmeister &", /*#__PURE__*/React.createElement("br", null), "Handwerksservice", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--primary)'
      }
    }, "\u0437 \u0444\u043E\u043A\u0443\u0441\u043E\u043C \u043D\u0430 \u0434\u0435\u0442\u0430\u043B\u044F\u0445")), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--text-lg)',
        color: 'var(--text-muted)',
        maxWidth: '46ch',
        margin: '0 0 26px'
      }
    }, "\u0411\u0430\u0433\u0430\u0442\u043E\u0440\u0456\u0447\u043D\u0438\u0439 \u0434\u043E\u0441\u0432\u0456\u0434, \u0447\u0438\u0441\u0442\u0435 \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043D\u044F \u0442\u0430 \u0448\u0432\u0438\u0434\u043A\u0438\u0439 \u0437\u0432\u043E\u0440\u043E\u0442\u043D\u0438\u0439 \u0437\u0432'\u044F\u0437\u043E\u043A. \u0413\u0456\u043F\u0441\u043E\u043A\u0430\u0440\u0442\u043E\u043D, \u043C\u043E\u043D\u0442\u0430\u0436 \u0434\u0432\u0435\u0440\u0435\u0439 \u0442\u0430 \u0443\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u043F\u0456\u0434\u043B\u043E\u0433\u0438."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        marginBottom: 28
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex'
      }
    }, ['В', 'A', 'E', 'S'].map((c, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        width: 38,
        height: 38,
        borderRadius: '50%',
        background: 'var(--blush)',
        color: 'var(--blush-ink)',
        display: 'grid',
        placeItems: 'center',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 16,
        marginLeft: i ? -10 : 0,
        border: '2px solid var(--bg)'
      }
    }, c))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        gap: 2,
        color: 'var(--star)'
      }
    }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(UI.star, {
      key: i,
      size: 15
    }))), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-sm)',
        color: 'var(--text-muted)'
      }
    }, "5,0 \xB7 11 Google-\u0432\u0456\u0434\u0433\u0443\u043A\u0456\u0432"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      },
      className: "hero-cta"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      leadingIcon: /*#__PURE__*/React.createElement(UI.phone, {
        size: 19
      })
    }, "\u0417\u0430\u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443\u0432\u0430\u0442\u0438"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "lg",
      onClick: onQuote
    }, "\u041E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u043E\u0446\u0456\u043D\u043A\u0443"))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: 'var(--radius-2xl)',
        overflow: 'hidden',
        aspectRatio: '4/5',
        background: 'var(--paper-100)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/photos/hero-worker.jpg",
      alt: "\u041C\u0430\u0439\u0441\u0442\u0435\u0440 \u0437\u0430 \u0440\u043E\u0431\u043E\u0442\u043E\u044E",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: -22,
        bottom: 34,
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-md)',
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: 14
      },
      className: "hero-badge"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 46,
        height: 46,
        borderRadius: '50%',
        background: 'rgba(47,125,79,0.12)',
        color: 'var(--success)',
        display: 'grid',
        placeItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(UI.clock, {
      size: 24
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 22,
        color: 'var(--text-strong)',
        lineHeight: 1
      }
    }, "24 \u0433\u043E\u0434\u0438\u043D\u0438"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--text-sm)',
        color: 'var(--text-muted)'
      }
    }, "\u0421\u0435\u0440\u0435\u0434\u043D\u0456\u0439 \u0447\u0430\u0441 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0456")))));
  }

  /* ---------- Trust strip ---------- */
  function TrustStrip() {
    const stats = [['24h', 'Відповідь на запити'], ['50+ км', 'Обергаузен + округа'], ['Гнучко', 'Вихідні за домовленістю'], ['Чесно', 'Прозорі ціни']];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '36px 24px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 24
      },
      className: "trust-grid"
    }, stats.map(([v, l]) => /*#__PURE__*/React.createElement(StatBlock, {
      key: v,
      value: v,
      label: l
    }))));
  }

  /* ---------- About ---------- */
  function About() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '40px 24px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 48,
        alignItems: 'center'
      },
      className: "about-grid"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-md)',
        aspectRatio: '5/4',
        background: 'var(--paper-100)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/photos/about-drilling.jpg",
      alt: "\u041C\u043E\u043D\u0442\u0430\u0436",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "eyebrow",
      style: {
        marginBottom: 14
      }
    }, "\u041B\u043E\u043A\u0430\u043B\u044C\u043D\u0438\u0439 \u0441\u0435\u0440\u0432\u0456\u0441"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'var(--text-3xl)',
        margin: '0 0 18px'
      }
    }, "\u0414\u043B\u044F \u043A\u0432\u0430\u0440\u0442\u0438\u0440, \u0431\u0443\u0434\u0438\u043D\u043A\u0456\u0432 \u0456 \u043E\u0431'\u0454\u043A\u0442\u0456\u0432"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--text-lg)',
        color: 'var(--text-muted)',
        margin: '0 0 16px'
      }
    }, "Hausmeister und Handwerksservice Kovalivskyi \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0454 \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u0438\u0445 \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432, \u043A\u0435\u0440\u0443\u044E\u0447\u0456 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457 \u0442\u0430 \u043C\u0430\u043B\u0438\u0439 \u0431\u0456\u0437\u043D\u0435\u0441 \u0443 \u0420\u0443\u0440\u0441\u044C\u043A\u043E\u043C\u0443 \u0440\u0435\u0433\u0456\u043E\u043D\u0456."), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-muted)',
        margin: 0
      }
    }, "\u0417\u0430\u0437\u0432\u0438\u0447\u0430\u0439 \u043C\u0438 \u0440\u0435\u0430\u0433\u0443\u0454\u043C\u043E \u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C 24 \u0433\u043E\u0434\u0438\u043D \u0456 \u0432\u0438\u043A\u043E\u043D\u0443\u0454\u043C\u043E \u0440\u043E\u0431\u043E\u0442\u0438 \u0447\u0438\u0441\u0442\u043E \u0442\u0430 \u043D\u0430\u0434\u0456\u0439\u043D\u043E. \u041A\u043B\u0456\u0454\u043D\u0442\u0438 \u0446\u0456\u043D\u0443\u044E\u0442\u044C \u0448\u0432\u0438\u0434\u043A\u0443 \u0440\u0435\u0430\u043A\u0446\u0456\u044E, \u0447\u0435\u0441\u043D\u0456 \u0446\u0456\u043D\u0438 \u0442\u0430 \u0433\u043E\u0442\u043E\u0432\u043D\u0456\u0441\u0442\u044C \u0431\u0440\u0430\u0442\u0438 \u0442\u0435\u0440\u043C\u0456\u043D\u043E\u0432\u0456 \u0437\u0430\u0434\u0430\u0447\u0456.")));
  }

  /* ---------- Services ---------- */
  function Services() {
    const illus = [{
      image: '../../assets/illustrations/drywall.png',
      title: 'Внутрішні роботи + гіпсокартон',
      description: 'Монтаж гіпсокартону, обшивка та невеликі конструкції всередині приміщень.'
    }, {
      image: '../../assets/illustrations/door.png',
      title: 'Монтаж дверей',
      description: 'Монтаж міжкімнатних дверей і фурнітури під ситуацію на об\u2019єкті.'
    }, {
      image: '../../assets/illustrations/floor.png',
      title: 'Укладання підлоги',
      description: 'Ламінат і вінілова підлога, підготовка основи та монтаж плінтусів.'
    }, {
      image: '../../assets/illustrations/lock.png',
      title: 'Заміна замків',
      description: 'Термінова заміна дверних замків і віконних ручок — швидко та надійно.'
    }];
    return /*#__PURE__*/React.createElement("section", {
      id: "services",
      style: {
        background: 'var(--paper-100)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '76px 24px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "eyebrow",
      style: {
        marginBottom: 14
      }
    }, "\u041F\u043E\u0441\u043B\u0443\u0433\u0438"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'var(--text-3xl)',
        maxWidth: '20ch',
        margin: '0 0 36px'
      }
    }, "\u041F\u043E\u0441\u043B\u0443\u0433\u0438, \u044F\u043A\u0456 \u0437\u0430\u043A\u0440\u0438\u0432\u0430\u044E\u0442\u044C \u043D\u0430\u0439\u0447\u0430\u0441\u0442\u0456\u0448\u0456 \u0437\u0430\u0434\u0430\u0447\u0456 \u043D\u0430 \u043E\u0431'\u0454\u043A\u0442\u0456"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 20
      },
      className: "serv-illus"
    }, illus.map(s => /*#__PURE__*/React.createElement(ServiceCard, _extends({
      key: s.title,
      variant: "media"
    }, s))))));
  }

  /* ---------- Full service range (own section) ---------- */
  function ServiceRange() {
    const grid = [{
      icon: 'building',
      title: 'Hausmeisterservice',
      description: 'Регулярні перевірки, технічна підтримка та допомога для власників і керуючих компаній.'
    }, {
      icon: 'wrench',
      title: 'Дрібний ремонт',
      description: 'Швидкі майстрові рішення для повсякденних задач і невеликих ремонтів.'
    }, {
      icon: 'sofa',
      title: 'Монтаж меблів',
      description: 'Складання шаф, полиць, комодів та інших меблів відповідно до інструкцій.'
    }, {
      icon: 'roller',
      title: 'Ремонтні роботи',
      description: 'Підтримка при внутрішньому ремонті, модернізації та підготовчих роботах.'
    }, {
      icon: 'settings',
      title: 'Обслуговування',
      description: 'Регулярне обслуговування для збереження вартості будівель.'
    }, {
      icon: 'tree',
      title: 'Садові роботи',
      description: 'Косіння газону, бур\u2019яни, живопліт, листя та сезонний догляд територій.'
    }];
    return /*#__PURE__*/React.createElement("section", {
      id: "service-range",
      style: {
        background: 'var(--bg)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '80px 24px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "eyebrow",
      style: {
        marginBottom: 14
      }
    }, "\u041F\u043E\u0432\u043D\u0438\u0439 \u0441\u043F\u0435\u043A\u0442\u0440"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'var(--text-3xl)',
        maxWidth: '30ch',
        margin: '0 0 36px'
      }
    }, "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u0438\u0439 \u0441\u0435\u0440\u0432\u0456\u0441 \u0434\u043B\u044F \u0434\u043E\u043C\u0443, \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0438 \u0442\u0430 \u043A\u043E\u043C\u0435\u0440\u0446\u0456\u0439\u043D\u043E\u0433\u043E \u043E\u0431'\u0454\u043A\u0442\u0430"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 20
      },
      className: "serv-grid"
    }, grid.map(s => {
      const Ico = UI[s.icon];
      return /*#__PURE__*/React.createElement(ServiceCard, {
        key: s.title,
        variant: "icon",
        icon: /*#__PURE__*/React.createElement(Ico, {
          size: 28,
          sw: 1.8
        }),
        title: s.title,
        description: s.description
      });
    }))));
  }

  /* ---------- Process (dark) ---------- */
  function Process() {
    const steps = [['1', 'Контакт', 'Телефон, WhatsApp або контактна форма. Ви швидко отримаєте відповідь і перший огляд процесу.'], ['2', 'Уточнення', 'Ми перевіряємо обсяг, час і матеріали. Фото або відео допоможуть точніше оцінити задачу.'], ['3', 'Пропозиція', 'Ви отримаєте зрозумілу оцінку з чесними, прозорими цінами та відповідний термін.'], ['4', 'Виконання', 'Роботи виконуються вчасно, чисто та професійно. Після завершення — охайний результат.']];
    return /*#__PURE__*/React.createElement("section", {
      id: "process",
      style: {
        background: 'var(--surface-dark)',
        color: 'var(--text-on-dark)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '88px 24px'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'var(--text-3xl)',
        color: 'var(--text-on-dark)',
        margin: '0 0 16px'
      }
    }, "\u041F\u0440\u043E\u0446\u0435\u0441 \u0440\u043E\u0431\u043E\u0442\u0438"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-on-dark-muted)',
        maxWidth: '60ch',
        fontSize: 'var(--text-lg)',
        margin: '0 0 44px'
      }
    }, "\u0417\u0432'\u044F\u0436\u0456\u0442\u044C\u0441\u044F \u0437\u0440\u0443\u0447\u043D\u0438\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C \u2014 \u0456 \u043E\u0442\u0440\u0438\u043C\u0430\u0454\u0442\u0435 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044C \u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C 24 \u0433\u043E\u0434\u0438\u043D. \u0412\u0456\u0434 \u043F\u0435\u0440\u0448\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0443 \u0434\u043E \u0433\u043E\u0442\u043E\u0432\u043E\u0433\u043E \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0443 \u2014 \u0447\u043E\u0442\u0438\u0440\u0438 \u043F\u0440\u043E\u0441\u0442\u0456 \u043A\u0440\u043E\u043A\u0438."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 20
      },
      className: "proc-grid"
    }, steps.map(([n, t, d]) => /*#__PURE__*/React.createElement(StepCard, {
      key: n,
      step: n,
      title: t,
      description: d
    })))));
  }
  Object.assign(window, {
    SiteHeader,
    Hero,
    TrustStrip,
    About,
    Services,
    ServiceRange,
    Process
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/site-top.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Rating = __ds_scope.Rating;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.ReviewCard = __ds_scope.ReviewCard;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.StepCard = __ds_scope.StepCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Select = __ds_scope.Select;

})();
