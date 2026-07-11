import './Hero.css'

function Hero() {
  return (
    <section className="hero-visual" aria-label="Two illustrated hands holding a star">
      <div className="hand-slot hand-slot-left">
        <img
          className="hand-image hand-image-left"
          src="/images/left-hand.png"
          alt="Illustrated left hand reaching toward the center"
        />
      </div>

      <div className="star-slot">
        <img className="star-image" src="/images/star.png" alt="" aria-hidden="true" />
      </div>

      <div className="hand-slot hand-slot-right">
        <img
          className="hand-image hand-image-right"
          src="/images/right-hand.png"
          alt="Illustrated right hand reaching toward the center"
        />
      </div>
    </section>
  )
}

export default Hero
