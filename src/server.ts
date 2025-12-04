import Fastify from "fastify";
import { config } from "./config";
import { healthRoutes } from "./routes/health";

const app = Fastify({
  logger: config.env === "development",
});

app.register(healthRoutes, { prefix: "/health" });

try {
  await app.listen({ port: config.port });
  console.log(`Server running at http://localhost:${config.port}`);
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
