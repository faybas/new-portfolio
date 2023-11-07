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
    projectDesc='I built my portfolio using ReactJS. This app helped
    cement my knowledge in simplifying app building with React components, tags and props.
    I am excited to build more projects with React.'
    tags={['React', 'JSX', 'SASS']}
    img={portfolio} />
    <ProjectTemplate projectName='Health Link App' 
    projectDesc='A Landing Page for an idea to bridge the gap between health professionals.
    I used CSS & JavaScript to make the app responsive. With time, I hope to turn this into
    an Information Management System.'
    tags={['JavaScript', 'HTML', 'CSS']}
    img={healthLink} Link='https://faybas.github.io/healthcare-app/' />
    <ProjectTemplate projectName='JavaScript Website' 
    projectDesc='This is my first website built using Javascript for better functionality.
    It has a wheel-slide that changes different pages upon clicking the up or down
    Features button.'
    tags={['JavaScript', 'HTML', 'CSS']}
    img={jsweb} Link='https://faybas.github.io/JS-website/' />
     <div></div>
  </div>
  );
}

export default Projects
