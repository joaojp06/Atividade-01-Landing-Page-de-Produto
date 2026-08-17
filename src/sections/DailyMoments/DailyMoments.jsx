import Reveal from "../../components/Reveal/Reveal";
import { MOMENTS } from "../../data/product";
import "./DailyMoments.css";

export default function DailyMoments() {
  return (
    <section className="section moments">
      <div className="section-inner">
        <Reveal>
          <span className="eyebrow">Antes de sair de casa</span>
        </Reveal>

        <div className="moments__list">
          {MOMENTS.map((m, i) => (
            <Reveal key={m.time} delay={0.06 * i} className="moments__row">
              <span className="moments__time">{m.time}</span>
              <span className="moments__label">{m.label}</span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <h2 className="moments__closer">
            Same day.
            <br />
            <span className="text-volt">Same VANTA.</span>
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
