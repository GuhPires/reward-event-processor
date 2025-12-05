import { Operators } from "../types/common";

const CONDITION_REGEX = /^metadata\.([\w.]+)\s*(==|!=|!==|<=|>=|<|>)\s*(\w+)$/;

export function parseCondition(condition: string) {
  const match = condition.match(CONDITION_REGEX);

  if (!match) return null;

  const [, key, operator, rawValue] = match;

  // TODO: create a helper function like `isValidOperator`
  if (!Object.values(Operators).includes(operator as Operators)) return null;

  let value: any;
  if (rawValue === "true") value = true;
  else if (rawValue === "false") value = false;
  else if (rawValue === "null") value = null;
  else if (!isNaN(Number(rawValue))) value = Number(rawValue);
  else value = rawValue;

  return { key, operator: operator as Operators, value };
}
