import React from "react";
import { Button, Flex, Table, Typography } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

export const Module = ({ title, columns, data }) => {
  return (
    <>
      <Flex justify="space-between" align="center">
        <Typography.Title level={4} style={{ marginTop: 0 }}>
          {title}
        </Typography.Title>
        <Button
          type="primary"
          icon={<PlusCircleOutlined />}
          iconPosition={"end"}
        >
          Crear
        </Button>
      </Flex>
      <br />
      <Table columns={columns} dataSource={data} rowKey={"id"} />
    </>
  );
};
