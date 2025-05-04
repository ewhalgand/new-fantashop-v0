<script lang="ts">
  import Layout from "./layout/layout.svelte";
  import Router from "svelte-spa-router";
  import { routes } from "./routes/routes";
  import Header from "./components/Header.svelte";
  import { onMount } from "svelte";
  import { authLoading, initAuth } from "./lib/auth-client";
  import Loader from "./components/Loader.svelte";

  onMount(() => {
    initAuth();
  });
</script>

{#if $authLoading}
  <Loader />
{:else}
  <Layout>
    <Header />
    <Router {routes} />
  </Layout>
{/if}
