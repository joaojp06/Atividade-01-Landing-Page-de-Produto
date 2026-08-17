import { useState, useRef } from "react";
import "./FAQItem.css";

export default function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  return (
    <div className={`faq-item ${open ? "is-open" : ""}`}>
      <button
        className="faq-item__trigger"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="faq-item__index">{String(index + 1).padStart(2, "0")}</span>
        <span className="faq-item__q">{q}</span>
        <span className="faq-item__icon" aria-hidden="true">
          {open ? "–" : "+"}
        </span>
      </button>
      <div
        className="faq-item__panel"
        style={{ maxHeight: open ? ref.current?.scrollHeight ?? 200 : 0 }}
      >
        <p ref={ref} className="faq-item__a">
          {a}
        </p>
      </div>
    </div>
  );
}
