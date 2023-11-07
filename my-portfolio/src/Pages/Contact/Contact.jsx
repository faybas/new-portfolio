import Social from '../../Components/Social/Social';
import './Contact.scss';

import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import gmail from '../../assets/gmail.jpg';

const Contact = () => {
  return (
  <div className='contact'>
    <h1>Get In Touch</h1>
    <span>
    Please find below the links to my various contacts.
    </span>

    <div className='socials'>
        <Social logo={gmail} title='Gmail' link='mailto: faithmbasani@gmail.com' />
        <Social logo={github} title='GitHub' link='https://github.com/faybas' />
        <Social logo={linkedin} title='LinkedIn' link='https://www.linkedin.com/in/faith-mbasani-531a87290/' />
    </div>

    <footer>
        <span>Copyright 2023 | Faith Mbasani</span>
    </footer>
  </div>
  );
}

export default Contact
