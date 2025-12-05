import { randomUUID } from "crypto";
import { Rule } from "../types/rule";

const rules: Rule[] = [];

export function getAllRules(): Rule[] {
  return rules;
}

export function getRuleById(id: string): Rule | undefined {
  return rules.find((rule) => rule.id === id);
}

export function createRule(rule: Omit<Rule, "id">): Rule {
  // TODO: add schema validation
  const created = { id: randomUUID(), ...rule };
  rules.push(created);

  return created;
}

export function updateRule(id: string, data: Partial<Rule>): Rule | undefined {
  const rule = getRuleById(id);
  if (!rule) return;
  // TODO: add schema validation

  return { ...rule, ...data };
}
