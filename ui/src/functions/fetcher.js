import { getMock } from "./mocker";

export const fetch = (url, data, mocked) => {
  if (mocked) {
    return getMock(url, data);
  }
  try {
    return fetch();
  } catch (err) {
    console.error(err);
  }
};
