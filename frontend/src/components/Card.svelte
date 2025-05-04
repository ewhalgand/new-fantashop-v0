<script lang="ts">
  export let data;
</script>

<div class={`relative w-72 h-90 rounded-2xl overflow-hidden`}>
  <div
    class="absolute inset-0 bg-cover bg-center brightness-50"
    style="background-image: url({data.image})"
  ></div>

  <div class="relative z-10">
    <div
      class="px-4 py-2 text-center uppercase font-black text-xl text-white rounded-t-2xl"
      style="background-color: {data.css_properties.color}"
    >
      <h2>{data.title}</h2>
    </div>
    <p class="text-white p-4">{data.body}</p>
  </div>
</div>
