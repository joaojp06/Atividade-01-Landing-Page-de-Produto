import Reveal from "../../components/Reveal/Reveal";
import { REVIEWS, RATING } from "../../data/product";
import "./Reviews.css";

export default function Reviews() {
  return (
    <section id="avaliacoes" className="section reviews">
      <div className="section-inner">
        <div className="reviews__header">
          <Reveal>
            <span className="eyebrow">Quem já usa</span>
          </Reveal>

          <Reveal delay={0.05} className="reviews__rating">
            <span className="reviews__score">{RATING.score}</span>
            <div>
              <span className="reviews__stars" aria-hidden="true">★★★★★</span>
              <span className="reviews__count">{RATING.count}</span>
            </div>
          </Reveal>
        </div>

        <div className="reviews__grid">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={0.08 * i} className="review-card">
              <p className="review-card__quote">“{r.quote}”</p>
              <span className="review-card__name">— {r.name}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
