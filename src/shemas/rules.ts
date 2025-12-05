export const RuleBase = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
    eventType: { type: "string" },
    points: { type: "number" },
    condition: { type: "string" },
  },
};

export const ListRulesSchema = {
  response: {
    200: {
      type: "array",
      items: RuleBase,
    },
  },
};

export const ListRuleSchema = {
  params: {
    type: "object",
    required: ["id"],
    properties: {
      id: { type: "string" },
    },
  },
  response: {
    200: RuleBase,
    404: {
      type: "object",
      properties: {
        error: { type: "string" },
        message: { type: "string", nullable: true },
      },
    },
  },
};

export const CreateRuleSchema = {
  body: { ...RuleBase, required: ["name", "points", "eventType", "condition"] },
  response: {
    201: RuleBase,
  },
};

export const UpdateRuleSchema = {
  params: {
    type: "object",
    required: ["id"],
    properties: {
      id: { type: "string" },
    },
  },
  body: RuleBase,
  response: {
    200: RuleBase,
  },
};
