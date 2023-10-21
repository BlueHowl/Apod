<script lang="ts">
  import { ApodSample } from "../domains/apod-sample";
  import RainbowTitle from "./RainbowTitle.svelte";

  export let id: string;
  let definedApod = false;
  let title: string;
  let date: string;
  let explanation: string;
  let copyright: string;
  let hdUrl: string;

  let idToNumber = parseInt(id, 10);

  if (!isNaN(idToNumber)) {
    if (idToNumber > 0 && idToNumber <= ApodSample.length) {
      let apodFound = ApodSample[idToNumber - 1];
      definedApod = true;
      title = apodFound.title;
      date = apodFound.date;
      explanation = apodFound.explanation;
      copyright = apodFound.copyright;
      hdUrl = apodFound.hdUrl;
    }
  }
</script>

<section class="apodDetails">
  {#if definedApod}
    <RainbowTitle {title} />

    <img src={hdUrl} alt={title} />

    <h2>{date}</h2>
    <p>{explanation}</p>
    <p />
    <h3>{copyright}</h3>
  {:else}
    <RainbowTitle title="Aucune apod correspondante à cet id" />
  {/if}
</section>

<style>
  .apodDetails {
    margin: 4rem;
  }

  .apodDetails img {
    width: 100%;
  }
</style>
