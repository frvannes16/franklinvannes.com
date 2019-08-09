import React from 'react';
import styles from './Experience.module.scss';
import ExperienceInfo from './ExperienceInfo';

type Props = {
    details: ExperienceInfo;
    children: Array<string>;
}

const Experience: React.FC<Props> = (props: Props) => {
    return (
    <React.Fragment>
        <div className={styles.headline}>
            <span className={styles.position}>{props.details.position}</span>
            <span className={styles.company}>{props.details.company}</span>
            <span className={styles.location}>{props.details.location}</span>
            <span className={styles.dateEmployed}>{props.details.dateEmployed}</span>
        </div>
        <ul>
            {props.children.map(bullet => <li className={styles.bullet}>{bullet}</li>)}
        </ul>
    </React.Fragment>);
};
export default Experience;