import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'
import { createBlogInput, updateBlogInput } from '@vectordeepanshu/blogdaily-common'

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string;
    }
}>();


blogRouter.use('/*', async (c, next) => {
    const jwt = c.req.header("authorization") || "";

    try {
        const user = await verify(jwt, c.env.JWT_SECRET);
        if (user) {
            c.set('userId', user.userId as string);
            await next();
        } else {
            c.status(403)
            return c.json({
                message: "You are not logged In."
            })
        }
    } catch (e) {
        c.status(403);
        return c.json({ error: "You are not logged In." });
    }


})

blogRouter.post('/', async (c) => {
    const userId = c.get('userId');
    const body = await c.req.json();
    const {success} = createBlogInput.safeParse(body);
      if (!success) {
        c.status(411)
        return c.json({
          error: "Invalid input"
        });
      }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    
    try {
        const blog = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: userId,
            },
        });

        return c.json(blog);
    } catch (e) {
        c.status(403);
        return c.json({ error: "Failed to create blog post" });
    }
});


blogRouter.put('/', async (c) => {
    const userId = c.get('userId');
    const body = await c.req.json();
    const {success} = updateBlogInput.safeParse(body);
      if (!success) {
        c.status(411)
        return c.json({
          error: "Invalid input"
        });
      }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    
    try {
        const blog = await prisma.post.update({
            where: {
                id: body.id,
                authorId: userId,
            },
            data: {
                title: body.title,
                content: body.content,
            },
        });

        return c.json(blog);
    } catch (e) {
        c.status(403);
        return c.json({ error: "Failed to update blog post" });
    }
});

blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const blogs = await prisma.post.findMany({
            select: {
                id: true,
                title: true,
                content: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        });

        return c.json({
            blogs
        });
    } catch (e) {
        c.status(403);
        return c.json({ error: "Failed to fetch blog posts" });
    }

});

blogRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const id = c.req.param("id");
    try {
        const blog = await prisma.post.findFirst({
            where: {
                id: id,
            },
            select: {
                title: true,
                content: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        });

        return c.json({ blog });
    } catch (e) {
        c.status(403);
        return c.json({ error: "Failed to fetch blog post" });
    }
});


