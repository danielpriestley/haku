import { Elysia } from "elysia";

const app = new Elysia();

app.get("/", () => "Hello Elysia");
app.get("/hello", () => "Hello from daniel");
app.get("/id/:id", ({ params: { id } }) => id);

app.listen(3000, () => {
  console.log(`🌸 Haku is running at http://localhost:${app.server?.port}`);
});
