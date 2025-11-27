import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { NotesSVG, SimulationSVG, QuizSVG } from './FeatureSvgs';

const FeatureList = [
  {
    title: 'Comprehensive Notes',
    Svg: NotesSVG,
    description: (
      <>
        Detailed university-level physics notes covering Mechanics, Electromagnetism,
        Thermodynamics, Optics, and Modern Physics.
      </>
    ),
  },
  {
    title: 'Interactive Simulations',
    Svg: SimulationSVG,
    description: (
      <>
        Don't just read physics—experience it. visualize abstract concepts
        with interactive React-based simulations and graphs.
      </>
    ),
  },
  {
    title: 'Practice & Quizzes',
    Svg: QuizSVG,
    description: (
      <>
        Test your understanding with integrated multiple-choice questions
        and problem-solving exercises at the end of each chapter.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="feature-card">
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
          <Heading as="h2" style={{fontSize: '2.5rem', fontWeight: '700'}}>
            Why PhysicsDaily?
          </Heading>
          <p style={{fontSize: '1.2rem', color: 'var(--ifm-color-content-secondary)'}}>
            Everything you need to ace your physics exams in one place.
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