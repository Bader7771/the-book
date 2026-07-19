import { useEffect, useState } from 'react'
import './Sections.css'

const projects = [
  { number: '01', title: 'The Language of Care', description: 'Brand strategy and communication system for a healthcare organization that needed to sound more human.', services: 'Strategy · Narrative · Identity', art: 'care' },
  { number: '02', title: 'A City in Conversation', description: 'A public campaign designed to help local communities participate in shaping their shared spaces.', services: 'Campaign · Participation · Design', art: 'city' },
  { number: '03', title: 'Made to Be Understood', description: 'A visual storytelling platform that transformed complex research into a clear public experience.', services: 'Research · Editorial · Digital', art: 'research' },
]

const process = [
  ['01', 'Listen', 'We begin by understanding the people, tensions, questions, and ambitions behind the work.'],
  ['02', 'Find', 'We uncover the central idea that connects everything and gives the story direction.'],
  ['03', 'Shape', 'We transform the idea into language, visuals, systems, and experiences.'],
  ['04', 'Share', 'We help the story move through the world with clarity, consistency, and purpose.'],
]

const services = [
  ['Brand strategy', 'Positioning, principles, and a point of view people can believe in.'],
  ['Narrative and messaging', 'Language that makes the important idea easy to hold onto.'],
  ['Creative direction', 'A coherent visual and verbal world for the story.'],
  ['Editorial design', 'Thoughtful publications, reports, and long-form experiences.'],
  ['Digital experiences', 'Useful, expressive interfaces shaped around real people.'],
  ['Campaign concepts', 'Ideas with the clarity and energy to travel.'],
  ['Presentation storytelling', 'Complex thinking made persuasive, human, and memorable.'],
  ['Workshops and facilitation', 'Collaborative sessions that move teams toward shared meaning.'],
]

const testimonials = [
  ['“Common Thread helped us understand what we were truly trying to say. The final work felt clearer, more human, and more like us than anything we had created before.”', 'Maya Laurent', 'Founder, Field Office'],
  ['“They found the one idea that had been hiding inside a hundred pages of research—and gave everyone a language for moving forward together.”', 'Daniel Cho', 'Director, Civic Assembly'],
  ['“The process changed more than our communications. It changed how we understood our own work and the people it exists to serve.”', 'Amina Bell', 'Head of Strategy, Northlight'],
]

function Label({ children }) { return <p className="eyebrow">{children}</p> }

function ProjectArtwork({ type }) {
  return <svg className={`project-art project-art--${type}`} viewBox="0 0 700 470" role="img" aria-label="Abstract hand-drawn project illustration">
    {type === 'care' && <><path d="M84 242c70-99 157-151 259-92 88 50 137 42 265-49"/><path d="M88 246c82 90 179 117 260 34 78-79 151-84 263-31"/><circle cx="345" cy="218" r="42"/><path className="accent-stroke" d="M328 218h34M345 201v34"/></>}
    {type === 'city' && <><path d="M70 356h560M101 355V181l90-55v229M191 355V229l103-73v199M294 355V102l122 70v183M416 355V214l86-49v190M502 355V249l88-46v152"/><path className="accent-stroke" d="M108 293c147-62 261 28 474-85"/><circle cx="108" cy="293" r="7"/><circle cx="582" cy="208" r="7"/></>}
    {type === 'research' && <><circle cx="350" cy="235" r="157"/><circle cx="350" cy="235" r="99"/><circle cx="350" cy="235" r="40"/><path d="M80 235h540M350 34v402M127 120l446 230M127 350l446-230"/><path className="accent-stroke" d="M238 162c45 26 76 28 112 73s75 42 121 68"/></>}
  </svg>
}

function Opening() {
  return <section className="opening editorial-section reveal" aria-labelledby="opening-title">
    <Label>What connects us</Label>
    <h2 id="opening-title">Good communication does more than <span className="marked">explain.<svg viewBox="0 0 260 26" aria-hidden="true"><path d="M4 17C66 5 177 6 255 15"/></svg></span> It creates <em>understanding</em>, builds trust, and gives people something worth remembering.</h2>
    <p className="margin-note">the moment an idea becomes shared <span>↗</span></p>
  </section>
}

