<script lang="ts">
  import cartIcon from "../assets/icons/cart-outline.svg";
  import item3D from "../assets/item3D.svg";
  import scrollDown from "../assets/icons/scroll_down.svg";
  import News from "../components/News.svelte";
  import { link } from "svelte-spa-router";
</script>

<section class="flex flex-col items-center gap-4 mt-20 p-4 md:mt-36">
  <div
    class="flex flex-col items-center gap-5 xl:flex-row xl:justify-center xl:items-start xl:gap-0"
  >
    <div class="flex flex-col items-center gap-9 md:gap-11 xl:items-start">
      <h1
        class="text-white text-5xl font-black underline decoration-purple-light md:text-[5.2rem]"
      >
        FantaShop
      </h1>
      <p
        class="text-gray text-center text-2xl w-90 md:w-[450px] md:text-3xl lg:text-left"
      >
        Le shop le plus innovant de paladium
      </p>
      <a
        href="/shop"
        class="flex items-center gap-2 text-white bg-gradient-to-r from-purple-light to-purple-dark py-1 px-3 rounded-bl-2xl rounded-tr-2xl hover:rounded-br-2xl hover:rounded-tl-2xl hover:rounded-bl-none hover:rounded-tr-none hover:transition-all duration-300 ease-in-out"
        use:link
      >
        <img src={cartIcon} alt="Panier" class="w-5 h-5" />
        <span class="font-semibold">Boutique</span>
      </a>
    </div>
    <img src={item3D} alt="bannière item 3d" width="830" />
  </div>
  <img src={scrollDown} alt="icon souris scroll" width="70" />
</section>
<News />
