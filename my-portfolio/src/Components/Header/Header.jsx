import './Header.scss';
import logo from '../../assets/portfolio-logo.png';
import profile from '../../assets/FM.png';
import { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    const navLinks = document.querySelectorAll('nav ul li')
    const indicator = document.querySelector('nav .indicator')

    function update() {
        let width = navLinks[0].offsetWidth,
            left = navLinks[0].offsetLeft;

        indicator.style.width = `${width + 28}px`
        indicator.style.left = `${left}px`
    }

    update();

   //code below moves the black band around nav items when theyre clicked//
    navLinks.forEach(link => {
        //removes band from those not clicked//
        link.addEventListener('click', () => {
            navLinks.forEach(link => {
                link.classList.remove('active')
            })
            let width = link.offsetWidth,
                left = link.offsetLeft;

            indicator.style.left = left + 'px'
            indicator.style.width = `${width + 28}px`

            link.classList.add('active')
        })
    })
  }, []);
  return (
  <header>
    <div className='logo'>
        <img src={logo} alt='' />
        <h1>FAITH <i>MBASANI</i></h1>
    </div>

    <nav>
        <ul>
            <div className='indicator'></div>
            <li className='active'><a href='#home'>HOME</a></li>
            <li><a href='#about'>ABOUT</a></li>
            <li><a href='#projects'>PROJECTS</a></li>
            <li><a href='#contact'>GET IN TOUCH</a></li>
        </ul>
    </nav>

    <div className='profile'>
        <img src={profile} alt=''></img>
    </div>
    </header>
  )
}

export default Header
