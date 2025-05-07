<script lang="ts">
  import Card from "./Card.svelte";
  import bgNews1 from "../assets/bg-news1.png";
  import bgNews2 from "../assets/bg-news2.png";
  import bgNews3 from "../assets/bg-news3.png";
  import skinShop from "../assets/skin-shop.png";

  const dataCards = [
    {
      "title": "Version 0",
      "body":
        "Une nouvelle version est arrivée sur le FantaShop c’est la V4.5, une version qui ajoute un nouveau site, un nouveau support et la mise à jour de nombreux systèmes. On espère que cette version va vous plaire, et pour tout problème n’hésitez pas à solliciter la modération.",
      "image": bgNews1,
      "css_properties": {
        "color": "rgb(120, 72, 255, 0.75)",
      },
    },
    {
      "title": "Site web",
      "body":
        "Comme vous le voyez un nouveau site web a fait son apparition, un site web complet avec un système de commande relié à discord. Ce site a été développé par Ewen.",
      "image": bgNews2,
      "css_properties": {
        "color": "rgb(255, 112, 112, 0.75)",
      },
    },
    {
      "title": "Commande",
      "body":
        "Sur le site, vous avez accès à la boutique qui vous permettra de commander le ou les items/grades de votre choix, puis les récupérer en jeu grâce à nos vendeurs.",
      "image": bgNews3,
      "css_properties": {
        "color": "rgb(197, 72, 255, 0.75)",
      },
    },
  ];
</script>

<section
  id="news"
  class="relative flex flex-col items-center max-w-[1600px] m-auto gap-4 mt-20 p-4 md:mt-36 lg:overflow-hidden"
>
  <h1
    class="text-white text-5xl font-black underline decoration-purple-light md:text-[5.2rem]"
  >
    Nouveautés
  </h1>
  <div
    class="flex flex-col flex-wrap gap-10 mt-15 md:mt-30 md:justify-center md:flex-row md:gap-20 lg:mt-36"
  >
    {#each dataCards as data}
      <Card {data} />
    {/each}
  </div>
  <img
    class="hidden lg:block lg:absolute lg:right-[-250px] lg:bottom-[-90px] lg:z-[-2] lg:w-[570px]"
    src={skinShop}
    alt="skin boutique"
  />
</section>
