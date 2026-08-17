import { useState } from "react";
import Reveal from "../../components/Reveal/Reveal";
import ShoeIllustration from "../../components/ShoeIllustration/ShoeIllustration";
import { LAYERS } from "../../data/product";
import "./Technology.css";

const LAYER_KEY = { "01": "upper", "02": "foam", "03": "support", "04": "outsole" };

export default function Technology() {
  const [active, setActive] = useState(null);

  return (
    <section id="tecnologia" className="section technology">
      <div className="section-inner">
        <Reveal>
          <span className="eyebrow">Construção</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="technology__title">Designed down to the last detail.</h2>
        </Reveal>

        <div className="technology__grid">
          <Reveal delay={0.1} className="technology__visual">
            <ShoeIllustration variant="black" layer={active ? LAYER_KEY[active] : null} />
          </Reveal>

          <div className="technology__layers">
            {LAYERS.map((l, i) => (
              <Reveal key={l.id} delay={0.06 * i}>
                <button
                  className={`layer-item ${active === l.id ? "is-active" : ""}`}
                  onMouseEnter={() => setActive(l.id)}
                  onFocus={() => setActive(l.id)}
                  onMouseLeave={() => setActive(null)}
                  onBlur={() => setActive(null)}
                  onClick={() => setActive(active === l.id ? null : l.id)}
                >
                  <span className="layer-item__id">{l.id}</span>
                  <span className="layer-item__name">
                    {l.name}
                    <em>{l.short}</em>
                  </span>
                  <span
                    className="layer-item__panel"
                    style={{ maxHeight: active === l.id ? 80 : 0 }}
                  >
                    {l.detail}
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
