import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { NotesSVG, SimulationSVG, QuizSVG } from './FeatureSvgs';

const FeatureList = [
  {
    title: 'Conceptual Explanations',
    Svg: NotesSVG,
    description: (
      <>
        Clear, intuitive explanations of physics concepts across Mechanics, Electromagnetism,
        Thermodynamics, Optics, and Modern Physics—designed to build real understanding.
      </>
    ),
  },
  {
    title: 'Interactive Simulations',
    Svg: SimulationSVG,
    description: (
      <>
        Don't just read physics—experience it. Visualize abstract concepts
        with interactive simulations and graphs. Coming soon!
      </>
    ),
  },
  {
    title: 'Check Your Understanding',
    Svg: QuizSVG,
    description: (
      <>
        Reinforce your grasp of key concepts with guided questions
        and thoughtful exercises at the end of each chapter.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <Heading as="h2" style={{ fontSize: '2.5rem', fontWeight: '700' }}>
            Why PhysicsDaily?
          </Heading>
          <p style={{ fontSize: '1.2rem', color: 'var(--ifm-color-content-secondary)' }}>
            Build deep intuition for physics through clear explanations and interactive exploration.
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}