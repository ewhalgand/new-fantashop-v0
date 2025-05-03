<script lang="ts">
  import Profile from "../components/profile.svelte";
  import { login, logout } from "../lib/auth-client";

  const handleClick = () => {
    login();
  };

  const handleLogout = () => {
    logout();
  };
</script>

<div>
  <h1>Coucou c'est moi</h1>
  <button on:click={handleClick}>Login</button>
  <button on:click={handleLogout}>Logout</button>
  <Profile />
</div>
