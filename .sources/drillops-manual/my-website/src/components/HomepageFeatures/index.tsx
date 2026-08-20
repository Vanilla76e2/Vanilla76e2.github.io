import type {ReactNode, SVGProps} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Icon: (props: SVGProps<SVGSVGElement>) => ReactNode;
  description: ReactNode;
};

function FleetIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <path
        d="M32 10 50 20.5v21L32 52 14 41.5v-21L32 10Z"
        stroke="#1e3a5f"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="32" r="7" stroke="#2563EB" strokeWidth="2.4" />
      <path
        d="M22 46.5h-6M42 46.5h6M18 20H12M46 20h6"
        stroke="#2563EB"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TripIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <circle cx="32" cy="32" r="18" stroke="#1e3a5f" strokeWidth="2.4" />
      <path
        d="M32 14a12 12 0 0 1 0 24 12 12 0 0 1-8.5-3.5"
        stroke="#2563EB"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M20.5 31.5 23.5 34.5 18 36.5"
        stroke="#2563EB"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 24c-3.3 0-6 2.5-6 5.6 0 4.2 6 10.4 6 10.4s6-6.2 6-10.4c0-3.1-2.7-5.6-6-5.6Z"
        stroke="#1e3a5f"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="29.6" r="1.8" fill="#2563EB" />
    </svg>
  );
}

function MaintenanceIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <rect
        x="14"
        y="12"
        width="28"
        height="40"
        rx="3"
        stroke="#1e3a5f"
        strokeWidth="2.4"
      />
      <path
        d="M22 22h12M22 30h12M22 38h7"
        stroke="#2563EB"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M42 36.5 47.5 42l-3 3-5.5-5.5"
        stroke="#1e3a5f"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M46.5 33.5c2 2 2 5.2 0 7.2-2 2-5.2 2-7.2 0"
        stroke="#2563EB"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Учёт парка РУС',
    Icon: FleetIcon,
    description: (
      <>
        Заказчики, локации, компоненты и сборки собраны в одном месте.
        В карточке сборки видно состав инструмента, текущую локацию и
        готовность к работе.
      </>
    ),
  },
  {
    title: 'Сопровождение рейса',
    Icon: TripIcon,
    description: (
      <>
        Отправка фиксирует, куда уехала сборка. На главной колонки «Готово» и
        «В поле» показывают, где инструмент сейчас. История поля хранит данные
        рейса и вложения.
      </>
    ),
  },
  {
    title: 'Обслуживание и отчёты',
    Icon: MaintenanceIcon,
    description: (
      <>
        По возвращении открывается наряд: работы, заготовки текстов, вложения.
        Сводки и аналитика показывают, что происходило с парком за период.
      </>
    ),
  },
];

function Feature({title, Icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Icon className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
