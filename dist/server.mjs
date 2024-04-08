import {
  registerForEvent
} from "./chunk-UEXXD2CF.mjs";
import {
  errorHandler
} from "./chunk-SQ2P6VAE.mjs";
import {
  checkIn
} from "./chunk-TA2CJ7HG.mjs";
import {
  createEvent
} from "./chunk-ACOHB7D4.mjs";
import "./chunk-VG36N3UV.mjs";
import {
  getAttendeeBadeg
} from "./chunk-NF4DQZXN.mjs";
import {
  getEventAttendees
} from "./chunk-DIHKMGHT.mjs";
import {
  getEvent
} from "./chunk-X3IIASNQ.mjs";
import "./chunk-5QBEOMCR.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod";
import fastifyCors from "@fastify/cors";
var app = fastify();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "Especifica\xE7\xF5es da API para o back-end da aplica\xE7\xE3o pass.in construida durante o NLW Unite da Rocketseat.",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadeg);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running!");
});
export {
  app
};
