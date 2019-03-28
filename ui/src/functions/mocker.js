import { mockStatus } from "../mock/server-status";
import { mockFunctions } from "../mock/functions";

const urlMapper = {
  "/api/server/status": mockStatus,
  "/api/functions": mockFunctions,
  "/api/functions/up": mockFunctions,
  "/api/functions/down": mockFunctions,
  "/api/addA2ADispatcher": mockFunctions
};

export const getMock = url =>
  Object.entries(urlMapper)
    .map(([key, value]) => (url.includes(key) ? value : {}))
    .reduce((previous, current) => {
      console.log("previous", previous);
      console.log("current", current);
      console.log("==================");
      if (Array.isArray(previous) || Object.entries(previous).length > 0)
        return previous;
      else if (Array.isArray(current) || Object.entries(current).length > 0)
        return current;
      else return {};
    });
export const executeOnMock = (url, func) => func(urlMapper[url]);
