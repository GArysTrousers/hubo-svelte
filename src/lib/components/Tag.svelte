<script lang="ts">
</script>

<div class="con">
  <div class="body"><slot/></div>
  <div class="right" />
</div>

<style>
  .con {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 40px;
  }
  .body {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    border-radius: 7px;
    background-color: var(--back-2);
  }
  .right {
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-left: 0.8rem solid var(--back-2);
    border-bottom: 10px solid transparent;
  }
</style>
