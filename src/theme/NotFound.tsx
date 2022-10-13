import React, { FC } from "react";
import Layout from "@theme/Layout";
import { Button, Col, Result, Row } from "antd";

const NotFound: FC<Record<string, any>> = () => {
  return (
    <Layout title="页面消失了">
      <main>
        <Result
          status="404"
          title="404"
          subTitle="您访问的页面消失了 :("
          extra={<Button type="primary" href="/">回首页</Button>}
        />
      </main>
    </Layout>
  );
};

export default NotFound;
