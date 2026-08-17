import { FOOTER_LINKS } from "../../data/product";
import "./Footer.css";

export default function Footer() {
  const goTo = (href) => (e) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="section-inner footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">VANTA</span>
          <span className="footer__slogan">Built for every move.</span>
        </div>

        <nav className="footer__links">
          {FOOTER_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={goTo(l.href)}>
              {l.label}
            </a>
          ))}
        </nav>

        <p className="footer__copy">
          © 2026 VANTA. Fictional product created for academic purposes.
        </p>
      </div>
    </footer>
  );
}
