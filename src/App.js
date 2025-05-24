import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import {
  FolderOutlined,
  DesktopOutlined,
  RocketOutlined,
  UserOutlined,
  BarChartOutlined,
  SnippetsOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import ApplicationRoutes from "./router/routes";
import { AppRouter } from "./router/AppRouter";
import { Header } from "./components/Header";

const { Content, Sider } = Layout;

const siderStyle = {
  overflow: "auto",
  height: "93vh",
  position: "sticky",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
};

const items = [
  {
    key: ApplicationRoutes.PROJECTS,
    icon: <FolderOutlined />,
    label: "Proyectos",
  },
  {
    key: ApplicationRoutes.MACHINES,
    icon: <DesktopOutlined />,
    label: "Máquinas",
  },
  {
    key: ApplicationRoutes.DEPLOYMENTS,
    icon: <RocketOutlined />,
    label: "Despliegues",
  },
  {
    key: ApplicationRoutes.USER_STORIES,
    icon: <SnippetsOutlined />,
    label: "Historias de Usuario",
  },
  {
    key: ApplicationRoutes.RESPONSIBLES,
    icon: <UserOutlined />,
    label: "Responsables",
  },
  {
    key: ApplicationRoutes.REPORTS,
    icon: <BarChartOutlined />,
    label: "Visualización y Reporting",
  },
  {
    key: ApplicationRoutes.LOGS,
    icon: <SolutionOutlined />,
    label: "Auditoría y Logs",
  },
];

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setSelected(location.pathname);
  }, []);

  useEffect(() => {
    if (selected) navigate(selected);
  }, [selected]);

  useEffect(() => {
    if (location.pathname === ApplicationRoutes.ROOT) setSelected(null);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Layout hasSider>
        <Sider
          width={220}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={siderStyle}
        >
          <Menu
            theme="dark"
            selectedKeys={[selected]}
            onSelect={(item) => setSelected(item?.key)}
            items={items}
          />
        </Sider>
        <Layout>
          <Content style={{ margin: 16 }}>
            <AppRouter />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default App;
