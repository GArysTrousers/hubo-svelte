<script lang="ts">
  import { onMount } from "svelte";
  import { links } from "$lib/links";
  import { getActiveLinks } from "$lib/helpers";
  import LinkEditButton from "$lib/components/LinkEditButton.svelte";

  

  let curIndex = -1;

  let colNum = 4;
  let ready = false;
  let disabled = [3];
  $: activeLinks = getActiveLinks(links, disabled)

  onMount(() => (ready = true));


</script>

<main>
  <div class="links">
    {#if ready}
      {#each activeLinks as link, i}
        <LinkEditButton {link} enabled={true} />
      {/each}
    {/if}
  </div>
</main>

<a class="donate-link" href="https://ko-fi.com/ben_lee"
  >♥ Donate to my Ko-Fi ♥</a
>

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
  .links {
    --cols: 1;
    display: grid;
    grid-template-columns: repeat(var(--cols), 1fr);
    gap: 2rem;
  }

  @media only screen and (min-width: 600px) {
    .links {
      max-width: 800px;
    }
  }
</style>