function Work() {
  return <section className="work editorial-section" id="work" aria-labelledby="work-title">
    <header className="section-intro reveal"><Label>Selected collaborations</Label><h2 id="work-title">Stories shaped<br/>with purpose.</h2></header>
    <div className="project-list">{projects.map((project, index) => <article className={`project reveal ${index % 2 ? 'project--reverse' : ''}`} key={project.title}>
      <div className="project-copy"><p className="project-number">Project {project.number}</p><h3>{project.title}</h3><p>{project.description}</p><small>{project.services}</small><a href="#contact">Read the story <span>→</span></a></div>
      <div className="project-visual"><ProjectArtwork type={project.art}/><span className="art-caption">Common Thread / Selected work {project.number}</span></div>
    </article>)}</div>
  </section>
}

function Approach() {
  return <section className="approach editorial-section reveal" id="approach" aria-labelledby="approach-title">
    <Label>How we work</Label><h2 id="approach-title">Listen deeply. Find the thread. Make it clear.</h2>
    <div className="process-map">
      <svg className="process-thread" viewBox="0 0 1200 490" preserveAspectRatio="none" aria-hidden="true"><path d="M24 316C178 77 245 107 337 242c87 127 184 135 273 13 93-128 214-160 306-35 72 97 133 101 260-70"/><circle cx="39" cy="296" r="7"/><circle cx="1171" cy="154" r="9"/></svg>
      <svg className="process-thread-mobile" viewBox="0 0 100 800" preserveAspectRatio="none" aria-hidden="true"><path d="M26 8C72 93 14 152 50 222s11 132-19 190 59 119 20 181-23 124 18 198"/><circle cx="26" cy="8" r="3"/><circle cx="69" cy="791" r="4"/></svg>
      {process.map(([number,title,text],i)=><article className={`process-step process-step--${i+1}`} key={title}><small>{number}</small><h3>{title}</h3><p>{text}</p></article>)}
    </div>
  </section>
}

function Studio() {
  return <section className="studio editorial-section reveal" id="studio" aria-labelledby="studio-title">
    <div className="thread-drawing"><svg viewBox="0 0 620 620" role="img" aria-label="A tangled thread becoming one clear line"><path d="M42 327c108-188 282 195 392-30 59-122-209-200-266-41-51 143 237 145 247-23 8-132-254-78-227 70 26 140 239 14 117-99C194 101 61 239 159 374c71 98 220 15 265-38 60-72 96-35 154-12"/><circle className="thread-point" cx="578" cy="324" r="10"/></svg><p>“Follow the idea until<br/>it becomes clear.”</p></div>
    <div className="studio-copy"><Label>The studio</Label><h2 id="studio-title">Clarity is not simplicity. It is the result of careful thinking.</h2><p>Common Thread is an independent studio for communication strategy, storytelling, and design. We work with people who are building something meaningful and need help expressing it with honesty, imagination, and precision.</p><p>Our work lives between words and images, logic and emotion, structure and surprise.</p></div>
  </section>
}

function Capabilities() {
  const [open, setOpen] = useState(null)
  return <section className="capabilities editorial-section" aria-labelledby="capabilities-title"><header className="section-intro reveal"><Label>What we bring together</Label><h2 id="capabilities-title">One story. Many forms.</h2></header><div className="service-list reveal">{services.map(([name,description],i)=><button className={open===i?'is-open':''} onClick={()=>setOpen(open===i?null:i)} aria-expanded={open===i} key={name}><span className="service-number">0{i+1}</span><strong>{name}</strong><span className="service-description">{description}</span><i>↗</i></button>)}</div></section>
}

