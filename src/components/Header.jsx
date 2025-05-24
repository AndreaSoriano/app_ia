import React from "react";
import { Avatar, Flex, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import ApplicationRoutes from "../router/routes";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: 50,
        paddingLeft: 15,
        paddingRight: 15,
        alignContent: "center",
        background: "#030852",
      }}
    >
      <Flex justify="space-between" align="center">
        <Typography.Title
          level={4}
          style={{ margin: 0, color: "white", cursor: "pointer" }}
          onClick={() => navigate(ApplicationRoutes.ROOT)}
        >
          App IA
        </Typography.Title>
        <Avatar icon={<UserOutlined />} />
      </Flex>
    </div>
  );
};
