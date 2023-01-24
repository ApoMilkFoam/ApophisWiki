import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '化繁为简',
    Svg: require('@site/static/img/space-computer-monitor-with-charts-and-graphs.svg').default,
    description: (
      <>
        没有繁琐的加入机制，你只需要拥有拥有纯净客户端，再阅读简单的社区规则和常见问题即可开始你的多人联机生存之旅！
        没有加入太多繁杂而无趣的插件，在保证游戏玩法有特色的同时让其浅显易懂。
        在这里，一切都尽可能向简单靠拢
      </>
    ),
  },
  {
    title: '稳定可靠',
    Svg: require('@site/static/img/lounge-cyber-security-1.svg').default,
    description: (
      <>
        服务器选用国内稳定的知名服务器，AnyCast 技术+多线接入，独享硬件带宽资源、快如闪电的 ESSD 硬盘，从此告别游戏卡顿。
        每日凌晨四点的 1 次异地全量备份 + 每半小时 1 次的线上热背包备份，Pirsm 方块变动数据永久保留，意外和灾难不再可怕。
      </>
    ),
  },
  {
    title: '创造力社区',
    Svg: require('@site/static/img/space-process-of-transferring-information-using-computer-technology.svg').default,
    description: (
      <>
        在这片地大物博的世界里，创造是铸造伟大的阶梯。
        玩家们创建了城镇与市场，谱写了温馨与美好，亦在互助中孕育友情。
        时间流淌在高楼大厦之间，亦流动在红石的光辉中。
        从宏伟的世界建筑到喜闻乐见的玩家雕塑，社区驱使着创造力，丰富着世界的多彩。
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
        <h3>{title}</h3>
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
