import React from "react";
import {
  ClockCircleOutlined,
  SyncOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import ApplicationRoutes from "../../router/routes";
import { Actions } from "../../components/Actions";
import { Module } from "../../components/Module";
import { generatePath } from "react-router";
import { Tag } from "antd";

export const UserStories = () => {
  const columns = [
    {
      title: "Proyecto",
      dataIndex: "project",
    },
    {
      title: "Responsable",
      dataIndex: "responsible",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Estado",
      dataIndex: "state",
      align: "center",
      render: (value) => {
        if (value === "pending") {
          return (
            <Tag icon={<ClockCircleOutlined />} color="default">
              Pendiente
            </Tag>
          );
        }
        if (value === "processing") {
          return (
            <Tag icon={<SyncOutlined spin />} color="processing">
              En Progreso
            </Tag>
          );
        }
        if (value === "completed") {
          return (
            <Tag icon={<CheckCircleOutlined />} color="success">
              Completado
            </Tag>
          );
        }
        if (value === "failed") {
          return (
            <Tag icon={<CloseCircleOutlined />} color="error">
              Fallido
            </Tag>
          );
        }
        return <Tag>{value}</Tag>;
      },
    },
    {
      title: "Acciones",
      dataIndex: "action",
      key: "action",
      width: 40,
      render: (_, item) => (
        <Actions
          route={generatePath(ApplicationRoutes.USER_STORIES_DETAIL, {
            id: item.id,
          })}
        />
      ),
    },
  ];

  const data = [
    {
      id: 1,
      project: "Proyecto 1",
      responsible: "Responsable 1",
      description: "Esta es una descripción",
      state: "pending",
    },
    {
      id: 2,
      project: "Proyecto 2",
      responsible: "Responsable 2",
      description: "Esta es una descripción",
      state: "processing",
    },
    {
      id: 3,
      project: "Proyecto 3",
      responsible: "Responsable 3",
      description: "Esta es una descripción",
      state: "completed",
    },
    {
      id: 4,
      project: "Proyecto 4",
      responsible: "Responsable 4",
      description: "Esta es una descripción",
      state: "failed",
    },
  ];

  return (
    <Module columns={columns} data={data} title={"Historias de Usuario"} />
  );
};
