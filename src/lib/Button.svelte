<script lang="ts">
  export let label: string;
  export let onClick: () => void;
</script>

<button class="customButton" on:click={onClick}>
  {label}
</button>

<style>
  .customButton {
    color: red;
  }
</style>
