/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import { rest } from "msw";
import { albumData, programData } from "./noticeData";
import { medicalData, proData } from "./medicalData";

export const handlers = [
  rest.get("/albumList", (req, res, ctx) =>
    res(ctx.status(200), ctx.json(albumData)),
  ),

  rest.post("/albumList", (req, res, ctx) => {
    albumData.push(req.json());
    return res(ctx.status(201));
  }),

  rest.get("/serviceList", (req, res, ctx) =>
    res(ctx.status(200), ctx.json(medicalData)),
  ),

  rest.post("/serviceList", (req, res, ctx) => {
    medicalData.push(req.json());
    return res(ctx.status(201));
  }),

  rest.get("/programList", (req, res, ctx) =>
    res(ctx.status(200), ctx.json(programData)),
  ),

  rest.post("/programList", (req, res, ctx) => {
    programData.push(req.json());
    return res(ctx.status(201));
  }),

  rest.get("/proDataList", (req, res, ctx) =>
    res(ctx.status(200), ctx.json(proData)),
  ),

  rest.post("/proDataList", (req, res, ctx) => {
    proData.push(req.json());
    return res(ctx.status(201));
  }),
];
