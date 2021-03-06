import { authGet, authPatch, authPost } from "./clientAxios";

export const getRoomsApi = (stringParams) => {
  const url = `/room?${stringParams}`;
  return authGet(url, stringParams);
};

export const createRoomApi = (data) => {
  const url = `/room`;
  return authPost(url, data);
};

export const getDetailRoomApi = (id) => {
  const url = `/room/${id}`;
  return authGet(url);
};

export const updateRoomApi = ({ id, data }) => {
  const url = "/room/" + id;
  return authPatch(url, data);
};
