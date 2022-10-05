import test from "node:test";
import supertest from "supertest";
import { app } from "./13-app";
import {expect} from '@jest/globals';

const req = supertest(app)

test("GET /percorso", async() => {
  const res = await req
    .get("/percorso")
    .expect(200)
    .expect("Content-Type", /application\/json/);
  expect(res.body).toEqual([
    {"Test": "test completo"}
  ])
})
