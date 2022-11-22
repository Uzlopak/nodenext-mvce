import { fastify as Fastify } from "fastify"

const fastify = Fastify({})

fastify.listen({ port: 0 })