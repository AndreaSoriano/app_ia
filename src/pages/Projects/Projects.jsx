import React from "react";
import { Tag } from "antd";
import { Actions } from "../../components/Actions";
import { Module } from "../../components/Module";
import { generatePath } from "react-router";
import ApplicationRoutes from "../../router/routes";

export const Projects = () => {
  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
    },
    {
      title: "Descripción",
      dataIndex: "description",
    },
    {
      title: "Fecha de Inicio",
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
          route={generatePath(ApplicationRoutes.PROJECTS_DETAIL, {
            id: item.id,
          })}
        />
      ),
    },
  ];

  const data = [
    {
      id: 1,
      name: "John Brown",
      description: "Esta es una descripción",
      start_date: "2025-05-24",
      state: true,
    },
    {
      id: 2,
      name: "Jim Green",
      description: "Esta es una descripción",
      start_date: "2025-05-24",
      state: false,
    },
  ];

  return <Module columns={columns} data={data} title={"Proyectos"} />;
};
