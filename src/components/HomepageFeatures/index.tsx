import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Zero-Knowledge Proofs',
    Svg: require('@site/static/img/zkp.svg').default,
    description: (
      <>
        Using Horizen/zkVerify within a TEE (Trusted Execution Environment), generate a trusted on-chain proof based on the payment credential and predefined conditions. 
      </>
    ),
  },
  {
    title: 'Uniswap Permit2 Escrow',
    Svg: require('@site/static/img/permit2.svg').default,
    description: (
      <>
        Using <a href="https://eips.ethereum.org/EIPS/eip-712" target="_blank">EIP-712</a>/Uniswap <a href="https://docs.uniswap.org/contracts/permit2/overview" target='_blank'>Permit2</a> for intent-based on-chain escrow, funds are moved to the escrow only after the counterparty confirms the intention, which provides sellers with greater asset utilization and flexibility. 
      </>
    ),
  },
  {
    title: 'NFT Identity',
    Svg: require('@site/static/img/nft-id.svg').default,
    description: (
      <>
        NFT Identity-Based System for Trade Performance and Reputation Assessment.
      </>
    ),
  },
  {
    title: 'AI tools',
    Svg: require('@site/static/img/ai-tools.svg').default,
    description: (
      <>
        provide advice, prompts, and process assistance for the trading process.
      </>
    ),
  }
  

];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
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
