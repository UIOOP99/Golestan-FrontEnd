import React from 'react';

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

import { Layout, Row, Col, Button } from 'antd';

const { Header } = Layout;

export default function TopHeader({ collapse, toggleSider }) {
  return (
    <Header style={{ background: '#fff', padding: '0 1rem' }}>
      <Row justify="space-between" align="middle">
        <Col>
          {React.createElement(collapse ? MenuFoldOutlined : MenuUnfoldOutlined , {
            className: 'sidebar__trigger',
            onClick: toggleSider
          })}
        </Col>

        <Col>
          <Button>خروج</Button>
        </Col>
      </Row>
    </Header>
  );
}