import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import ThemedImage from '@theme/ThemedImage';

import styles from './index.module.css';

function HomepageHeader() {
  const bannerSources = {
    light: useBaseUrl('/img/DrillOps-Banner-LightTheme.png'),
    dark: useBaseUrl('/img/DrillOps-Banner-DarkTheme.png'),
  };

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroLogoWrap}>
          <ThemedImage
            alt=""
            className={clsx(styles.heroLogo, styles.heroLogoGlow)}
            sources={bannerSources}
          />
          <ThemedImage
            alt="DrillOps — система учёта обслуживания РУС"
            className={styles.heroLogo}
            sources={bannerSources}
          />
        </div>
        <div className={styles.buttons}>
          <Link className={styles.ctaButton} to="/docs/intro">
            Руководство DrillOps
            <svg
              className={styles.ctaButtonIcon}
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true">
              <path
                d="M6 3.5 11 8l-5 4.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Руководство пользователя Desktop"
      description="Руководство пользователя DrillOps Desktop — учёт парка РУС, рейсы, обслуживание и отчёты.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
