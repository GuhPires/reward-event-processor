import Fastify from "fastify";
import { config } from "./config";
import { healthRoutes } from "./routes/health";
import { rulesRoutes } from "./routes/rules";

const app = Fastify({
  logger: config.env === "development",
});

app.register(healthRoutes, { prefix: "/health" });
app.register(rulesRoutes, { prefix: "/rules" });

try {
  await app.listen({ port: config.port });
  console.log(`Server running at http://localhost:${config.port}`);
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
