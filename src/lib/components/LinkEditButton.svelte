<script lang="ts">
  import type { HubLink } from "$lib/interfaces";
  import Switch from "./Switch.svelte";

  export let link: HubLink;
  export let enabled: boolean;
  let editUrl: boolean;

  function toggleEdit() {
    editUrl = !editUrl;
  }
</script>

<div class="card">
  <img src={link.img} alt={link.label} />
  {#if !editUrl}
    <div class="label">{link.label}</div>
  {:else}
    <input class="w-full" bind:value={link.url} />
  {/if}
  <div><Switch bind:value={enabled} /></div>
  <button class="edit-link" on:click={toggleEdit} title="Edit Url"
    ><div class="material-icons">edit</div></button
  >
</div>

<style>
  .card {
    position: relative;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    background-color: var(--back-2);
    padding: 1rem;
    border-radius: 1rem;
    transition: filter 0.3s, transform 0.3s;
    gap: 1rem;
    width: 9rem;
  }
  .label {
    flex-grow: 1;
  }
  img {
    display: block;
    height: 3rem;
    object-fit: scale-down;
  }
  .card:hover .edit-link {
    opacity: 1;
  }
  .edit-link:hover {
    filter: brightness(1.2);
  }
  .edit-link {
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    vertical-align: middle;
    color: #888;
    background-color: transparent;
    outline: none;
    border: none;
    transition: opacity ease-in-out 0.2s;
    cursor: pointer;
  }
</style>
