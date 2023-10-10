<script lang="ts">
  export let label: string;

  function onClick() {
    console.log("Bouton cliqué");
  }
</script>

<button class="customButton" on:click={onClick}>
  {label}
</button>

<style>
  .customButton {
    color: red;
  }
</style>
