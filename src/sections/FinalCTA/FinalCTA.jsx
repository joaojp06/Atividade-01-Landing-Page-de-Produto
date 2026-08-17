import Reveal from "../../components/Reveal/Reveal";
import Button from "../../components/Button/Button";
import "./FinalCTA.css";

export default function FinalCTA() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section final-cta">
      <div className="section-inner final-cta__inner">
        <Reveal>
          <h2 className="final-cta__headline">
            ONE SHOE.
            <br />
            <span className="text-volt">EVERY MOVE.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="final-cta__text">Built for wherever you're going next.</p>
        </Reveal>
        <Reveal delay={0.18}>
          <Button variant="primary" onClick={scrollTo("#oferta")}>
            Get your VANTA
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
