import * as fastify from "fastify";
import config from "config";
import * as authController from "../controllers";

const routes = async (app: fastify.FastifyInstance) => {
  app.route({
    method: "GET",
    url: "/api/auth/google",
    handler: authController.google,
  });
};

export default routes;
