<script lang="ts">
  export let value:boolean;
</script>

<div class={value ? "box active" : "box"} on:click={() => value = !value}></div>

<style>
  .box {
    border-radius: 0.5rem;
    width: 1.8rem;
    height: 1.8rem;
    background-color: #444455;
    cursor: pointer;
  }
  .box:hover {
    filter: brightness(1.1);
  }

  .active {
    background-color: #52B54B;
  }
</style>