import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { getAllEmployees, getEmployeeById } from "../db/employees";
import { ListEmployeeSchema, ListEmployeesSchema } from "../shemas/employees";

// TODO: add some type of service layer if necessary
export async function employeesRoutes(app: FastifyInstance) {
  app.get("/", { schema: ListEmployeesSchema }, async () => {
    return getAllEmployees();
  });

  app.get(
    "/:id",
    { schema: ListEmployeeSchema },
    async (req: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
      const { id } = req.params;

      return getEmployeeById(id) ?? reply.code(404).send({ error: "Employee not found" });
    }
  );
}
