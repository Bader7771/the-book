import './Intro.css'

function Intro() {
  return (
    <section className="intro" aria-labelledby="intro-heading">
      <h1 id="intro-heading" className="sr-only">
        Alexei Kapterev introduction
      </h1>
      <p className="intro-copy">
        My name is Alexei Kapterev. I assist my clients with solving difficult communication
        problems. I provide{' '}
        <a className="accent-link" href="#consulting">
          consulting
        </a>{' '}
        services,{' '}
        <a className="accent-link" href="#training">
          teach
        </a>{' '}
        presentation skills and{' '}
        <a className="accent-link" href="#speaking">
          speak
        </a>{' '}
        at conferences. Please have a look at my book{' '}
        <a className="accent-link" href="#the-book">
          Presentation Secrets
        </a>
        .
      </p>
    </section>
  )
}

export default Intro
