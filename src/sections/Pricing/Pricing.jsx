import { useState } from "react";
import Reveal from "../../components/Reveal/Reveal";
import Button from "../../components/Button/Button";
import ShoeIllustration from "../../components/ShoeIllustration/ShoeIllustration";
import ColorSwitcher from "../../components/ColorSwitcher/ColorSwitcher";
import SizeSelector from "../../components/SizeSelector/SizeSelector";
import Modal from "../../components/Modal/Modal";
import { PRODUCT, COLORS, SIZES } from "../../data/product";
import "./Pricing.css";

export default function Pricing() {
  const [color, setColor] = useState("black");
  const [size, setSize] = useState(null);
  const [open, setOpen] = useState(false);

  const currentColor = COLORS.find((c) => c.id === color);

  return (
    <section id="oferta" className="section pricing">
      <div className="section-inner">
        <Reveal>
          <span className="eyebrow eyebrow--volt">Oferta</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="pricing__title">Your everyday pair is here.</h2>
        </Reveal>

        <div className="pricing__grid">
          <Reveal delay={0.1} className="pricing__visual">
            <ShoeIllustration variant={color} />
          </Reveal>

          <Reveal delay={0.15} className="pricing__panel">
            <p className="pricing__product">{PRODUCT.name}</p>
            <p className="pricing__price">{PRODUCT.priceLabel}</p>

            <div className="pricing__field">
              <span className="pricing__field-label">Cor — {currentColor.name}</span>
              <ColorSwitcher colors={COLORS} active={color} onChange={setColor} />
            </div>

            <div className="pricing__field">
              <span className="pricing__field-label">
                Tamanho{size ? ` — ${size}` : ""}
              </span>
              <SizeSelector sizes={SIZES} active={size} onChange={setSize} />
            </div>

            <Button variant="primary" className="btn--full pricing__cta" onClick={() => setOpen(true)}>
              Comprar agora
            </Button>
            <p className="pricing__fine-print">
              Protótipo acadêmico — nenhuma compra real é processada.
            </p>
          </Reveal>
        </div>
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        color={currentColor.name}
        size={size}
        priceLabel={PRODUCT.priceLabel}
        productName={PRODUCT.name}
      />
    </section>
  );
}
