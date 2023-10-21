<script lang="ts">
  import { useLocation } from "svelte-navigator";
  import RainbowTitle from "./RainbowTitle.svelte";

  let definedArticle = false;
  let title: string;
  let date: string;
  let explanation: string;
  let copyright: string;
  let hdUrl: string;

  // Use the useLocation hook to get the route's location
  const location = useLocation();
  // Check if state.myObject exists and access its properties
  if (location && $location.state) {
    definedArticle = true;
    const state = $location.state;
    title = state.title;
    date = state.date;
    explanation = state.explanation;
    copyright = state.copyright;
    hdUrl = state.hdUrl;
  }
</script>

<section class="articleSection">
  {#if definedArticle}
    <RainbowTitle {title} />

    <img src={hdUrl} alt={title} />

    <h2>{date}</h2>
    <p>{explanation}</p>
    <p />
    <h3>{copyright}</h3>
  {:else}
    <RainbowTitle title="Aucun article sélectionné" />
  {/if}
</section>

<style>
  .articleSection {
    margin: 4rem;
  }

  .articleSection img {
    width: 100%;
  }
</style>
