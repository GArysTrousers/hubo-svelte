<script lang="ts">
  import { onMount } from "svelte";
  import { links, newLinks, newUser } from "$lib/stores";
  import { overflowX, overflowY } from "$lib/helpers";
  import LinkButton from "$lib/components/LinkButton.svelte";
  import Tag from "$lib/components/Tag.svelte";
  import { goto } from "$app/navigation";

  let curIndex = -1;

  let colNum = 4;
  let ready = false;

  onMount(() => {
    ready = true;
  });

  function onKeydown(e) {
    if (curIndex == -1) {
      curIndex = 0;
      return;
    }
    if (e.code == "ArrowRight") {
      curIndex = overflowX(curIndex + 1, $links.length);
    } else if (e.code == "ArrowLeft") {
      curIndex = overflowX(curIndex - 1, $links.length);
    } else if (e.code == "ArrowDown") {
      curIndex = overflowY(curIndex + colNum, $links.length, colNum);
    } else if (e.code == "ArrowUp") {
      curIndex = overflowY(curIndex - colNum, $links.length, colNum);
    } else if (e.code == "Enter") {
      goto($links[curIndex].url);
    }
  }
</script>

<svelte:window on:keydown={onKeydown} />

<main>
  <div class="links">
    {#if ready}
      {#each $links.filter((l) => l.visible == true) as link, i}
        <LinkButton {link} index={i} bind:curIndex />
      {/each}
    {/if}
  </div>
</main>

<div class="donate-div">
  <a class="donate-link" href="https://ko-fi.com/ben_lee"
    >♥ Donate to my Ko-Fi ♥</a
  >
</div>
<div class="edit-div">
  {#if $newUser}
    <Tag>
      <div class="material-icons">star</div>
      You can edit the links here!
    </Tag>
  {:else if $newLinks}
    <Tag>
      <div class="material-icons">star</div>
      New Links
    </Tag>
  {/if}
  <a class="edit-link" href="edit" title="Edit Links" tabindex="-1">
    <div class="material-icons">edit</div>
  </a>
</div>

<style>
  main {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    height: 90vh;
  }

  .donate-div {
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    margin: 1rem;
  }

  .donate-link {
    text-decoration: underline;
    color: #888;
  }

  .edit-div {
    position: fixed;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    vertical-align: middle;
  }
  .edit-link {
    margin: 1rem;
    color: #888;
  }
  .edit-link:hover {
    filter: brightness(1.2);
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
