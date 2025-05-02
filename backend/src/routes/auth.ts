import { auth } from "auth/index.js";
import { prisma } from "db/client.js";
import { Hono } from "hono";

const authRouter = new Hono();

authRouter.get("/login", async (c) => {
  try {
    const res = await auth.api.signInSocial({
      body: {
        provider: "discord",
        callbackURL: "http://localhost:3001/api/auth/callback/discord",
      },
    });

    if (res.redirect && typeof res.redirect === "string") {
      return c.redirect(res.redirect);
    }

    return c.json(
      {
        message: "Marche pas !",
      },
      400
    );
  } catch (err) {
    console.error("Error :", err);
    return c.json({ err: "Erreur de connexion" }, 500);
  }
});

authRouter.get("/callback/discord", async (c) => {
  try {
    const session = await auth.api.getSession({
      headers: c.req.raw.headers,
    });

    if (!session?.user) {
      return c.json({ err: "Utilisateur non authtifié" }, 400);
    }

    const discordUser = session.user;

    const user = await prisma.user.findUnique({
      where: {
        discordId: discordUser.id,
      },
    });
    return c.json({
      message: "Connexion avec succès !",
      data: user,
    });
  } catch (err) {
    console.error("Error :", err);
    return c.json({ err: "Erreur de connexion" }, 500);
  }
});

authRouter.get("/logout", async (c) => {
  try {
    const res = await auth.api.signOut({
      request: c.req.raw,
      headers: c.req.raw.headers,
    });

    return c.json({
      message: "Déconnexion réussie !",
      data: res,
    });
  } catch (err) {
    console.error("Error :", err);
    return c.json({ err: "Erreur lors de la déconnexion" }, 500);
  }
});

export default authRouter;
