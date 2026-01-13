import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Content Design',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        DITA Structured Authoring, Minimalism, Localization, API documentation, UX Writing
      </>
    ),
  },
  {
    title: 'Tools & Technologies',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        XMetaL, Oxygen, Docusaurus, Git, Markdown, HTML/CSS, JSON, Jira, ServiceNow, Confluence, ...
      </>
    ),
  },
  {
    title: 'Contact Information',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <b>Name:</b> Tristelle Kervel <br/>
        <b>LinkedIn:</b> <a href="https://www.linkedin.com/in/tristelle-kervel/">www.linkedin.com/in/tristelle-kervel/</a><br/>
        <b>Github:</b> <a href="https://github.com/tkervel">github.com/tkervel</a>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
