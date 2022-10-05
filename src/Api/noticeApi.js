import baseUrl from "./baseUrl";

export const getAlbumList = async () => {
  const res = await baseUrl.get(`/albumList`);
  return res;
};

export default {
  getAlbumList: () => getAlbumList(),
};
