import baseUrl from "./baseUrl";

export const getServiceList = async () => {
  const res = await baseUrl.get(`/serviceList`);
  return res;
};

export default {
  getServiceList: () => getServiceList(),
};
