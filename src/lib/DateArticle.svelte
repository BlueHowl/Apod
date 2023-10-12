<script lang="ts">
  import Button from "./Button.svelte";
  import { createEventDispatcher } from "svelte";

  export let source: string;
  export let title: string;
  export let date: string;
  export let id: number;

  const dispatch = createEventDispatcher();

  function sayArticleId() {
    dispatch("message", { id: id });
  }
</script>

<article class="dateArticle" on:click={sayArticleId} on:keypress={sayArticleId}>
  <h3>{title}</h3>
  <img src={source} alt={title} />
  <div class="buttonHolder">
    <Button label="Afficher la description" onClick={sayArticleId} />
  </div>
  <p>{date}</p>
</article>

<style>
  .dateArticle {
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

  .dateArticle:hover {
    opacity: 0.8;
  }

  .dateArticle img {
    padding: 8px;
    height: 275px;
    width: 450px;
  }

  .buttonHolder {
    width: fit-content;
    align-self: center;
  }
</style>
