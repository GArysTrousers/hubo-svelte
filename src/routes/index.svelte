<script lang="ts">
  import { onMount } from "svelte";
  import type { HubLink } from "$lib/interfaces";
  import { links } from "$lib/links";
  import { overflowX, overflowY, getActiveLinks } from "$lib/helpers";
  import LinkButton from "$lib/components/LinkButton.svelte";

  let curIndex = -1;

  let colNum = 4;
  let ready = false;
  let disabled = [3];
  $: activeLinks = getActiveLinks(links, disabled);

  onMount(() => (ready = true));

  function onKeydown(e) {
    if (curIndex == -1) {
      curIndex = 0;
      return;
    }
    if (e.code == "ArrowRight") {
      curIndex = overflowX(curIndex + 1, links.length);
    } else if (e.code == "ArrowLeft") {
      curIndex = overflowX(curIndex - 1, links.length);
    } else if (e.code == "ArrowDown") {
      curIndex = overflowY(curIndex + colNum, links.length, colNum);
    } else if (e.code == "ArrowUp") {
      curIndex = overflowY(curIndex - colNum, links.length, colNum);
    }
  }
</script>

<svelte:window on:keydown={onKeydown} />

<main>
  <div class="links">
    {#if ready}
      {#each activeLinks as link, i}
        <LinkButton {link} index={i} bind:curIndex />
      {/each}
    {/if}
  </div>
</main>

<a class="donate-link" href="https://ko-fi.com/ben_lee"
  >♥ Donate to my Ko-Fi ♥</a
>

<a class="edit-link" href="edit">Edit</a>

<style>
  main {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    height: 90vh;
  }
  
  .donate-link {
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    margin: 1rem;
    text-decoration: underline;
    color: #888;
  }

  .edit-link {
    position: fixed;
    bottom: 0;
    left: 0;
    margin: 1rem;
    text-decoration: underline;
    color: #888;
  }

  .links {
    --cols: 2;
    display: grid;
    grid-template-columns: repeat(var(--cols), 1fr);
    gap: 2rem;
  }

  @media only screen and (min-width: 600px) {
    .links {
      --cols: 4;
      max-width: 800px;
    }
  }
</style>
