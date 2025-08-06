import clsx from 'clsx';
import styles from './index.module.css';

const ProjectCard = ({ title, description, githubUrl, giteeUrl, demoUrl, docsUrl, githubIcon, logo }) => {

  return (
    <div className={clsx('col col--3', styles.card)}>
      <div className="card">
        <div className={clsx(styles.card__header,"card__header")}>
          <h3><img src={logo} alt="logo"/> {title}</h3>
          <img alt="GitHub Org's stars" src={githubIcon}/>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <div className={styles.buttonGroup}>
            {demoUrl && (
              <a href={demoUrl} className="button button--secondary button--block" target="_blank" rel="noopener noreferrer">
                演示
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} className="button button--secondary button--block" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
            {giteeUrl && (
              <a href={giteeUrl} className="button button--secondary button--block" target="_blank" rel="noopener noreferrer">
                Gitee
              </a>
            )}
            {docsUrl && (
              <a href={docsUrl} className="button button--primary button--block" target="_blank" rel="noopener noreferrer">
                文档
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;