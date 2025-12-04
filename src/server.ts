import Fastify from "fastify";
import { config } from "./config";

const app = Fastify({
  logger: config.env === "development",
});

app.get("/health", async () => ({ status: "ok" }));

try {
  await app.listen({ port: config.port });
  console.log("Server running at http://localhost:3000");
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
