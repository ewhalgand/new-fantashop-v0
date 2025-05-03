<script lang="ts">
  import logoImg from "../assets/logo-fs.svg";
  import cartIcon from "../assets/icons/cart-outline.svg";
  import menuIcon from "../assets/icons/menu.svg";
  import { onMount } from "svelte";
  import { authClient, login, logout } from "../lib/auth-client";

  let user: any = null;
  let open = false;

  const handleLogin = () => {
    login();
  };

  onMount(async () => {
    const { data: session } = await authClient.getSession();

    if (session?.user) {
      user = session.user;
    }
  });

  const handleLogout = () => {
    logout();
  };
</script>

<header class="bg-[#04090e]">
  <nav
    class="relative flex items-center justify-between h-20 px-4 md:px-8 md:grid md:grid-cols-3"
  >
    <div class="flex items-center">
      <img src={logoImg} alt="Logo Fantashop" class="w-20" />
    </div>

    <div class="hidden md:flex justify-center gap-6">
      <a class="text-gray" href="#/">Recrutement</a>
      <a class="text-gray" href="#/">News</a>
    </div>

    <div class="hidden md:flex items-center justify-end gap-4">
      <a
        href="#/"
        class="flex items-center gap-2 text-white bg-gradient-to-r from-purple-light to-purple-dark p-2 rounded-bl-2xl rounded-tr-2xl"
      >
        <img src={cartIcon} alt="Panier" class="w-5 h-5" />
        <span>Boutique</span>
      </a>

      {#if !user}
        <button class="text-white" on:click={handleLogin}>
          Se Connecter
        </button>
      {:else}
        <a href="#/" class="text-white w-14">
          <img
            class="rounded-full outline-1 outline-white border-2 border-[#04090e]"
            src={user.image}
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
      <a class="text-gray" href="#/">Recrutement</a>
      <a class="text-gray" href="#/">News</a>

      <a href="#/" class="flex items-center gap-2 text-white">
        <img src={cartIcon} alt="Panier" class="w-5 h-5" />
        <span>Boutique</span>
      </a>

      {#if !user}
        <button class="text-white" on:click={handleLogin}>
          Se Connecter
        </button>
      {:else}
        <a href="#/" class="text-white w-12">
          <img
            class="rounded-full outline-1 outline-white border-2 border-[#04090e]"
            src={user.image}
            alt="logo utilisateur"
          />
        </a>
      {/if}
    </ul>
  </nav>
</header>
