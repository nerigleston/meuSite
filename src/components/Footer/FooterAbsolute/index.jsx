import React from "react";
import './style.css'
import Linkedin from '/src/assets/icons8-linkedin.svg'
import GitHub from '/src/assets/icons8-github.svg'
import Instagram from '/src/assets/icons8-instagram.svg'
import Gmail from '/src/assets/icons8-gmail.svg'


function FooterAbsolute() {
  return (
    <footer>
      <div className="rodapeA">
        <p><a className="under" href="https://www.linkedin.com/in/nerigleston/"><img src={Linkedin} alt="LinkedIn" /></a></p>
        <p><a className="under" href="https://github.com/nerigleston"><img src={GitHub} alt="GitHub" /></a></p>
        <p><a className="under" href="https://www.instagram.com/nerigleston/"><img src={Instagram} alt="GitHub" /></a></p>
        <p><a className="under" href="mailto:nerifilho1256@gmail.com"><img src={Gmail} alt="Gmail" /></a></p>
      </div>
    </footer>
  )
}

export default FooterAbsolute