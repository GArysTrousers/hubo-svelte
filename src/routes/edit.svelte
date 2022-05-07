<script lang="ts">
  import { onMount } from "svelte";
  import { links, defaultLinks } from "$lib/links";
  import LinkEditButton from "$lib/components/LinkEditButton.svelte";
import { goto } from "$app/navigation";

  

  let ready = false;

  onMount(() => {
    ready = true
  });

  async function save() {
    window.localStorage.setItem("savedLinks", JSON.stringify($links))
    goto("/")
  }

  async function reset() {
    $links = defaultLinks;
  }

</script>

<main>
  <div class="links">
    {#if ready}
      {#each $links as link}
        <LinkEditButton {link} bind:enabled={link.visible}/>
      {/each}
    {/if}
  </div>
  <div class="controls">
    <button class="btn btn-icon" on:click={reset}>
      <div class="material-icons">refresh</div>
      <div>Reset</div>
    </button>
    <button class="btn btn-icon" on:click={save}>
      <div class="material-icons">save</div>
      <div>Save</div>
    </button>
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
    --cols: 2;
    display: grid;
    grid-template-columns: repeat(var(--cols), 1fr);
    gap: 2rem;
    margin-bottom: 2rem;
  }

  @media only screen and (min-width: 600px) {
    .links {
    --cols: 4;
      max-width: 800px;
    }
  }

  .controls {
    display:flex;
    flex-direction: row;
    gap: 1rem;
  }
</style>
