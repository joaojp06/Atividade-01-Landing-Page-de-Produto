import { useEffect, useState } from "react";
import Button from "../Button/Button";
import "./Navbar.css";

const LINKS = [
  { label: "Produto", href: "#produto" },
  { label: "Tecnologia", href: "#tecnologia" },
  { label: "Cores", href: "#cores" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (href) => (e) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="#top" className="navbar__logo" onClick={goTo("#top")}>
          VANTA
        </a>

        <nav className="navbar__links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={goTo(l.href)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="navbar__cta">
          <Button variant="primary" onClick={goTo("#oferta")}>
            Comprar agora
          </Button>
        </div>

        <button
          className={`navbar__burger ${open ? "is-open" : ""}`}
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`navbar__mobile ${open ? "is-open" : ""}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={goTo(l.href)}>
            {l.label}
          </a>
        ))}
        <Button variant="primary" className="btn--full" onClick={goTo("#oferta")}>
          Comprar agora
        </Button>
      </div>
    </header>
  );
}
