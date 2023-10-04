<script lang="ts">
    import { ApodSample } from '../domains/apod-sample';
    import ApodArticle from './ApodArticle.svelte';
    import RainbowTitle from './RainbowTitle.svelte';

</script>

<RainbowTitle title="Mes superbes Apods !"></RainbowTitle>

<section class="apodHolder">
    {#each ApodSample as apod}
      <ApodArticle source={apod.hdUrl} description={apod.explanation} onFavClick={() => {}}></ApodArticle>
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