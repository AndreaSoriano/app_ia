import React from "react";
import ApplicationRoutes from "../../router/routes";
import { Actions } from "../../components/Actions";
import { Module } from "../../components/Module";
import { generatePath } from "react-router";
import { Tag } from "antd";

export const Deployments = () => {
  const columns = [
    {
      title: "Proyecto",
      dataIndex: "project",
    },
    {
      title: "Máquina",
      dataIndex: "machine",
    },
    {
      title: "Fecha de Despliegue",
      dataIndex: "start_date",
    },
    {
      title: "Estado",
      dataIndex: "state",
      align: "center",
      render: (value) => (
        <Tag color={value ? "success" : "error"}>
          {value ? "Activo" : "Inactivo"}
        </Tag>
      ),
    },
    {
      title: "Acciones",
      dataIndex: "action",
      key: "action",
      width: 40,
      render: (_, item) => (
        <Actions
          route={generatePath(ApplicationRoutes.DEPLOYMENTS_DETAIL, {
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
      machine: "Máquina 1",
      start_date: "2025-05-24",
      state: true,
    },
    {
      id: 2,
      project: "Proyecto 2",
      machine: "Máquina 2",
      start_date: "2025-05-24",
      state: false,
    },
  ];

  return <Module columns={columns} data={data} title={"Despliegues"} />;
};
