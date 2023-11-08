import InfoCard from '../../Components/InfoCard/InfoCard';
import './About.scss';

const About = () => {
  return (<div className='about'>
    <div className='name'>
        <div>
            <h1 className='txt'>AB <br /> OU </h1>
        </div>
        <h1 className='txt lg'>T</h1>

        <div className='me'>ME</div>
    </div>

    <div className='info'>
        <InfoCard title='About Me' details='I am a self-starter and hard worker
        with quite big dreams. I intend to use my creativity to build software projects that
        can solve particular pain points I have experienced and observed. To do this, I am always
        online learning new skills. I like to put my all at work because I like knowing that
        I did all I could to achive something. I also work with clear expectations and
        minimal supervision.' />
        <InfoCard title='Education' details='Learning and self-improvement are particular
        interests I enjoy. I try to enroll in an online course at least every year to advance
        my understanding of various concepts. At the moment, I am pursuing an evening course
        in Artificial Intelligence & Machine Learning. I intend to learn about Big Data
        and create my own Virtual Assistant. I look forward to that wonderful day in the near
        future.' />
        <InfoCard title='Skills' details='Web Development, ReactJS, JavaScript, CSS/SCSS, HTML,
        Quality Assurance, Creative Thinking.' />
        <InfoCard title='Social Life' details='I pass time by reading or trying out new hobbies.
        I meet people while doing these and at the moment, my interest is in inline-skating.
        I also love making art, dancing, playing my viola and flute, among other hobbies.' />
    </div>
  </div>
  );
};

export default About
