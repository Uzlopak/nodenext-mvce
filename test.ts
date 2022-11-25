import { fastify as Fastify } from "fastify"
import fastifyHelmet from "@fastify/helmet"

const fastify = Fastify({})

fastify.register(fastifyHelmet)
fastify.listen({ port: 0 })