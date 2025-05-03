<script lang="ts">
  import { onMount } from "svelte";
  import { authClient } from "../lib/auth-client";

  let user: any = null;

  onMount(async () => {
    const { data: session } = await authClient.getSession();

    if (session?.user) {
      user = session.user;
    }
  });
</script>

{#if user}
  <p>Bienvenue {user.name} !</p>
  <img src={user.image} alt="" />
{:else}
  <p>Non connecté.</p>
{/if}
