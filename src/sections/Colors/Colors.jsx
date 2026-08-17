import { useState } from "react";
import Reveal from "../../components/Reveal/Reveal";
import ShoeIllustration from "../../components/ShoeIllustration/ShoeIllustration";
import { COLORS } from "../../data/product";
import "./Colors.css";

export default function Colors() {
  const [active, setActive] = useState("black");
  const current = COLORS.find((c) => c.id === active);

  return (
    <section id="cores" className="section colors">
      <div className="section-inner">
        <Reveal>
          <span className="eyebrow">Cores</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="colors__title">Três formas de usar o mesmo VANTA.</h2>
        </Reveal>

        <div className="colors__grid">
          <Reveal delay={0.1} className="colors__visual">
            <ShoeIllustration variant={active} />
          </Reveal>

          <div className="colors__options">
            {COLORS.map((c, i) => (
              <Reveal key={c.id} delay={0.06 * i}>
                <button
                  className={`color-option ${active === c.id ? "is-active" : ""}`}
                  onClick={() => setActive(c.id)}
                >
                  <span
                    className="color-option__swatch"
                    style={{
                      background: c.hex,
                      border: c.id === "cloud" ? "1px solid #3a3b40" : "none",
                    }}
                  >
                    {c.id === "volt" && <span className="color-option__volt" />}
                  </span>
                  <span className="color-option__text">
                    <strong>{c.name}</strong>
                    <em>{c.desc}</em>
                  </span>
                </button>
              </Reveal>
            ))}

            <p className="colors__note">
              Visualizando <strong>{current.name}</strong> — seleção sem compromisso, altere
              quantas vezes quiser.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
