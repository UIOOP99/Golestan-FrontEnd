import { Row, Col, Typography } from 'antd';

const { Title } = Typography;

export default function ListHeader({ title, children }) {
  return (
    <Row justify="space-between" align="middle">
      <Col>
        <Title level={3}>{title}</Title>
      </Col>

      <Col>
        {children}
      </Col>
    </Row>
  );
}