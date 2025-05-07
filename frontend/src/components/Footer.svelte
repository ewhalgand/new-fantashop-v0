<script lang="ts">
  import styleFooter1 from "../assets/style-footer.png";
  import styleFooter2 from "../assets/style-footer2.png";
</script>

<footer class="relative md:overflow-hidden">
  <img
    class="hidden md:block md:absolute md:top-[-20px] md:z-[-2] md:w-34 md:left-0"
    src={styleFooter1}
    alt="décoration pointillé"
  />
  <div
    class="flex flex-col items-center p-4 mt-20 max-w-[1400px] m-auto md:py-8 px-36 md:items-start"
  >
    <h2
      class="text-white text-2xl font-black mb-8 relative after:content[''] after:h-1 after:w-12 after:bg-purple-light after:absolute after:left-0 after:bottom-0"
    >
      FantaShop
    </h2>
    <div
      class="flex flex-col items-center gap-10 w-full md:flex-row md:justify-between"
    >
      <div class="flex flex-col text-center gap-1 font-bold md:text-start">
        <h3 class="text-gray mb-3 uppercase">Pages</h3>
        <a class="text-white hover:underline text-sm" href="/">Home</a>
        <a class="text-white hover:underline text-sm" href="#/">Boutique</a>
      </div>
      <div class="flex flex-col text-center gap-1 font-bold">
        <h3 class="text-gray mb-3 uppercase">Credit</h3>
        <a class="text-white hover:underline text-sm" href="https://ewha.fr"
          >Ewen</a
        >
      </div>
      <div class="flex flex-col text-center gap-1 font-bold md:text-end">
        <h3 class="text-gray mb-3 uppercase">Reseaux</h3>
        <p class="text-white hover:underline text-sm">Discord</p>
        <p class="text-white hover:underline text-sm">Instagram</p>
        <p class="text-white hover:underline text-sm">X</p>
      </div>
    </div>
  </div>
  <img
    class="hidden md:block md:absolute md:w-34 md:top-26 md:z-[-2] md:right-4"
    src={styleFooter2}
    alt="décoration triangle"
  />
</footer>
