const supertest = require("supertest");
const createApp = require("./09-test-driven-http-response.js");
const app = createApp();
const request = supertest(app);

test("GET /", async () => {
  const response = await request
    .get("/")
    .expect(200)
    .expect("Content-Type", "text/Html");

  expect(response.text).toEqual("<h1>Test</h1>");
});
