import Reveal from "../../components/Reveal/Reveal";
import FAQItem from "../../components/FAQ/FAQItem";
import { FAQ } from "../../data/product";
import "./FAQSection.css";

export default function FAQSection() {
  return (
    <section id="faq" className="section faq-section">
      <div className="section-inner faq-section__inner">
        <div className="faq-section__intro">
          <Reveal>
            <span className="eyebrow">FAQ</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="faq-section__title">Perguntas frequentes.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="faq-section__text">
              Tudo o que você precisa saber antes de escolher o seu VANTA.
            </p>
          </Reveal>
        </div>

        <div className="faq-section__list">
          {FAQ.map((f, i) => (
            <FAQItem key={f.q} q={f.q} a={f.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
