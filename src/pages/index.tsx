import React, {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import clsx from "clsx";
import logos from "@site/src/data/logos";
import BlockTitle from "@site/src/components/BlockTitle";
import ProjectCard from "@site/src/components/ProjectCard";
import versions from "@site/src/data/versions";

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img src="/logos/xinadmin.svg" alt="Project Logo" className={styles.logo} />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {versions.map(props => <ProjectCard {...props} />)}
            </div>

            <BlockTitle title={'生态系统项目'} description={'感谢为 XinAdmin 的诞生做出杰出贡献的优秀生态项目'} />

            <div className={'row'}>
              {logos.map((item, index) => (
                <div className={clsx('col', 'col--2', styles.logosCard)} key={index}>
                  <a href={item.link} target="_blank" className={styles.logo}>
                    <img src={item.logo} height="40" alt={item.link}/>
                  </a>
                </div>
              ))}
            </div>

            <BlockTitle title={'反馈与赞助'} description={'如果你在使用过程中有任何问题，都可以加入我们的官方qq群来解答'} />

            <div className={styles.feedback}>
              <div>
                <img src="https://file.xinadmin.cn/file/qqchat.jpg" height="280" alt="官方交流QQ群"/>
                <p>官方交流QQ群</p>
              </div>
              <div>
                <img src="https://file.xinadmin.cn/file/wechat.png" height="280" alt="微信公众号"/>
                <p>微信公众号</p>
              </div>
              <div>
                <img src="https://xinadmin.oss-cn-beijing.aliyuncs.com/file/wxPay.jpg" height="280" alt="微信赞助"/>
                <p>微信赞助</p>
              </div>
              <div>
                <img src="https://xinadmin.oss-cn-beijing.aliyuncs.com/file/aliPay.jpg" height="280" alt="支付宝赞助"/>
                <p>支付宝赞助</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}