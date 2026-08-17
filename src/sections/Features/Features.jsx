import Reveal from "../../components/Reveal/Reveal";
import { FEATURES } from "../../data/product";
import "./Features.css";

export default function Features() {
  return (
    <section id="caracteristicas" className="section features">
      <div className="section-inner">
        <Reveal>
          <span className="eyebrow">Diferenciais</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="features__title">Cinco razões para nunca tirar.</h2>
        </Reveal>

        <div className="features__list">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={0.05 * i} className="feature-row">
              <span className="feature-row__num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="feature-row__title">{f.title}</h3>
              <p className="feature-row__text">
                <strong>{f.lead}</strong> {f.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
