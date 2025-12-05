export const EmployeeBase = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
    pointBalance: { type: "number" },
  },
};

export const ListEmployeesSchema = {
  response: {
    200: {
      type: "array",
      items: EmployeeBase,
    },
  },
};

export const ListEmployeeSchema = {
  params: {
    type: "object",
    required: ["id"],
    properties: {
      id: { type: "string" },
    },
  },
  response: {
    200: EmployeeBase,
    404: {
      type: "object",
      properties: {
        error: { type: "string" },
        message: { type: "string", nullable: true },
      },
    },
  },
};
