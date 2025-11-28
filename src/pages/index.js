import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
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
                Explore Physics 🔭
              </Link>
              <Link
                className="button button--outline button--secondary button--lg"
                to="/resources">
                View Resources 🛠️
              </Link>
            </div>
          </div>
          <div className={clsx('col col--5', styles.heroImageCol)}>
            {/* Static image removed as per user request */}
          </div>
        </div>
      </div>
      {/* Floating Particles */}
      <img src={require('@site/static/img/floating-einstein.png').default} className={clsx(styles.floatingParticle, styles.particleEinstein)} alt="Floating Einstein" />
      <img src={require('@site/static/img/floating-newton.png').default} className={clsx(styles.floatingParticle, styles.particleNewton)} alt="Floating Newton" />
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Understand physics deeply through intuitive explanations, visual exploration, and interactive learning.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}