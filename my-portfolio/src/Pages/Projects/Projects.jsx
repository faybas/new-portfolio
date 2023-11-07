import { useState } from 'react';
import ProjectTemplate from '../../Components/ProjectTemplate/ProjectTemplate';
import './Projects.scss';
import healthLink from '../../assets/health-app.png';
import jsweb from '../../assets/js-web.png';
import portfolio from '../../assets/portfolio.png';

const Projects = () => {
    const [tags] = useState(['React', 'JavaScriprt', 'CSS/SCSS', 'HTML', 'JSX', 'TypeScript'])
  return (
  <div className='projects-wrapper'>
     <div></div>
    <ProjectTemplate projectName='ReactJS Portfolio' 
    projectDesc='I built a portfolio to showcase my skills using ReactJS. With this I have
    cemented my knowledge in simplifying app building with React components, tags and props.
    This app has pretty aesthetics and good functionality and I look forward to building more
    projects with React.'
    tags={['React', 'JSX', 'SASS']}
    img={portfolio} />
    <ProjectTemplate projectName='Health Link App' 
    projectDesc='I designed a Landing Page for an idea I have.
    I am from a medical background and there is a wide gap in knowledge-sharing
    among healthcare professionals. This idea aims to bridge this gap.
    I used CSS & JavaScript to animate the pictures and make the Sign Up button responsive
    respectively. I also used JavaScript to make the side navigation responsive on click.
    With time, I hope to turn this into an Information Management System.'
    tags={['JavaScript', 'HTML', 'CSS']}
    img={healthLink} />
    <ProjectTemplate projectName='JavaScript Website' 
    projectDesc='This is my first website built using Javascript for better functionality.
    It has a wheel-slide that changes different pages upon clicking the up or down
    Features button.'
    tags={['JavaScript', 'HTML', 'CSS']}
    img={jsweb} />
     <div></div>
  </div>
  );
}

export default Projects
