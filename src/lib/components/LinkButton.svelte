<script lang="ts">
  import type { HubLink } from "$lib/interfaces";
  import { fly } from "svelte/transition";

  export let link: HubLink;
  export let index: number;
  export let curIndex: number;
</script>

<a
  href={link.url}
  class={curIndex == index ? "active" : ""}
  in:fly={{ y: 50, duration: 400, delay: 100 * index }}
  on:mouseenter={() => curIndex = index}
>
  <img src={link.img} alt={link.label} />
  <div class="label">{link.label}</div>
</a>

<style>
  a {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    background-color: var(--back-2);
    padding: 1rem;
    border-radius: 1rem;
    transition: filter 0.3s, transform 0.3s;
  }

  a:hover,
  a.active {
    filter: brightness(1.3);
    transform: scale(1.2);
  }

  img {
    display: block;
    width: 100%;
    object-fit: scale-down;
  }

  .label {
    font-size: 1.1rem;
    padding: 1rem 0.5rem;
    padding-bottom: 0;
    text-align: center;
  }
</style>
