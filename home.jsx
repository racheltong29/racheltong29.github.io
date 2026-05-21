/* global React ReactDOM */
const { useState: useStateH, useMemo: useMemoH } = React;

const NAV_ITEMS = [
  { label: "home",       href: "index.html"    },
  { label: "projects",   href: "projects.html" },
  { label: "resume",     href: "resume3.pdf"   },
  { label: "gallery",    href: "gallery.html"  },
  { label: "misc",       href: "misc.html"     },
  { label: "techstack",  href: "techstack.html"},
];

function Home() {
  return (
    <div style={{
      position: "relative",
      width: "100%", minHeight: "100vh",
      background:
        "radial-gradient(ellipse at 20% 0%, #2c1864 0%, transparent 50%), radial-gradient(ellipse at 90% 30%, #3a1a4a 0%, transparent 40%), radial-gradient(ellipse at 10% 70%, #4a1f5a 0%, transparent 40%), #0e0824",
      color: "var(--cream)",
      overflow: "hidden",
      fontFamily: '"Carrois Gothic SC", system-ui',
    }}>
      <CosmicStars />

      {/* NAV */}
      <header style={{
        position: "sticky", top: 0, zIndex: 80,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px 56px",
        background: "rgba(14, 8, 36, 0.82)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(244,236,216,0.12)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <img src="images/websitelogo.svg" alt="rachel" style={{
            width: 38, height: 38, borderRadius: "50%",
            background: "var(--cream)", objectFit: "cover",
            boxShadow: "0 0 0 2px var(--cream)"
          }} />
          <span className="mono" style={{ fontSize: 12, letterSpacing: "0.15em" }}>rachel · tong</span>
        </div>
        <nav style={{ display: "flex", gap: 4 }}>
          {NAV_ITEMS.map((n, i) =>
            <a key={n.label} href={n.href} className="mono"
              style={{
                padding: "8px 12px", fontSize: 11, letterSpacing: "0.08em",
                color: i === 0 ? "var(--cream)" : "rgba(244,236,216,0.6)",
                textDecoration: "none", borderRadius: 4,
                transition: "color 0.12s, background 0.12s"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--cream)"; e.currentTarget.style.background = "rgba(166,87,69,0.22)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = i === 0 ? "var(--cream)" : "rgba(244,236,216,0.6)"; e.currentTarget.style.background = "transparent"; }}>
              {i === 0 && <span style={{ marginRight: 4, color: "var(--burnt)" }}>▸</span>}
              {n.label}
            </a>
          )}
        </nav>
      </header>

      {/* HERO */}
      <section style={{ position: "relative", padding: "70px 60px 100px", minHeight: 740 }}>
        <h1 className="climate" style={{
          fontSize: 160,
          lineHeight: 0.82,
          margin: 0,
          color: "var(--cream)",
          letterSpacing: "-0.04em",
          position: "relative",
          zIndex: 1,
          animation: "rachelGlow 4.2s ease-in-out infinite"
        }}>
          rachel<br /><span style={{ marginLeft: "1.8em" }}>tong</span>
        </h1>

        <Polaroid src="images/betterpfp.jpg" caption=" ☻" rot={-6} style={{
          position: "absolute", top: 100, right: 80, width: 240, zIndex: 5
        }} />

        {/* SOCIAL LINKS */}
        <div style={{
          position: "absolute", top: 410, right: 280, width: 300, zIndex: 6,
          display: "flex", flexDirection: "column", gap: 9
        }}>
          <div className="beanie" style={{
            fontSize: 26, color: "#B9FF66", lineHeight: 1,
            transform: "rotate(-3deg)", marginLeft: 8, marginBottom: 2,
            textShadow: "2px 2px 0 var(--ink-purple)"
          }}>find me here ↓</div>
          {[
            { l: "linkedin",  v: "/in/racheltong29",      bg: "#0077B5",      rot: -2.5, href: "https://linkedin.com/in/racheltong29",  icon: "in"  },
            { l: "github",    v: "@racheltong29",          bg: "#150A30",      rot:  1.8, href: "https://github.com/racheltong29",        icon: "</>" },
            { l: "instagram", v: "@racheltong29",          bg: "#FF3B7F",      rot: -1.4, href: "https://instagram.com/racheltong29",     icon: "◉"  },
            { l: "email",     v: "racheltong29@gmail.com", bg: "var(--burnt)", rot:  2.2, href: "mailto:racheltong29@gmail.com",          icon: "@"  }
          ].map((s) =>
            <a key={s.l} href={s.href} target="_blank" rel="noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: 12,
                padding: "10px 14px",
                background: s.bg, color: "var(--cream)",
                border: "2px solid var(--cream)",
                boxShadow: "4px 5px 0 var(--ink-purple)",
                transform: `rotate(${s.rot}deg)`,
                transition: "transform 0.15s, box-shadow 0.15s",
                textDecoration: "none"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "rotate(0deg) translate(-2px, -2px)"; e.currentTarget.style.boxShadow = "6px 7px 0 var(--ink-purple)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = `rotate(${s.rot}deg)`; e.currentTarget.style.boxShadow = "4px 5px 0 var(--ink-purple)"; }}>
              <span className="mono" style={{
                width: 34, height: 34, flexShrink: 0,
                display: "grid", placeItems: "center",
                background: "var(--cream)", color: "var(--ink-purple)",
                fontSize: 13, fontWeight: 700, letterSpacing: 0,
                border: "1.5px solid var(--ink-purple)"
              }}>{s.icon}</span>
              <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.05, minWidth: 0 }}>
                <span style={{ fontFamily: '"Carrois Gothic SC", system-ui', fontSize: 10, letterSpacing: "0.22em", opacity: 0.85 }}>{s.l.toUpperCase()}/</span>
                <span className="beanie" style={{ fontSize: 18, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{s.v}</span>
              </div>
            </a>
          )}
        </div>

        <Tape style={{ position: "absolute", top: 86, right: 320, transform: "rotate(-18deg)" }} />

        {/* INFO CARD */}
        <div style={{
          position: "absolute", top: 410, left: 60,
          width: 380, padding: 24,
          background: "var(--cream)",
          border: "2px solid var(--ink-purple)",
          boxShadow: "8px 8px 0 var(--burnt)",
          transform: "rotate(-2deg)",
          zIndex: 4,
          color: "var(--ink-purple)"
        }}>
          <div className="mono" style={{ fontSize: 10, letterSpacing: "0.2em", color: "var(--burnt)", fontWeight: "900" }}>★ hi there, i'm</div>
          <div className="climate" style={{ fontSize: 38, lineHeight: 1, marginTop: 6 }}>rachel,</div>
          <p style={{ fontSize: 13, lineHeight: 1.6, marginTop: 10, marginBottom: 0 }}>
            sophomore @ <b>cmu scs</b>, aspiring ml engineer who tinkers with cool software projects, web dev, design, and visual novels.
          </p>
        </div>

        {/* annotation arrow */}
        <svg width="170" height="80" style={{ position: "absolute", top: 540, left: 430, zIndex: 7 }}>
          <path d="M 10 60 Q 60 10, 140 30" stroke="#FF3B7F" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M 130 20 L 145 32 L 130 42" stroke="#FF3B7F" strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
        <span className="beanie" style={{
          position: "absolute", top: 508, left: 460,
          fontSize: 24, color: "#FF3B7F",
          transform: "rotate(-8deg)", zIndex: 7
        }}>← this is me!</span>
      </section>

      {/* STRIPE BAND */}
      <div style={{
        height: 44,
        background: "repeating-linear-gradient(-45deg, var(--burnt) 0px, var(--burnt) 18px, var(--cream) 18px, var(--cream) 28px)",
        borderTop: "2px solid var(--cream)",
        borderBottom: "2px solid var(--cream)"
      }} />

      <TornDivider color="#0e0824" />

      {/* 01 · EDUCATION */}
      <section id="education" style={{ padding: "60px 60px 80px" }}>
        <CornerLabel num="01" label="education" cream rot={-1.5} />
        <p className="beanie" style={{ fontSize: 30, color: "var(--cream)", margin: "10px 0 32px", lineHeight: 1 }}>
          where my mind's been
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          {[
            {
              y: "2025 — now", t: "carnegie mellon university",
              sub: "b.s. computer science, ml concentration",
              gpa: "4.0",
              courses: "Computer Systems, Functional Programming, Probability and Computing, Imperative Computation, Mathematical Foundations for CS, Experimental Physics",
              acts: "ScottyLabs Labrador Developer · ACM · Computer Graphics Club",
              rot: -1, color: "var(--cream)"
            },
            {
              y: "2024 — 2025", t: "ohio state university",
              sub: "academy student",
              gpa: "4.0",
              courses: "Calculus 3, Discrete Structures, Probability & Statistics, C++, Python",
              current: "Software I, Foundations of Higher Math, Linear Algebra",
              acts: "ACM-W · Competitive Programming Club · AI Club",
              rot: 0.8, color: "#FFE5D2"
            },
            {
              y: "class of '25", t: "olentangy orange high school",
              gpa: "4.0 unweighted · 4.64 weighted · rank #2",
              courses: "AP Calc AB & BC, Physics C, Seminar, Micro & Macro Econ, CS A & Principles, Stats, US & World History (all 5s)",
              current: "AP Research · AP Spanish",
              acts: "National Art Honors Society President · Varsity Science Olympiad · Competitive Programming · Spanish Honors Society · FIRST Robotics",
              rot: -0.5, color: "var(--cream)"
            },
            {
              y: "summer 2022", t: "carnegie mellon pre-college",
              courses: "Principles of Imperative Computation, Matrices & Linear Transformations",
              acts: "Pianist in pre-college cohort music club",
              rot: 1.2, color: "#FFE5D2"
            }
          ].map((s) =>
            <div key={s.t} style={{
              padding: "20px 24px",
              background: s.color, color: "var(--ink-purple)",
              border: "2px solid var(--ink-purple)",
              boxShadow: "5px 5px 0 var(--burnt)",
              transform: `rotate(${s.rot}deg)`,
              position: "relative"
            }}>
              <div style={{ position: "absolute", top: -8, left: 14, width: 60, height: 16, background: "rgba(0,172,238,0.5)", border: "1px solid rgba(255,255,255,0.4)", transform: "rotate(-8deg)" }} />
              <div className="mono" style={{ fontSize: 10, color: "var(--burnt)", letterSpacing: "0.2em" }}>{s.y}</div>
              <div className="climate" style={{ fontSize: 26, margin: "4px 0 8px", lineHeight: 1 }}>{s.t}</div>
              {s.sub && <div className="mono" style={{ fontSize: 12, marginBottom: 8, opacity: 0.75 }}>{s.sub}</div>}
              {s.gpa && <div style={{ fontSize: 12, lineHeight: 1.7 }}><b>gpa:</b> {s.gpa}</div>}
              {s.courses && <div style={{ fontSize: 12, lineHeight: 1.7 }}><b>relevant courses:</b> {s.courses}</div>}
              {s.current && <div style={{ fontSize: 12, lineHeight: 1.7 }}><b>current courses:</b> {s.current}</div>}
              {s.acts && <div className="beanie" style={{ fontSize: 19, color: "var(--burnt)", marginTop: 8 }}>↳ {s.acts}</div>}
            </div>
          )}
        </div>
      </section>

      <TornDivider color="#0e0824" flip />

      {/* 02 · EXPERIENCE */}
      <section id="experience" style={{ padding: "60px 60px 80px", background: "var(--burnt)" }}>
        <CornerLabel num="02" label="experience" cream rot={1.5} />
        <div style={{
          padding: "24px 28px",
          background: "var(--cream)", color: "var(--ink-purple)",
          border: "2px dashed var(--ink-purple)",
          boxShadow: "6px 6px 0 var(--ink-purple)",
          maxWidth: 760, margin: "0 auto",
          transform: "rotate(-0.4deg)"
        }}>
          {[
            { y: "spring–summer '26", t: "research assistant", c: "generative intelligence lab @ cmu"},
            { y: "summer '25",        t: "intern",             c: "ai owl" },
            { y: "summer '24",        t: "intern",             c: "marion county IT department" },
            { y: "2022 – 2024",       t: "receptionist",       c: "dublin green family dental" },
            { y: "2023",              t: "TA",                  c: "techgirlz" },
            { y: "'22 – present",     t: "mentor",              c: "acquaint" },
            { y: "'22 – present",     t: "tutor",               c: "ENGin program" },
            { y: "2024",              t: "substitute art teacher", c: "OCCS" }
          ].map((s, i) =>
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "200px 1fr", gap: 14,
              padding: "13px 0", borderBottom: "1px dotted rgba(21,10,48,0.25)",
              fontSize: 15, color: s.now ? "var(--burnt)" : "var(--ink-purple)",
              fontWeight: s.now ? 700 : 600
            }}>
              <span className="mono" style={{ fontSize: 12, letterSpacing: "0.05em", opacity: s.now ? 1 : 0.75 }}>{s.y}</span>
              <span style={{ fontSize: 15 }}><b>{s.t}</b> <span style={{ opacity: 0.75 }}>· {s.c}</span></span>
            </div>
          )}
        </div>
      </section>

      <TornDivider color="var(--burnt)" flip />

      {/* FOOTER */}
      <footer style={{
        padding: "60px", background: "var(--burnt)", color: "var(--cream)",
        textAlign: "center", position: "relative",
        borderTop: "2px solid var(--cream)"
      }}>
        <Tape style={{ position: "absolute", top: 26, left: "50%", transform: "translateX(-50%) rotate(0deg)" }} />
        <a href="mailto:racheltong29@gmail.com" className="beanie" style={{
          fontSize: 36, color: "var(--cream)", textDecoration: "underline",
          textUnderlineOffset: 6, textDecorationThickness: 2
        }}>racheltong29@gmail.com</a>
        <div className="mono" style={{ fontSize: 10, color: "rgba(244,236,216,0.75)", marginTop: 30, letterSpacing: "0.2em" }}>
          ★ open to inquiries ★
        </div>
      </footer>

      <style>{`
        @keyframes homeTwinkle { 0%, 100% { opacity: 0.8; } 50% { opacity: 0.18; } }
        @keyframes rachelGlow {
          0%, 100% {
            text-shadow:
              6px 6px 0 var(--burnt),
              12px 12px 0 rgba(0,172,238,0.35),
              0 0 18px rgba(255,196,140,0.25),
              0 0 40px rgba(217,117,87,0.18);
          }
          50% {
            text-shadow:
              6px 6px 0 var(--burnt),
              12px 12px 0 rgba(0,172,238,0.45),
              0 0 36px rgba(255,210,160,0.8),
              0 0 90px rgba(255,150,90,0.55),
              0 0 140px rgba(217,90,60,0.5);
          }
        }
      `}</style>
    </div>
  );
}

