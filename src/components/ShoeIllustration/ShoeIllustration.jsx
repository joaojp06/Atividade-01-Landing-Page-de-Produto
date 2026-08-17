import "./ShoeIllustration.css";

const VARIANTS = {
  black: { fill: "#161719", stroke: "#f5f5f2", sole: "#232428", mid: "#48494f", accent: "#5a5b61" },
  cloud: { fill: "#e9e9e4", stroke: "#111214", sole: "#cfcfc9", mid: "#b6b6b0", accent: "#9a9a95" },
  volt: { fill: "#161719", stroke: "#f5f5f2", sole: "#232428", mid: "#48494f", accent: "#d7ff3f" },
};

/**
 * Custom line-art sneaker illustration (original artwork for VANTA).
 * `layer` optionally highlights one construction layer for the Technology section:
 * "upper" | "foam" | "support" | "outsole"
 */
export default function ShoeIllustration({ variant = "black", layer = null, className = "" }) {
  const c = VARIANTS[variant] ?? VARIANTS.black;
  const dim = (name) => (layer && layer !== name ? 0.22 : 1);
  const isActive = (name) => layer === name;

  return (
    <svg
      viewBox="0 0 640 260"
      xmlns="http://www.w3.org/2000/svg"
      className={`shoe-illustration ${className}`}
      role="img"
      aria-label={`Ilustração do VANTA ONE, cor ${variant}`}
    >
      <ellipse cx="326" cy="226" rx="270" ry="10" fill="#000000" opacity="0.45" />

      {/* Outsole */}
      <g style={{ opacity: dim("outsole"), transition: "opacity .4s var(--ease-out, ease)" }}>
        <path
          d="M40 196 C 34 196, 28 200, 26 206 C 24 214, 32 222, 48 224 L 560 222
             C 588 221, 606 214, 606 205 C 606 197, 594 191, 574 190 L 100 188
             C 74 188, 52 190, 40 196 Z"
          fill={c.sole}
          stroke={isActive("outsole") ? "#d7ff3f" : "none"}
          strokeWidth="2"
        />
      </g>

      {/* Midsole / VANTA Foam */}
      <g style={{ opacity: dim("foam"), transition: "opacity .4s var(--ease-out, ease)" }}>
        <path
          d="M46 188 C 40 186, 36 182, 38 176 L 560 165 C 582 164, 596 170, 598 180
             C 599 186, 592 190, 578 191 L 100 194 C 76 195, 58 192, 46 188 Z"
          fill={c.mid}
          stroke={isActive("foam") ? "#d7ff3f" : "none"}
          strokeWidth="2"
        />
      </g>

      {/* Upper */}
      <g style={{ opacity: dim("upper"), transition: "opacity .4s var(--ease-out, ease)" }}>
        <path
          d="M30 182 C 26 160, 42 138, 78 122 C 92 108, 112 96, 138 88
             C 150 68, 172 50, 200 40 C 212 36, 222 40, 222 50 C 222 62, 214 70, 206 78
             C 224 86, 246 84, 264 74 C 300 55, 345 46, 392 48 C 442 50, 488 66, 522 92
             C 548 112, 562 138, 560 164 L 556 178 C 500 168, 430 172, 360 178
             C 270 185, 180 186, 110 184 C 78 183, 50 183, 30 182 Z"
          fill={c.fill}
          stroke={isActive("upper") ? "#d7ff3f" : c.stroke}
          strokeWidth={isActive("upper") ? 3 : 2.5}
          strokeLinejoin="round"
        />
        <path
          d="M78 122 C 96 130, 108 146, 106 164"
          fill="none"
          stroke={c.stroke}
          strokeWidth="1.4"
          opacity="0.4"
        />
        <g stroke={c.stroke} strokeWidth="2" opacity="0.85">
          <line x1="172" y1="66" x2="200" y2="88" />
          <line x1="192" y1="52" x2="216" y2="76" />
          <line x1="214" y1="42" x2="234" y2="66" />
        </g>
        <g fill={c.accent}>
          <circle cx="172" cy="66" r="3" />
          <circle cx="192" cy="52" r="3" />
          <circle cx="214" cy="42" r="3" />
          <circle cx="200" cy="88" r="3" />
          <circle cx="216" cy="76" r="3" />
          <circle cx="234" cy="66" r="3" />
        </g>
        <path
          d="M264 74 C 300 60, 345 52, 392 54 C 442 56, 480 70, 512 92"
          fill="none"
          stroke={c.accent}
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.95"
        />
      </g>

      {/* Support / heel counter */}
      <g style={{ opacity: dim("support"), transition: "opacity .4s var(--ease-out, ease)" }}>
        <path
          d="M470 96 C 500 100, 528 118, 542 144 C 550 158, 552 172, 548 182
             L 522 180 C 524 162, 516 142, 500 126 C 490 116, 478 108, 470 104 Z"
          fill={variant === "cloud" ? "#d8d8d3" : "#0e0f10"}
          stroke={isActive("support") ? "#d7ff3f" : c.stroke}
          strokeWidth="1.4"
          opacity="0.95"
        />
        <path
          d="M534 92 C 546 82, 558 80, 564 88 C 569 96, 562 108, 550 114
             C 542 118, 534 114, 532 106 C 531 101, 531 96, 534 92 Z"
          fill="none"
          stroke={c.stroke}
          strokeWidth="2"
        />
      </g>

      <text
        x="330"
        y="140"
        fontFamily="Archivo, Arial"
        fontWeight="900"
        fontSize="15"
        fill={c.stroke}
        opacity="0.55"
        letterSpacing="3"
      >
        VANTA
      </text>
    </svg>
  );
}
