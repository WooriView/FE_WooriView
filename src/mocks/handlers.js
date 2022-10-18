/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import { rest } from "msw";
import { albumData, programData } from "./noticeData";

export const handlers = [
  rest.get("/albumList", (req, res, ctx) =>
    res(ctx.status(200), ctx.json(albumData)),
  ),

  rest.post("/albumList", (req, res, ctx) => {
    albumData.push(req.json());
    return res(ctx.status(201));
  }),

  rest.get("/programList", (req, res, ctx) =>
    res(ctx.status(200), ctx.json(programData)),
  ),

  rest.post("/programList", (req, res, ctx) => {
    programData.push(req.json());
    return res(ctx.status(201));
  }),
];
