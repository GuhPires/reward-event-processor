import { EventType } from "../types/event";

export const EventBase = {
  type: "object",
  properties: {
    id: { type: "string" },
    employeeId: { type: "string" },
    type: {
      type: "string",
      enum: Object.values(EventType),
    },
    timestamp: { type: "string", format: "date-time" },
    metadata: { type: "object", nullable: true },
  },
};

export const IngestEventsSchema = {
  body: {
    type: "array",
    items: { ...EventBase, required: ["id", "employeeId", "type", "timestamp"] },
  },
  response: {
    200: {
      type: "object",
      properties: {
        ingested: { type: "number" },
        events: { type: "array", items: EventBase },
      },
    },
  },
};