function FeaturedThought() {
  return <section className="featured-thought reveal" aria-labelledby="thought-title"><span className="quote-mark" aria-hidden="true">✦</span><blockquote id="thought-title">{['“The clearest ideas are rarely the first ones.','They are the ones we discover after looking,','listening, and asking better questions.”'].map((line,i)=><span style={{'--delay':`${i*130}ms`}} key={line}>{line}</span>)}</blockquote><cite>Common Thread, Studio Note No. 01</cite></section>
}

function Journal() {
  const entries=[['14.06.26','Point of view','Why meaningful brands begin with a point of view'],['28.05.26','Clarity','The difference between making something simple and making it clear'],['03.04.26','Process','What hand-drawn ideas can teach digital products']]
  return <section className="journal-section editorial-section" id="journal" aria-labelledby="journal-title"><header className="section-intro reveal"><Label>Notes from the margins</Label><h2 id="journal-title">Things we are<br/>thinking about.</h2></header><div className="journal-list reveal">{entries.map(([date,category,title],i)=><a href="#contact" key={title}><span className="journal-index">0{i+1}</span><time>{date}</time><small>{category}</small><strong>{title}</strong><i>→</i></a>)}</div><a className="text-link" href="#contact">Explore the journal <span>↗</span></a></section>
}

function ClientWords() {
  const [index,setIndex]=useState(0); const move=(amount)=>setIndex((index+amount+testimonials.length)%testimonials.length)
  const [quote,name,role]=testimonials[index]
  return <section className="client-words editorial-section reveal" aria-labelledby="client-title"><Label>What remains after the work</Label><div className="testimonial"><span className="testimonial-number">0{index+1} / 03</span><blockquote id="client-title" key={index}>{quote}</blockquote><p><strong>{name}</strong><small>{role}</small></p><div className="testimonial-controls"><button onClick={()=>move(-1)} aria-label="Previous testimonial">←</button><button onClick={()=>move(1)} aria-label="Next testimonial">→</button></div></div></section>
}

function Contact() {
  return <><section className="contact-section reveal" id="contact" aria-labelledby="contact-title"><Label>Start a conversation</Label><h2 id="contact-title">Have an idea worth<br/><em>connecting?</em></h2><p>Tell us what you are building, changing, questioning, or trying to make clearer.</p><div className="contact-line"><svg viewBox="0 0 800 80" preserveAspectRatio="none" aria-hidden="true"><path d="M3 45c159-56 273 41 414-8 101-35 174-21 374 7"/></svg><a href="mailto:hello@commonthread.studio">Begin a conversation <span>✦</span></a></div><a className="contact-email" href="mailto:hello@commonthread.studio">hello@commonthread.studio</a></section><Footer/></>
}

function Footer() { return <footer className="common-footer"><div className="footer-brand"><a href="#home">Common Thread</a><p>Independent communication studio</p><svg viewBox="0 0 90 35" aria-label="Common Thread signature mark"><path d="M2 19c19-22 30 18 47-3 10-13 18 4 38-8"/><circle cx="87" cy="8" r="3"/></svg></div><nav aria-label="Footer navigation"><a href="#work">Work</a><a href="#approach">Approach</a><a href="#studio">Studio</a><a href="#journal">Journal</a><a href="#contact">Contact</a></nav><div className="footer-social"><a href="https://instagram.com">Instagram</a><a href="https://linkedin.com">LinkedIn</a><a href="https://www.are.na">Are.na</a></div><div className="footer-end"><a href="mailto:hello@commonthread.studio">hello@commonthread.studio</a><p>Based everywhere ideas can meet.</p><small>© 2026 Common Thread Studio</small></div></footer> }

function Sections() {
  useEffect(()=>{const observer=new IntersectionObserver(items=>items.forEach(item=>item.isIntersecting&&item.target.classList.add('is-seen')),{threshold:.12});document.querySelectorAll('.reveal').forEach(node=>observer.observe(node));return()=>observer.disconnect()},[])
  return <><Opening/><Work/><Approach/><Studio/><Capabilities/><FeaturedThought/><Journal/><ClientWords/><Contact/></>
}

export default Sections
