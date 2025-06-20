import React from "react";
import { useNavigate } from "react-router";
import { Button, Result } from "antd";
import ApplicationRoutes from "../router/routes";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={() => navigate(ApplicationRoutes.ROOT)}>
          Back Home
        </Button>
      }
    />
  );
};
