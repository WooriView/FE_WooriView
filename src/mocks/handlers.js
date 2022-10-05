/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import { rest } from "msw";

const album = [
  {
    id: 1,
    title: "제목입니다",
    imgUrl: "https://cdn.pixabay.com/photo/2022/09/21/05/39/birds-7469509_960_720.jpg",
    date: "2020.09.20",
    views: 100,
  },
  {
    id: 2,
    title: "제목입니다2",
    imgUrl: "https://cdn.pixabay.com/photo/2022/09/21/05/39/birds-7469509_960_720.jpg",
    date: "2020.09.22",
    views: 200,
  },
  {
    id: 3,
    title: "제목입니다3",
    imgUrl: "https://cdn.pixabay.com/photo/2022/09/21/05/39/birds-7469509_960_720.jpg",
    date: "2020.09.23",
    views: 300,
  },
  {
    id: 4,
    title: "제목입니다",
    imgUrl: "https://cdn.pixabay.com/photo/2022/09/21/05/39/birds-7469509_960_720.jpg",
    date: "2020.09.20",
    views: 100,
  },
  {
    id: 5,
    title: "제목입니다2",
    imgUrl: "https://cdn.pixabay.com/photo/2022/09/21/05/39/birds-7469509_960_720.jpg",
    date: "2020.09.22",
    views: 200,
  },
  {
    id: 6,
    title: "제목입니다3",
    imgUrl: "https://cdn.pixabay.com/photo/2022/09/21/05/39/birds-7469509_960_720.jpg",
    date: "2020.09.23",
    views: 300,
  },
  {
    id: 7,
    title: "제목입니다",
    imgUrl: "https://cdn.pixabay.com/photo/2022/09/21/05/39/birds-7469509_960_720.jpg",
    date: "2020.09.20",
    views: 100,
  },
  {
    id: 8,
    title: "제목입니다2",
    imgUrl: "https://cdn.pixabay.com/photo/2022/09/21/05/39/birds-7469509_960_720.jpg",
    date: "2020.09.22",
    views: 200,
  },
  {
    id: 9,
    title: "제목입니다3",
    imgUrl: "https://cdn.pixabay.com/photo/2022/09/21/05/39/birds-7469509_960_720.jpg",
    date: "2020.09.23",
    views: 300,
  },
];

export const handlers = [
  // 할일 목록
  rest.get("/albumList", (req, res, ctx) => res(ctx.status(200), ctx.json(album))),

  // 할일 추가
  rest.post("/albumList", (req, res, ctx) => {
    album.push(req.json());
    return res(ctx.status(201));
  }),
];
