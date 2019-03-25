import { mockStatus } from "../mock/server-status";
import { mockFunctions } from "../mock/functions";

const urlMapper = {
  "/api/server/status": mockStatus,
  "/api/functions": mockFunctions,
  "/api/functions/up": mockFunctions,
  "/api/functions/down": mockFunctions
};

export const getMock = url => urlMapper[url];
export const executeOnMock = (url, func) => func(urlMapper[url]);