/* ===== helpers ===== */

function Polaroid({ src, caption, rot = 0, style = {} }) {
  const [hover, setHover] = useStateH(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        background: "var(--cream)", padding: "10px 10px 28px",
        boxShadow: hover ? "8px 10px 16px rgba(0,0,0,0.5)" : "4px 6px 12px rgba(0,0,0,0.4)",
        transform: `rotate(${hover ? 0 : rot}deg) translateY(${hover ? -6 : 0}px)`,
        transition: "transform 0.18s, box-shadow 0.18s",
        ...style
      }}>
      <div style={{ width: "100%", aspectRatio: "1", overflow: "hidden", background: "#222" }}>
        <img src={src} alt={caption} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", filter: "saturate(0.9)" }} />
      </div>
      <div className="beanie" style={{ textAlign: "center", fontSize: 20, color: "var(--ink-purple)", marginTop: 6, lineHeight: 1 }}>{caption}</div>
    </div>
  );
}

function Tape({ color = "#FF3B7F", style = {} }) {
  return (
    <div style={{
      width: 110, height: 22,
      background: `repeating-linear-gradient(90deg, ${color} 0px, ${color} 8px, rgba(255,255,255,0.22) 8px, rgba(255,255,255,0.22) 12px)`,
      opacity: 0.88, border: "1px solid rgba(255,255,255,0.5)",
      ...style
    }} />
  );
}

