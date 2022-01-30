import { post } from "../common/remote";

export const createMeeting = (data) => {
  return post("/call/create/", data);
};
