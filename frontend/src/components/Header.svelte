<script lang="ts">
  import logoImg from "../assets/logo-fs.svg";
  import cartIcon from "../assets/icons/cart-outline.svg";
  import { link } from "svelte-spa-router";
  import { login, user } from "../lib/auth-client";

  let open = false;
</script>

<header class="bg-[#04090e]">
  <nav
    class="relative flex items-center justify-between h-20 px-4 md:px-8 md:grid md:grid-cols-3"
  >
    <div class="flex items-center">
      <img src={logoImg} alt="Logo Fantashop" class="w-15 md:w-20" />
    </div>

    <div class="hidden md:flex justify-center gap-6">
      <a
        class="text-gray relative after:content-[''] after:h-1 after:w-0 after:absolute after:bg-purple-light after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-500 hover:after:transition-all hover:after:duration-300"
        href="#/">Recrutement</a
      >
      <a
        class="text-gray relative after:content-[''] after:h-1 after:w-0 after:absolute after:bg-purple-light after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-500 hover:after:transition-all hover:after:duration-300"
        href="#/">News</a
      >
    </div>

    <div class="hidden md:flex items-center justify-end gap-4">
      <a
        href="#/"
        class="flex items-center gap-2 text-white bg-gradient-to-r from-purple-light to-purple-dark py-1 px-3 rounded-bl-2xl rounded-tr-2xl hover:rounded-br-2xl hover:rounded-tl-2xl hover:rounded-bl-none hover:rounded-tr-none hover:transition-all duration-300 ease-in-out"
      >
        <img src={cartIcon} alt="Panier" class="w-5 h-5" />
        <span class="font-semibold">Boutique</span>
      </a>

      {#if !user}
        <button class="text-white" on:click={login}> Se Connecter </button>
      {:else}
        <a href="/profil" class="text-white w-14" use:link>
          <img
            class="rounded-full outline-1 outline-white border-2 border-[#04090e]"
            src={$user?.image}
            alt="logo utilisateur"
          />
        </a>
      {/if}
    </div>

    <!-- RESPONSIVE -->

    <div class="flex items-center justify-end gap-4">
      <button
        class="md:hidden z-50"
        on:click={() => (open = !open)}
        aria-label="Toggle menu"
      >
        {#if !open}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M20 12H10m10-7H4m16 14H4"
            />
          </svg>
        {:else}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M19 5L5 19M5 5l14 14"
            />
          </svg>
        {/if}
      </button>
    </div>

    <ul
      class={`absolute top-full left-0 w-full bg-[#04090e] overflow-hidden flex flex-col items-center gap-6 transition-all duration-300 ease-in-out
      ${open ? "max-h-[350px] py-6" : "max-h-0"}
      md:hidden`}
    >
      <a
        class="text-gray relative after:content-[''] after:h-1 after:w-0 after:absolute after:bg-purple-light after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-500 hover:after:transition-all hover:after:duration-300"
        href="#/">Recrutement</a
      >
      <a
        class="text-gray relative after:content-[''] after:h-1 after:w-0 after:absolute after:bg-purple-light after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-500 hover:after:transition-all hover:after:duration-300"
        href="#/">News</a
      >

      <a
        href="#/"
        class="flex items-center gap-2 text-white bg-gradient-to-r from-purple-light to-purple-dark py-1 px-3 rounded-bl-2xl rounded-tr-2xl hover:rounded-br-2xl hover:rounded-tl-2xl hover:rounded-bl-none hover:rounded-tr-none hover:transition-all duration-300 ease-in-out"
      >
        <img src={cartIcon} alt="Panier" class="w-5 h-5" />
        <span class="font-semibold">Boutique</span>
      </a>

      {#if !user}
        <button class="text-white" on:click={login}> Se Connecter </button>
      {:else}
        <a href="/profil" class="text-white w-12" use:link>
          <img
            class="rounded-full outline-1 outline-white border-2 border-[#04090e]"
            src={$user?.image}
            alt="logo utilisateur"
          />
        </a>
      {/if}
    </ul>
  </nav>
</header>
