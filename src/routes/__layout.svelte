<script lang="ts">
  import { defaultLinks } from "$lib/links";
  import { links, newLinks } from "$lib/stores";
  import { onMount } from "svelte";

  onMount(async () => {
    $links = JSON.parse(window.localStorage.getItem("savedLinks"));
    if ($links == null) {
      $links = defaultLinks;
      window.localStorage.setItem("savedLinks", JSON.stringify($links));
    } else {
      updateLinks();
    }
  });

  function updateLinks() {
    var keys = $links.map((i) => i.label);
    defaultLinks.forEach((i) => {
      if (!keys.includes(i.label)) {
        let newLink = i;
        newLink.visible = false;
        $links = [...$links, newLink];
        $newLinks = true;
      }
    });
    if ($newLinks) localStorage.setItem("savedLinks", JSON.stringify($links));
  }
</script>

<svelte:head>
  <title>Hubo.tv</title>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
  />
</svelte:head>

<slot />

<style>
</style>
