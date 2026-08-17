import { useEffect, useState } from "react";
import Button from "../Button/Button";
import "./Modal.css";

export default function Modal({ open, onClose, color, size, priceLabel, productName }) {
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => setConfirmed(false), 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label="Checkout simulado"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal__close" onClick={onClose} aria-label="Fechar">
          ×
        </button>

        {!confirmed ? (
          <>
            <span className="eyebrow eyebrow--volt">Checkout simulado</span>
            <h3 className="modal__title">{productName}</h3>

            <div className="modal__row">
              <span>Cor</span>
              <span>{color}</span>
            </div>
            <div className="modal__row">
              <span>Tamanho</span>
              <span>{size ?? "—"}</span>
            </div>
            <div className="modal__row modal__row--price">
              <span>Total</span>
              <span>{priceLabel}</span>
            </div>

            <Button
              variant="primary"
              className="btn--full"
              onClick={() => setConfirmed(true)}
              disabled={!size}
            >
              Finalizar compra
            </Button>
            {!size && <p className="modal__hint">Selecione um tamanho para continuar.</p>}
          </>
        ) : (
          <div className="modal__success">
            <div className="modal__success-mark">✓</div>
            <h3 className="modal__title">Pedido simulado com sucesso.</h3>
            <p>Obrigado por escolher VANTA.</p>
            <Button variant="ghost" onClick={onClose}>
              Fechar
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
