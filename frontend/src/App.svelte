<script lang="ts">
  import Layout from "./layout/layout.svelte";
  import Router from "svelte-spa-router";
  import { routes } from "./routes/routes";
  import Header from "./components/Header.svelte";
</script>

<Layout>
  <Header />
  <main>
    <Router {routes} />
  </main>
</Layout>
