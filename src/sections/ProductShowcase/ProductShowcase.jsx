import Reveal from "../../components/Reveal/Reveal";
import ShoeIllustration from "../../components/ShoeIllustration/ShoeIllustration";
import { SPECS } from "../../data/product";
import "./ProductShowcase.css";

export default function ProductShowcase() {
  const left = SPECS.slice(0, 2);
  const right = SPECS.slice(2);

  return (
    <section id="produto" className="section showcase">
      <div className="section-inner">
        <Reveal>
          <span className="eyebrow">O produto</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="showcase__title">VANTA ONE, por dentro e por fora.</h2>
        </Reveal>

        <div className="showcase__grid">
          <div className="showcase__specs showcase__specs--left">
            {left.map((s, i) => (
              <Reveal key={s.id} delay={0.1 + i * 0.08} className="spec-card">
                <span className="spec-card__id">{s.id}</span>
                <div>
                  <p className="spec-card__label">{s.label}</p>
                  <p className="spec-card__value">{s.value}</p>
                  <p className="spec-card__detail">{s.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12} className="showcase__visual">
            <ShoeIllustration variant="black" />
          </Reveal>

          <div className="showcase__specs showcase__specs--right">
            {right.map((s, i) => (
              <Reveal key={s.id} delay={0.18 + i * 0.08} className="spec-card">
                <span className="spec-card__id">{s.id}</span>
                <div>
                  <p className="spec-card__label">{s.label}</p>
                  <p className="spec-card__value">{s.value}</p>
                  <p className="spec-card__detail">{s.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
