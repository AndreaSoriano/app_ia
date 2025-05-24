import React from "react";
import ApplicationRoutes from "../../router/routes";
import { Actions } from "../../components/Actions";
import { Module } from "../../components/Module";
import { generatePath } from "react-router";

export const Responsibles = () => {
  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
    },
    {
      title: "Correo",
      dataIndex: "email",
    },
    {
      title: "Acciones",
      dataIndex: "action",
      key: "action",
      width: 40,
      render: (_, item) => (
        <Actions
          route={generatePath(ApplicationRoutes.RESPONSIBLES_DETAIL, {
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
      email: "john@mail.com",
    },
    {
      id: 2,
      name: "Jim Green",
      email: "jim@mail.com",
    },
  ];

  return <Module columns={columns} data={data} title={"Responsables"} />;
};
