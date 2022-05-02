<script lang="ts">
  import { onMount } from "svelte";
  import type { HubLink } from "$lib/interfaces";
  import LinkButton from "$lib/components/LinkButton.svelte";

  let links: HubLink[] = [
    {
      label: "Emby",
      url: "http://emby.garystrousers.com",
      img: "/img/emby.png",
    },
    {
      label: "Netflix",
      url: "http://www.netflix.com/WiHome",
      img: "/img/netflix.png",
    },
    {
      label: "Stan",
      url: "https://www.stan.com.au/",
      img: "/img/stan.png",
    },
    {
      label: "YouTube",
      url: "https://www.youtube.com/",
      img: "/img/youtube.png",
    },
    {
      label: "ABC iView",
      url: "https://iview.abc.net.au/",
      img: "/img/abc.png",
    },
    {
      label: "Seven Plus",
      url: "https://7plus.com.au/",
      img: "/img/seven.png",
    },
    {
      label: "Nine Now",
      url: "https://www.9now.com.au/",
      img: "/img/nine.png",
    },
    {
      label: "Ten Play",
      url: "https://10play.com.au/",
      img: "/img/ten.png",
    },
  ];

  let curIndex = -1;

  let colNum = 4;
  let ready = false;
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

  function overflowX(input: number, length: number): number {
    if (input > length - 1) {
      return input - length;
    } else if (input < 0) {
      return input + length;
    }
    return input;
  }

  function overflowY(input: number, length: number, colNum: number): number {
    if (input > length - 1) {
      return input - (input - (input % colNum));
    } else if (input < -(colNum - (length % colNum))) {
      return input + length + (colNum - (length % colNum));
    } else if (input < 0) {
      return input + length - (length % colNum);
    }
    return input;
  }
</script>

<svelte:window on:keydown={onKeydown} />

<main>
  <div class="links">
    {#if ready}
      {#each links as link, i}
        <LinkButton {link} index={i} bind:curIndex />
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
