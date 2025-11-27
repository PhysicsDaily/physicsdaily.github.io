import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--7', styles.heroTextCol)}>
            <Heading as="h1" className={styles.heroTitle}>
              {siteConfig.title}
            </Heading>
            <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/introduction/history-of-physics">
                Start Learning 🚀
              </Link>
              <Link
                className="button button--outline button--secondary button--lg"
                to="/resources">
                View Resources 🛠️
              </Link>
            </div>
          </div>
          <div className={clsx('col col--5', styles.heroImageCol)}>
            <img 
              src="img/undraw_docusaurus_react.svg" 
              alt="Physics Simulation Interaction" 
              className={styles.heroImg} 
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Master university physics with free interactive notes, simulations, and practice problems.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}