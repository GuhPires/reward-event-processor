export enum EventType {
  CLOCK_IN = "clock_in",
  CLOCK_OUT = "clock_out",
  NOTE_ADDED = "note_added",
}

export interface Event {
  id: string;
  employeeId: string;
  type: EventType;
  // ISO 8601 string (e.g. "2025-12-04T21:30:00.000Z")
  timestamp: string;
  metadata?: Record<string, unknown>;
}
