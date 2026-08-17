import "./ColorSwitcher.css";

export default function ColorSwitcher({ colors, active, onChange }) {
  return (
    <div className="color-switcher" role="radiogroup" aria-label="Selecionar cor">
      {colors.map((c) => (
        <button
          key={c.id}
          role="radio"
          aria-checked={active === c.id}
          className={`color-switcher__dot ${active === c.id ? "is-active" : ""}`}
          style={{ background: c.hex, borderColor: c.id === "cloud" ? "#3a3b40" : "transparent" }}
          onClick={() => onChange(c.id)}
          title={c.name}
        >
          {c.id === "volt" && <span className="color-switcher__volt-mark" />}
        </button>
      ))}
    </div>
  );
}
