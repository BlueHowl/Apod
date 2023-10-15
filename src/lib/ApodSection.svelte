<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { ApodSample } from "../domains/apod-sample";
  import DateArticle from "./DateArticle.svelte";
  import {
    incrementNbrSelectedCards,
    decrementNbrSelectedCards,
    nbrCards,
  } from "./stores";

  nbrCards.set(ApodSample.length);

  //gestion events
  function handleApodSelection(event: CustomEvent) {
    updateSelectionStatus(event.detail.isSelected);
    sendApodExplanation(ApodSample[event.detail.id].explanation);
  }

  const dispatch = createEventDispatcher();

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
      source={apod.hdUrl}
      title={apod.title}
      date={apod.date}
      id={i}
      on:selectedArticle={handleApodSelection}
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
