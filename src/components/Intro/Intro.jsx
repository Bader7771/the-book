import './Intro.css'

function Intro() {
  return (
    <section className="intro" aria-labelledby="intro-heading">
      <h1 id="intro-heading" className="sr-only">
        Common Thread — creative communication studio
      </h1>
      <p className="intro-copy">
        We turn complex ideas into stories people can{' '}
        <span className="accent-link">feel</span>, understand, and remember.
      </p>
    </section>
  )
}

export default Intro
