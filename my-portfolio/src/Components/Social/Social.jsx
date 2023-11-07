import './Social.scss';

const Social = ({logo, title, link}) => {
  return (
    <div className='social'>
     <a href={link} target='_blank'>
     <img src={logo} alt='' />
     <h1>{title}</h1>
     </a>
    </div>
  )
}

export default Social
