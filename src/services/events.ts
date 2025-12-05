import { Event } from "../types/event.js";

const processedEventIds: Array<Event["id"]> = [];

export function processEvent(event: Event): Event | undefined {
  // TODO: add validation
  // NOOP for already processed events
  if (processedEventIds.find((processed) => processed === event.id)) return;

  processedEventIds.push(event.id);

  // TODO: process rules and deal with points
  return event;
}
