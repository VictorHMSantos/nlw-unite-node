// tipagem estática - interessante ao codar e não interessante em execução

import fastify from "fastify";
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod'
import { createEvent } from "./routes/create-event";
import { registerForEvent } from "./routes/register-for-event";
import { getEvent } from "./routes/get-event";
import { getAttendeeBadeg } from "./routes/get-attendee-badge";
import { checkIn } from "./routes/check-in";

const app = fastify()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createEvent)
app.register(registerForEvent)
app.register(getEvent)
app.register(getAttendeeBadeg)
app.register(checkIn)

app.listen({ port: 3333}).then(() => {
    console.log('HTTP server running!'); 
})