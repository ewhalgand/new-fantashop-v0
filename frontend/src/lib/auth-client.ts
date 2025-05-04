import { createAuthClient } from "better-auth/svelte";
import { writable } from "svelte/store";

interface userData {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  image?: string | null | undefined;
}

export const authClient = createAuthClient({
  baseURL: "http://localhost:3001/api/auth",
  fetchOptions: {
    credentials: "include",
  },
});

export const user = writable<userData | null>(null);
export const authLoading = writable(true);

export const initAuth = async () => {
  const { data: session } = await authClient.getSession();

  if (session?.user) {
    user.set(session.user);
  }

  authLoading.set(false);
};

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
