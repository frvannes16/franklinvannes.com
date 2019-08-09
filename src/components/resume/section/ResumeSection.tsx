import React, {PropsWithChildren} from 'react';
import Experience from './experience/Experience';
import styles from './ResumeSection.module.scss';

type Props = {
    sectionTitle: string;
    children: React.ReactNode;
};

const ResumeSection: React.FC<Props> = (props) => {
    return (<div className={styles.section}>
        <h3>{props.sectionTitle}</h3>
        {props.children}
    </div>);
};

export default ResumeSection;