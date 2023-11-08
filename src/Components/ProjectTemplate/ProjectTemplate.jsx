import { Link } from 'react-router-dom';
import Tag from '../Tag/Tag';
import './ProjectTemplate.scss';

const ProjectTemplate = ({projectName, projectDesc, tags, img, Link}) => {
  return (
    <div className='project'>
        <div className='project-details'>
            <h2 className='project-name'>{projectName}</h2>
            <span className='project-desc'>{projectDesc}</span>

            <div className='tags'>
                <h2 className='tech-stack'>Technologies Used:</h2>

                <div  className='tags-wrapper'>
                 {tags.map(tag => {
                    return (
                        <Tag key={projectName} title={tag} />
                    );
                 })}
                </div>
            </div>
        </div>

        <a href={Link} target='_blank'>
         <div className='project-image'>
             <img src={img} alt='' />
         </div>
        </a>
    </div>
  )
}

export default ProjectTemplate
