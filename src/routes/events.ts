import { FastifyInstance, FastifyRequest } from "fastify";
import { processEvent } from "../services/events";
import { IngestEventsSchema } from "../shemas/events";
import { Event } from "../types/event.js";

export async function eventsRoutes(app: FastifyInstance) {
  app.post("/", { schema: IngestEventsSchema }, async (req: FastifyRequest<{ Body: Event[] }>) => {
    const events = req.body;

    const processed = events.map((event) => processEvent(event)).filter(Boolean);

    return { ingested: processed.length, events: processed };
  });
}
