import React, { FC } from "react";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Col, Row } from "antd";

import styles from "./index.module.scss";

const Home: FC<Record<string, any>> = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.tagline}`}
      description={`${siteConfig.tagline}`}
      wrapperClassName={styles.noPadding}
    >
      <main>
        <Row className={`${styles.rowHead} text-light text-center`} justify="space-around" align="middle">
          <Col className={`mx-auto`} span={16} sm={20} xs={20} md={12} lg={12} xl={12}>
            <img src="/images/logo/logo-white-with-name.png" width="200" alt="CubeBit" />
            <h1 className="mb-3 fw-bold fs-1">使用CubeBit可组装组件快速构建应用</h1>
            <p className="mb-4 fs-5">
              Here is the description information. Here is the description information. Here is the description information. Here is the description information. Here is the description information. 
            </p>
          </Col>
        </Row>
      </main>
    </Layout>
  );
};

export default Home;
