<script lang="ts">
  import Button from "./Button.svelte";
  import { createEventDispatcher } from "svelte";

  export let source: string;
  export let title: string;
  export let date: string;
  export let id: number;

  const dispatch = createEventDispatcher();

  let isSelectedArticle: boolean = false;

  function onSelectedArticle() {
    isSelectedArticle = !isSelectedArticle;
    dispatch("selectedArticle", { id: id, isSelected: isSelectedArticle });
  }
  
  function onShowDescription() {
    dispatch("showArticleDescription", { id: id});
  }

  function onNavToDetails() {
    dispatch("navToDetails", { id: id});
  }

</script>

<article
  id="dateArticle"
  class="dateArticle"
  style={isSelectedArticle ? "box-shadow: 0 -0 15px red;" : ""}
  on:click={onSelectedArticle}
  on:keypress={onSelectedArticle}
>
  <h3>{title}</h3>
  <img src={source} alt={title} />
  <div class="buttonHolder">
    <Button label="Afficher la description" onClick={onShowDescription} />
    <Button label="Afficher les détails" onClick={onNavToDetails} />
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
