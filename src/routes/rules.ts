import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { createRule, getAllRules, getRuleById, updateRule } from "../db/rules";
import { CreateRuleSchema, ListRuleSchema, ListRulesSchema, UpdateRuleSchema } from "../shemas/rules";
import { Rule } from "../types/rule";

// TODO: add some type of service layer if necessary
export async function rulesRoutes(app: FastifyInstance) {
  app.get("/", { schema: ListRulesSchema }, async () => {
    return getAllRules();
  });

  app.get(
    "/:id",
    { schema: ListRuleSchema },
    async (req: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
      const { id } = req.params;
      const rule = getRuleById(id);
      console.log("RULE:", rule);

      return rule ?? reply.code(404).send({ error: "Rule not found" });
    }
  );

  app.post("/", { schema: CreateRuleSchema }, async (req: FastifyRequest<{ Body: Rule }>) => {
    const rule = req.body;

    return createRule(rule);
  });

  app.put(
    "/:id",
    { schema: UpdateRuleSchema },
    async (req: FastifyRequest<{ Params: { id: string }; Body: Partial<Rule> }>, reply: FastifyReply) => {
      const { id } = req.params;
      const data = req.body;

      return updateRule(id, data) ?? reply.code(404).send({ error: "Rule not found" });
    }
  );
}
