import { authGet, authPost, authPatch, authDelete } from "apis/clientAxios";

export const getListNotificationApi = () => {
  const url = "/notification";
  return authGet(url);
};

export const createNotificationApi = (data) => {
  const url = "/notification";
  return authPost(url, data);
};

export const setReadedNotificationApi = (id) => {
  const url = `/notification/${id}`;
  return authPatch(url);
};

export const getTotalNotReaddNotificationApi = () => {
  const url = `/notification/total-no-read`;
  return authGet(url);
};

export const getListNotificationNotReadApi = () => {
  const url = "/notification/no-read";
  return authGet(url);
};

export const deleteNotificationApi = (id) => {
  const url = "/notification/" + id;
  return authDelete(url);
};
