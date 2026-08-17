import "./SizeSelector.css";

export default function SizeSelector({ sizes, active, onChange }) {
  return (
    <div className="size-selector" role="radiogroup" aria-label="Selecionar tamanho">
      {sizes.map((s) => (
        <button
          key={s}
          role="radio"
          aria-checked={active === s}
          className={`size-selector__opt ${active === s ? "is-active" : ""}`}
          onClick={() => onChange(s)}
        >
          {s}
        </button>
      ))}
    </div>
  );
}
