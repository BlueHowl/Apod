<script lang="ts">
    import { ApodSample } from '../domains/apod-sample';
    import ApodArticle from './ApodArticle.svelte';
    import RainbowTitle from './RainbowTitle.svelte';

    let selectedApod : number;

    function handleApodMessage(event : CustomEvent) {
      selectedApod = event.detail.text;
    }

</script>

<RainbowTitle title="Mes superbes Apods !"></RainbowTitle>

<h4>selected apod id : {selectedApod}</h4>

<section class="apodHolder">
    {#each ApodSample as apod, i}
      <ApodArticle source={apod.hdUrl} description={apod.explanation} id={i} on:message={handleApodMessage}></ApodArticle>
    {/each}
</section>

<style>
    .apodHolder {
      margin: 0;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }

</style>