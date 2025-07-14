import React, {ReactNode} from "react";
import clsx from "clsx";
import styles from "./index.module.css";

const VersionCard = (props: { data: any }): ReactNode => {
  const version = props.data;
  const openLink = (link: string) => {
    window.open(link, '_blank');
  }

  return (
    <div className={clsx('col', 'col--3', styles.versionCard)}>
      <div className={styles.versionContent}>
        <div className={styles.versionHeader}>
          <div className={styles.versionTitle}>
            <img src={version.logo} alt="logo" height={24}/>
            {version.title}
          </div>
          <img alt="GitHub Org's stars" src={version.github.icon}/>
        </div>
        <div className={styles.versionDescription}>
          {version.description}
        </div>
        <div className={styles.versionFooter}>
          <div
            className={clsx(styles.footerDemo, styles.footerButton)}
            onClick={(e) => openLink(version.demo)}
          >查看演示</div>
          <div
            className={clsx(styles.footerDoc, styles.footerButton)}
            onClick={(e) => openLink(version.doc)}
          >文档</div>
          <div className={clsx(styles.footerIcon, styles.footerButton)}>
            <img
              src="/logos/github.svg"
              alt="github"
              onClick={(e) => openLink(version.github.url)}
            />
          </div>
          <div className={clsx(styles.footerIcon, styles.footerButton)}>
            <img
              src="/logos/gitee.svg"
              alt="gitee"
              onClick={(e) => openLink(version.gitee.url)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VersionCard;