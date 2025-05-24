import React from "react";
import { Button, Space } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";

export const Actions = ({ route }) => {
  const navigate = useNavigate();

  return (
    <Space>
      <Button
        type="link"
        icon={<EyeOutlined />}
        onClick={() => navigate(route)}
      />
      <Button type="link" icon={<EditOutlined />} />
      <Button type="link" icon={<DeleteOutlined />} />
    </Space>
  );
};
