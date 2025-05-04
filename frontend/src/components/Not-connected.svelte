<script lang="ts">
  import { login } from "../lib/auth-client";
</script>

<section>
  <h1 class="text-white mb-11">
    Vous devez vous connectez pour accèder a cette page !
  </h1>
  <button class="text-white" on:click={login}> Se Connecter </button>
</section>