function TornDivider({ color = "var(--burnt)", flip = false }) {
  const path = "M0 14 L40 6 L80 18 L120 4 L160 16 L200 8 L240 18 L280 6 L320 14 L360 4 L400 16 L440 8 L480 18 L520 6 L560 14 L600 4 L640 16 L680 8 L720 18 L760 6 L800 14 L840 4 L880 16 L920 8 L960 18 L1000 6 L1040 14 L1080 4 L1120 16 L1160 8 L1200 18 L1240 6 L1280 14 L1320 4 L1360 16 L1400 8 L1440 14 L1440 0 L0 0 Z";
  return (
    <div style={{ position: "relative", height: 24, background: "transparent", transform: flip ? "scaleY(-1)" : "none" }}>
      <svg viewBox="0 0 1440 24" preserveAspectRatio="none" style={{ width: "100%", height: "100%", display: "block" }}>
        <path d={path} fill={color} />
      </svg>
    </div>
  );
}

function CornerLabel({ num, label, rot = 0, cream = false }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 12,
      padding: "8px 18px",
      background: cream ? "var(--cream)" : "var(--ink-purple)",
      color: cream ? "var(--ink-purple)" : "var(--cream)",
      border: `2px solid ${cream ? "var(--ink-purple)" : "var(--cream)"}`,
      transform: `rotate(${rot}deg)`,
      boxShadow: "5px 5px 0 var(--burnt)"
    }}>
      <span className="climate" style={{ fontSize: 32, lineHeight: 1 }}>{num}</span>
      <span className="mono" style={{ fontSize: 12, letterSpacing: "0.28em" }}>{label.toUpperCase()}</span>
    </div>
  );
}

function CosmicStars() {
  const stars = useMemoH(() => {
    const arr = [];
    let seed = 71;
    const r = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    for (let i = 0; i < 90; i++) arr.push({ x: r() * 100, y: r() * 100, s: 1 + r() * 2.5, d: r() * 5 });
    return arr;
  }, []);
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      {stars.map((s, i) =>
        <div key={i} style={{
          position: "absolute",
          left: `${s.x}%`, top: `${s.y}%`,
          width: s.s, height: s.s,
          background: "var(--cream)", borderRadius: "50%",
          opacity: 0.45,
          animation: `homeTwinkle ${2 + s.d}s ease-in-out ${s.d}s infinite`
        }} />
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Home />);
