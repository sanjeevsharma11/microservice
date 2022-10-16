import * as fastify from "fastify";

/**
 * @swagger
 * /api/auth/google:
 *  get:
 *   tags:
 *   - auth
 *  summary: This is used to login with google
 * description: This is used to login with google
 * responses:
 *  200:
 *   description: Success
 * 400:
 *  description: Bad Request
 * 500:
 * description: Internal Server Error
 * */

export const google = async (
  req: fastify.FastifyRequest,
  res: fastify.FastifyReply
) => {
  try {
    res.send("google");
  } catch (error) {
    res.send(error);
  }
};
