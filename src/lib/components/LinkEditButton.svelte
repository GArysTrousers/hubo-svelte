<script lang="ts">
  import type { HubLink } from "$lib/interfaces";

  export let link: HubLink;
  export let enabled: boolean;

</script>

<div>
  <div>{link.label}</div>
  <div>{enabled}</div>
</div>

<style>
  
</style>