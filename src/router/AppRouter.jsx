import React from "react";
import { Route, Routes } from "react-router";
import ApplicationRoutes from "./routes";
import { NotFound } from "../pages/NotFound";
import { Dashboard } from "../pages/Dashboard";
import { Projects } from "../pages/Projects";
import { Machines } from "../pages/Machines";
import { Deployments } from "../pages/Deployments";
import { UserStories } from "../pages/UserStories";
import { Responsibles } from "../pages/Responsibles";
import { Reports } from "../pages/Reports";
import { Logs } from "../pages/Logs";
import { ProjectDetail } from "../pages/Projects/ProjectDetail";
import { MachineDetail } from "../pages/Machines/MachineDetail";
import { DeploymentDetail } from "../pages/Deployments/DeploymentDetail";
import { UserStoryDetail } from "../pages/UserStories/UserStoryDetail";
import { ResponsibleDetail } from "../pages/Responsibles/ResponsibleDetail";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path={ApplicationRoutes.ROOT} element={<Dashboard />} />
      <Route path={ApplicationRoutes.PROJECTS} element={<Projects />} />
      <Route
        path={ApplicationRoutes.PROJECTS_DETAIL}
        element={<ProjectDetail />}
      />
      <Route path={ApplicationRoutes.MACHINES} element={<Machines />} />
      <Route
        path={ApplicationRoutes.MACHINES_DETAIL}
        element={<MachineDetail />}
      />
      <Route path={ApplicationRoutes.DEPLOYMENTS} element={<Deployments />} />
      <Route
        path={ApplicationRoutes.DEPLOYMENTS_DETAIL}
        element={<DeploymentDetail />}
      />
      <Route path={ApplicationRoutes.USER_STORIES} element={<UserStories />} />
      <Route
        path={ApplicationRoutes.USER_STORIES_DETAIL}
        element={<UserStoryDetail />}
      />
      <Route path={ApplicationRoutes.RESPONSIBLES} element={<Responsibles />} />
      <Route
        path={ApplicationRoutes.RESPONSIBLES_DETAIL}
        element={<ResponsibleDetail />}
      />
      <Route path={ApplicationRoutes.REPORTS} element={<Reports />} />
      <Route path={ApplicationRoutes.LOGS} element={<Logs />} />
    </Routes>
  );
};
