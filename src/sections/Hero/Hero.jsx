import { motion, useReducedMotion } from "framer-motion";
import Button from "../../components/Button/Button";
import ShoeIllustration from "../../components/ShoeIllustration/ShoeIllustration";
import { PRODUCT } from "../../data/product";
import "./Hero.css";

export default function Hero() {
  const reduce = useReducedMotion();

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__inner">
        <motion.div
          className="hero__text"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow eyebrow--volt hero__eyebrow">VANTA ONE</span>
          <h1 className="hero__headline">
            BUILT FOR
            <br />
            EVERY MOVE.
          </h1>
          <p className="hero__subheadline">Um tênis. Todos os seus caminhos.</p>
          <p className="hero__body">
            Conheça o VANTA ONE — conforto, leveza e design urbano para acompanhar você do
            primeiro compromisso ao último rolê do dia.
          </p>

          <div className="hero__price-row">
            <span className="hero__price">{PRODUCT.priceLabel}</span>
            <span className="hero__price-note">à vista, sem juros</span>
          </div>

          <div className="hero__actions">
            <Button variant="primary" onClick={scrollTo("#oferta")}>
              Comprar agora
            </Button>
            <Button variant="ghost" onClick={scrollTo("#produto")}>
              Conhecer o VANTA ONE
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <ShoeIllustration variant="volt" />
          <div className="hero__visual-caption">
            <span>VANTA ONE</span>
            <span>Urban / All-day</span>
          </div>
        </motion.div>
      </div>

      <button className="hero__scroll-cue" onClick={scrollTo("#problema")} aria-label="Rolar para baixo">
        <span />
      </button>
    </section>
  );
}
