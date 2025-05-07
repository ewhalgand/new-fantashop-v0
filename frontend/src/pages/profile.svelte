<script lang="ts">
  import NotConnected from "../components/Not-connected.svelte";
  import { logout, user } from "../lib/auth-client";

  const formatDate = () => {
    if (!$user?.createdAt) {
      return 0;
    }

    const date = new Date().getDate();
    const dateFirstLogin: number | undefined = $user?.createdAt.getDate();
    const newDateSinceFirstLogin = date - dateFirstLogin!;

    return newDateSinceFirstLogin;
  };

  let dateSinceFirstLogin = formatDate();
</script>

{#if $user}
  <section
    class="flex flex-col items-center gap-14 mt-20 mb-34 p-4 max-w-[1400px] m-auto md:gap-0 md:flex-row md:items-start md:justify-around md:mt-36"
  >
    <div class="flex flex-col items-center gap-9 md:gap-11 md:items-start">
      <h1
        class="text-white text-5xl font-black underline decoration-purple-light md:text-[5.2rem]"
      >
        Profil
      </h1>
      <p
        class="text-gray text-center text-lg w-90 md:w-[450px] sm:text-2xl md:text-3xl md:text-left"
      >
        Informations à propos de vous
      </p>
      <a
        href="/"
        class="text-white border-2 border-white py-1 px-3 rounded-bl-2xl rounded-tr-2xl hover:rounded-br-2xl hover:rounded-tl-2xl hover:rounded-bl-none hover:rounded-tr-none hover:transition-all duration-300 ease-in-out"
      >
        Retourner à l'acceuil
      </a>
    </div>
    <div class="flex flex-col items-center gap-4 md:items-start">
      <div class="flex items-center gap-4">
        <img
          src={$user.image}
          alt="avatar utilisateur"
          class="rounded-full outline-1 outline-white border-2 border-[#04090e] w-14"
        />
        <p class="text-white font-semibold">{$user.name}</p>
      </div>
      <p class="text-white font-semibold text-center">
        Première connexion il y a : <span class="text-purple-dark"
          >{dateSinceFirstLogin} jour(s)</span
        >
      </p>
      <button
        class="text-white border-2 border-white py-1 px-3 rounded-bl-2xl rounded-tr-2xl hover:rounded-br-2xl hover:rounded-tl-2xl hover:rounded-bl-none hover:rounded-tr-none hover:transition-all duration-300 ease-in-out cursor-pointer md:w-full"
        on:click={logout}>Se Déconnecter</button
      >
    </div>
  </section>
{:else}
  <NotConnected />
{/if}
