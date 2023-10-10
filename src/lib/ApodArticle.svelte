<script lang="ts">
  import Button from "./Button.svelte";
  import { createEventDispatcher } from "svelte";

  export let source: string;
  export let title: string;
  export let date: string;
  export let id: number;

  const dispatch = createEventDispatcher();

  function sayApodId() {
    dispatch("message", { id: id });
  }
</script>

<article class="apodArticle" on:click={sayApodId} on:keypress={sayApodId}>
  <h3>{title}</h3>
  <img src={source} alt={title} />
  <div class="buttonHolder">
    <Button label="Afficher la description" onCaca={sayApodId} />
  </div>
  <p>{date}</p>
</article>

<style>
  .apodArticle {
    flex-basis: 0;
    box-sizing: border-box;
    margin-bottom: 12px;
    display: flex;
    flex-direction: column;
    background-color: whitesmoke;
    border: 4px solid black;
    border-radius: 8px;
    opacity: 1;
    color: black;
    text-align: center;
  }

  .apodArticle:hover {
    opacity: 0.8;
  }

  .apodArticle img {
    padding: 8px;
    height: 275px;
    width: 450px;
  }

  .buttonHolder {
    width: fit-content;
    align-self: center;
  }
</style>
