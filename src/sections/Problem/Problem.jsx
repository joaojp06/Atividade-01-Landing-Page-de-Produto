import Reveal from "../../components/Reveal/Reveal";
import { DAY } from "../../data/product";
import "./Problem.css";

export default function Problem() {
  return (
    <section id="problema" className="section problem">
      <div className="section-inner">
        <Reveal>
          <span className="eyebrow">O problema</span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="problem__title">
            ONE DAY.
            <br />
            <span className="problem__title-dim">TOO MANY SHOES.</span>
          </h2>
        </Reveal>

        <div className="problem__timeline">
          {DAY.map((d, i) => (
            <Reveal key={d.time} delay={0.08 * i} className="problem__timeline-item">
              <span className="problem__time">{d.time}</span>
              <span className="problem__label">{d.label}</span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="problem__statement">
            Você não deveria precisar de um tênis diferente para cada momento do seu dia.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <h3 className="problem__resolution">
            ONE SHOE. <span className="text-volt">EVERYWHERE.</span>
          </h3>
        </Reveal>
      </div>
    </section>
  );
}
