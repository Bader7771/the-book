import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-links" aria-label="Contact and social links">
        <a href="tel:+74957641898">+7 495 764 1898</a>
        <span aria-hidden="true">.</span>
        <a href="mailto:alexei@kapterev.com">alexei@kapterev.com</a>
        <span aria-hidden="true">.</span>
        <a href="#facebook">Facebook</a>
        <span aria-hidden="true">.</span>
        <a href="#twitter">Twitter</a>
        <span aria-hidden="true">.</span>
        <a href="#slideshare">SlideShare</a>
      </div>
      <a className="language-link" href="#ru">
        По-русски, пожалуйста
      </a>
    </footer>
  )
}

export default Footer
