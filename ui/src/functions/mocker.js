import { mockStatus } from "../mock/server-status";
import { mockFunctions } from "../mock/functions";

const urlMapper = {
  "/api/server/status": mockStatus,
  "/api/functions": mockFunctions
};

export const getMock = url => urlMapper[url];
