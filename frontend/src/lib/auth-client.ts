import { createAuthClient } from "better-auth/svelte";

export const authClient = createAuthClient({
  baseURL: "http://localhost:3001/api/auth",
  fetchOptions: {
    credentials: "include",
  },
});

export const login = async () => {
  await authClient.signIn.social({
    provider: "discord",
    callbackURL: "http://localhost:5173",
  });
};

export const logout = async () => {
  await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        window.location.href = "/";
      },
    },
  });
};
