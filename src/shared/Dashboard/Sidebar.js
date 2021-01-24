import { Layout, Menu } from "antd";
import {
  UserOutlined,
  CalendarOutlined,
  IdcardOutlined,
  ContainerOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";

const { Sider } = Layout;

export default function Sidebar({ collapse }) {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapse}
      collapsedWidth="0"
      style={{ height: " 100vh" }}
    >
      <div className="sidebar__logo">
        <h1>سامانه گلستان</h1>
      </div>

      <Menu theme="dark" mode="inline">
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="StuProfile">مشخصات دانشجو</Link>
        </Menu.Item>

        <Menu.Item key="2" icon={<CalendarOutlined />}>
          <Link to="StuExamSchedule">برنامه امتحانات</Link>
        </Menu.Item>

        <Menu.Item key="3" icon={<ContainerOutlined />}>
          <Link to="StuWeeklySchedule">برنامه هفتگی</Link>
        </Menu.Item>

        <Menu.Item key="4" icon={<IdcardOutlined />}>
          <Link to="StuReportCard">وضعیت دانشجو</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
