import React from 'react';
import Page from '../page/Page';
import ResumeSection from './section/ResumeSection';
import Experience from './section/experience/Experience';
import ExperienceInfo  from './section/experience/ExperienceInfo';
import styles from './Resume.module.scss';

const experience: ExperienceInfo = {
  company: "TripAdvisor",
  location: "Needham, MA",
  position: "Software Engineer",
  dateEmployed: "July 2018 - Present"
};

const Resume: React.FC = () => {
  return <Page title="Resume">
    <ResumeSection sectionTitle="Software Engineering And Research">
      <Experience details={experience}>{["one", "two"]}</Experience>
    </ResumeSection>
  </Page>;
};
export default Resume;
