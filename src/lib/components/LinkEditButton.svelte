<script lang="ts">
  import type { HubLink } from "$lib/interfaces";
  import Switch from "./Switch.svelte";

  export let link: HubLink;
  export let enabled: boolean;

</script>

<div class="card">
  <img src={link.img} alt={link.label} />
  <div class="label">{link.label}</div>
  <div><Switch bind:value={enabled}/></div>
</div>

<style>
  .card {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    background-color: var(--back-2);
    padding: 1rem;
    border-radius: 1rem;
    transition: filter 0.3s, transform 0.3s;
    gap: 1rem;
  }
  .label {
    flex-grow: 1;
  }
  img {
    display: block;
    height: 3rem;
    object-fit: scale-down;
  }
</style>