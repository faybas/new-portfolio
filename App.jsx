import "./App.scss";
import About from "./my-portfolio/src/Pages/About/About";
import Home from "./my-portfolio/src/Pages/Home/Home";
import Header from "./my-portfolio/src/components/header/header";
import github from './assets/github.png';
import Social from "./my-portfolio/src/Components/Social/Social";

import linkedin from './assets/linkedin.png';
import whatsapp from './assets/whatsapp.jfif';
import blog from './assets/blog.png';
import Projects from "./my-portfolio/src/Pages/Projects/Projects";
import Contact from "./my-portfolio/src/Pages/Contact/Contact";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const navLinks = document.querySelectorAll('nav ul li')
    const indicator = document.querySelector('nav .indicator')
    const profile = document.querySelector('.profile')

    const pages = document.querySelectorAll('.page')

    function handleScroll() {
      let homeBottom = pages[0].getBoundingClientRect().bottom;
      let homeHeight = pages[0].offsetHeight;

      if(homeBottom < homeHeight / 2) {
        profile.classList.add('active');
      } else{
        profile.classList.remove('active');
      }  //if height of homepage is less than half, show profile pic. if not, hide it//
      
      //code below changes the black marker on nav bar to move to corresponding pg title as u scroll//
      for(let i=0; i < pages.length; i++) {
        let currentPage = pages[i]

        let pageTop = currentPage.getBoundingClientRect().top;

        if(pageTop < 300) {
          navLinks.forEach(link => {
            link.classList.remove('active')
          })//removes active on nav links. they turn back to black when inactive. without this code, they stay active ie white//

          navLinks[i].classList.add('active')

          let width = navLinks[i].offsetWidth,
              left = navLinks[i].offsetLeft;
          indicator.style.width = `${width + 28}px`
          indicator.style.left = left + 'px';
        }
      }
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll);
  }, [])

  return (
    <div className="App">
      <Header />

      <main>
        <div className="page" id="home">
          <Home />
        </div>
        <div className="page" id="about">
          <About />
        </div>

        <div className="socials-wrapper">
          <h2 className="quick-links">Quick Links</h2>

          <div className="socials">
            <Social logo={github} title='GitHub' />
            <Social logo={linkedin} title='LinkedIn' />
            <Social logo={whatsapp} title='WhatsApp' />
            <Social logo={blog} title='Blog' />
          </div>
        </div>
        <div className="page" id="projects">
          <Projects />
        </div>
        <div className="page" id="contact">
          <Contact />
        </div>
      </main>
    </div>
  )
}

export default App
