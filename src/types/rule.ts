export interface Rule {
  id: string;
  name: string;
  eventType: string;
  points: number;
  condition?: Record<string, unknown>;
}
