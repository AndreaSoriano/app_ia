import React from "react";
import ApplicationRoutes from "../../router/routes";
import { generatePath } from "react-router";
import { Actions } from "../../components/Actions";
import { Module } from "../../components/Module";

export const Machines = () => {
  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
    },
    {
      title: "Ubicación",
      dataIndex: "location",
    },
    {
      title: "Tipo",
      dataIndex: "type",
    },
    {
      title: "Acciones",
      dataIndex: "action",
      width: 40,
      render: (_, item) => (
        <Actions
          route={generatePath(ApplicationRoutes.MACHINES_DETAIL, {
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
      location: "Esta es una ubicación",
      type: "físico",
    },
    {
      id: 2,
      name: "Jim Green",
      location: "Esta es una ubicación",
      type: "virtual",
    },
  ];

  return <Module columns={columns} data={data} title={"Máquinas"} />;
};
