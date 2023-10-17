<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { ApodSample } from "../domains/apod-sample";
  import DateArticle from "./DateArticle.svelte";
  import { useNavigate } from "svelte-navigator";
  import {
    incrementNbrSelectedCards,
    decrementNbrSelectedCards,
    nbrCards,
  } from "./stores";

  const dispatch = createEventDispatcher();

  const navigate = useNavigate();

  nbrCards.set(ApodSample.length);

  //gestion events
  function handleApodSelection(event: CustomEvent) {
    updateSelectionStatus(event.detail.isSelected);
  }

  function handleShowArticleDescription(event: CustomEvent) {
    sendApodExplanation(ApodSample[event.detail.id].explanation);
  }

  function handleNavToDetails(event: CustomEvent) {
    navigate("/article-details", { state: ApodSample[event.detail.id] });
  }

  function sendApodExplanation(text: string) {
    dispatch("message", {
      explanation: text,
    });
  }

  function updateSelectionStatus(isSelected: boolean) {
    isSelected ? incrementNbrSelectedCards() : decrementNbrSelectedCards();
  }


  
</script>

<section class="apodSection">
  {#each ApodSample as apod, i}
    <DateArticle
      source={apod.url}
      title={apod.title}
      date={apod.date}
      id={i}
      on:selectedArticle={handleApodSelection}
      on:showArticleDescription={handleShowArticleDescription}
      on:navToDetails={handleNavToDetails}
    />
  {/each}
</section>

<style>
  .apodSection {
    margin: 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
