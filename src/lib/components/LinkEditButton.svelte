<script lang="ts">
  import type { HubLink } from "$lib/interfaces";
  import Switch from "./Switch.svelte";
  import {clickOutside} from '$lib/events/clickOutside.js';

  export let link: HubLink;
  export let enabled: boolean;
  let editUrl: boolean;

  function toggleEdit() {
    editUrl = !editUrl;
  }
</script>

<div class="card">
  <div class="card-body">
    <img src={link.img} alt={link.label} />
    {#if !editUrl}
      <div class="label" title="Double Click to Edit" on:click={toggleEdit}>{link.label}</div>
    {:else}
      <input class="w-full" bind:value={link.url} use:clickOutside on:click_outside={toggleEdit} />
    {/if}
    <div><Switch bind:value={enabled} /></div>
  </div>
</div>

<style>
  .card {
    position: relative;
    background-color: var(--back-2);
    border-radius: 1rem;
    transition: filter 0.3s, transform 0.3s;
    gap: 1rem;
    width: 100%;
  }
  .card-body {
    margin: 0.4rem 0.8rem;
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
  }
  .label {
    flex-grow: 1;
    padding: 0.4rem;
    cursor: text;
  }
  img {
    display: block;
    height: 3rem;
    object-fit: scale-down;
  }
  
</style>
