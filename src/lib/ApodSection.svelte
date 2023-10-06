<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { ApodSample } from '../domains/apod-sample';
  import ApodArticle from './ApodArticle.svelte';


  //gestion events
  function handleApodMessage(event : CustomEvent) {
    sendApodExplanation(ApodSample[event.detail.id].explanation)
  }

  const dispatch = createEventDispatcher();
  
  function sendApodExplanation(text : string) {
    dispatch('message', {
      explanation: text
    });
  }

</script>

<section class="apodSection">
    {#each ApodSample as apod, i}
      <ApodArticle source={apod.hdUrl} title={apod.title} date={apod.date} id={i} on:message={handleApodMessage}></ApodArticle>
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