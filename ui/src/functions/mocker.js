import { mockStatus } from "../mock/server-status";

const urlMapper = {
  "/server/status": mockStatus
};

export const getMock = url => urlMapper[url];
