<script lang="ts">
  import NotConnected from "../components/Not-connected.svelte";
  import { user } from "../lib/auth-client";
</script>

{#if user}
  <section>
    <img src={$user?.image} alt="" />
    <h1 class="text-white">{$user?.name}</h1>
    <h3 class="text-white">{$user?.email}</h3>
    <h2 class="text-white">Coucou</h2>
  </section>
{:else}
  <NotConnected />
{/if}
