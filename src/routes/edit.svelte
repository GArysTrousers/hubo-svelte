<script lang="ts">
  import { onMount } from "svelte";
  import { defaultLinks } from "$lib/links";
  import { links, newUser } from "$lib/stores";
  import LinkEditButton from "$lib/components/LinkEditButton.svelte";
  import { goto } from "$app/navigation";
  import type { Catagory, HubLink } from "$lib/interfaces";

  onMount(() => {
    $newUser = false;
  });

  async function save() {
    window.localStorage.setItem("savedLinks", JSON.stringify($links));
    goto("/");
  }

  async function reset() {
    $links = defaultLinks;
  }

  function byCatagory(list: HubLink[], catagory: Catagory) {
    return list.filter((v) => v.catagory == catagory);
  }
</script>

<main>
  <div>Movies and Series</div>
  <div class="links">
    {#each byCatagory($links, "Movies and Series") as link}
      <LinkEditButton bind:link bind:enabled={link.visible} />
    {/each}
  </div>

  <div>TV Channels</div>
  <div class="links">
    {#each byCatagory($links, "TV Channels") as link}
      <LinkEditButton bind:link bind:enabled={link.visible} />
    {/each}
  </div>

  <div>Sport</div>
  <div class="links">
    {#each byCatagory($links, "Sport") as link}
      <LinkEditButton bind:link bind:enabled={link.visible} />
    {/each}
  </div>
  <div class="controls">
    <button class="btn btn-icon" on:click={() => goto("/")}>
      <div class="material-icons">arrow_back</div>
      <div>Back</div>
    </button>
    <button class="btn btn-icon" on:click={reset}>
      <div class="material-icons">refresh</div>
      <div>Reset</div>
    </button>
    <button class="btn btn-icon" on:click={save}>
      <div class="material-icons">save</div>
      <div>Save</div>
    </button>
  </div>
  <a class="donate-link" href="https://ko-fi.com/ben_lee"
    >♥ Donate to my Ko-Fi ♥</a
  >
</main>

<style>
  main {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    min-height: 90vh;
    gap: 1rem;
  }
  .donate-link {
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
    gap: 0.8rem;
    margin-bottom: 2rem;
    width: 100%;
  }

  /* desktop */
  @media only screen and (min-width: 600px) {
    .links {
      --cols: 3;
      max-width: 1000px;
    }
  }

  /* desktop */
  @media only screen and (min-width: 800px) {
    .links {
      --cols: 4;
      max-width: 1000px;
    }
  }

  .controls {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
</style>
