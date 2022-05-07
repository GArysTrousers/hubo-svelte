<script lang="ts">
  export let value:boolean;
</script>

<div class={value ? "switch active" : "switch"} on:click={() => value = !value}>
  <div class="slider"></div>
</div>

<style>
  .switch {
    padding: 0.15rem;
    border-radius: 1rem;
    width: 2.5rem;
    height: 1.2rem;
    background-color: #ca2a2a;
    cursor: pointer;
  }
  .switch:hover {
    filter: brightness(1.1);
  }
  .active {
    background-color: #52B54B;
  }

  .slider {
    border-radius: 1rem;
    width: 1.2rem;
    height: 100%;
    float: left;
    background-color: #444452;
  }
  .active .slider {
    float: right;
  }

</style>