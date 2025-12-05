import { getEmployeeById, updateEmployee } from "../db/employees.js";
import { getAllRules } from "../db/rules.js";
import { Operators } from "../types/common.js";
import { Event } from "../types/event.js";
import { parseCondition } from "../utils/parser.js";

type Condition = { key: string; operator: Operators; value: any };

const processedEventIds: Array<Event["id"]> = [];

function evaluateCondition(event: Event, condition: Condition): boolean {
  if (!event.metadata) return false;

  const eventValue = event.metadata[condition.key];
  if (!eventValue) return false;

  switch (condition.operator) {
    case Operators.EQUALS:
      return eventValue === condition.value;
    case Operators.NOT_EQUALS:
      return eventValue !== condition.value;
    case Operators.LESS_THAN:
      return eventValue < condition.value;
    case Operators.LESS_OR_EQUAL:
      return eventValue <= condition.value;
    case Operators.GREATER_THAN:
      return eventValue > condition.value;
    case Operators.GREATER_OR_EQUAL:
      return eventValue >= condition.value;
  }
}

export function processEvent(event: Event): Event | undefined {
  // NOOP for already processed events
  if (processedEventIds.find((processed) => processed === event.id)) return;

  processedEventIds.push(event.id);

  const employee = getEmployeeById(event.employeeId);
  // TODO: get only active rules
  const rules = getAllRules();

  // TODO: return an useful error like "couldn't find employee/no rules" or something
  if (!rules.length || !employee) return;

  const awardedPoints = rules.reduce((prev, curr) => {
    if (event.type !== curr.eventType) return prev;

    const parsedCondition = parseCondition(curr.condition);
    // TODO: send custom error (should be validated in the rule creation as well)
    if (!parsedCondition) return prev;

    const shouldAwardPoints = evaluateCondition(event, parsedCondition);
    if (shouldAwardPoints) prev += curr.points;

    return prev;
  }, 0);

  const total = employee.pointBalance + awardedPoints;
  updateEmployee(employee.id, { pointBalance: total });

  return event;
}
