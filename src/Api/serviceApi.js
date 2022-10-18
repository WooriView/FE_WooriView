import baseUrl from "./baseUrl";

export const getServiceList = async () => {
  const res = await baseUrl.get(`/albumList`);
  return res;
};

export default {
  getServiceList: () => getServiceList(),
};
