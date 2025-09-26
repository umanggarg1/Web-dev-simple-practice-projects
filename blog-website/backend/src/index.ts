import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from 'hono'
import { sign } from "hono/jwt";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string,
  }
}>();

// const prisma = new PrismaClient().$extends(withAccelerate())

app.get('/', (c) => {
  

  return c.text('Hello Hono!')
})

app.post('/api/v1/user/signup', async (c) => {
  const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

  const body = await c.req.json();
  const { email, password } = body;

  if (!email || !password) {
    c.status(400);
    return c.json({ error: "Email and password are required" });
  }
  console.log(body);

  try {
    const user = await prisma.user.create({
      data: { email, password }, // TODO: hash password before storing
    });

    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ jwt });
  } catch (e) {
    console.error("Signup error:", e);
    c.status(403);
    return c.json({ error: "Error while signing up" });
  }
})

app.post('/api/v1/user/signin', (c) => {
return c.text('Signin route' )
})

export default app;
