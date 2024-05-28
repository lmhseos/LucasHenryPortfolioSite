
import './experience.css';
import bradfordWhiteLogo from '../../assets/BWC-Logo.jpg';
import vervintLogo from '../../assets/OST-Logo.png';
import bizstreamLogo from '../../assets/BizStream-Logo.png';

const experienceData = [
  {
    title: 'Software Engineer - Intern',
    company: 'Bradford White',
    duration: 'May 2022 - May 2023',
    responsibilities: [
      'Designed, proposed and implemented a library of test scripts to run against an embedded system',
      'Developed a tool to interface with embedded systems in .NET',
      'Testing to requirements with automated, manual and lab testings',
      'Wrote documentation and test plans'
    ],
    logo: bradfordWhiteLogo 
  },
  {
    title: 'Software Engineer - Intern ',
    company: 'Vervint',
    duration: 'May 2023 - August 2023',
    responsibilities: [
      'Created a component library with React, Tailwind and Storybook',
      'Wrote Azure HTTP Trigger functions in C# .NET with unit tests',
      'Participating in code reviews and learning from senior developers',
      'Presented in front of stakeholders every two weeks and explained technical details',
    ],
    logo: vervintLogo 
  },
  {
    title: 'Software Engineer - Intern',
    company: 'BizStream',
    duration: 'May 2024 - Present',
    responsibilities: [
      'Created a fullstack application with C# and React that has LLM RAG capabilities',
      'Created a slack bot with LLM Agent that can execute code, retrieve data and think through problems',
      'Created Deployment pipelines with AWS and GitHub actions',
     
    ],
    logo: bizstreamLogo 
  }
];

const WorkExperience = () => {
  return (
    <section id="experience">
      <div className="work-experience">
        {experienceData.map((job, index) => (
          <div key={index} className="job">
            <h2 className="job-title">{job.title}</h2>
            <div className="company-info">
              <h3 className="company">{job.company}</h3>
            </div>
            <img src={job.logo} alt={`${job.company} logo`} className="company-logo" />
            <p className="time">{job.duration}</p>
            <ul className="responsibilities">
              {job.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
