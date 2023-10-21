<script lang="ts">
  import { Link } from "svelte-navigator";

  // import { onDestroy } from "svelte";
  import ApodSection from "./ApodSection.svelte";
  import RainbowTitle from "./RainbowTitle.svelte";
  import { nbrSelectedCards, nbrCards } from "./stores";

  let explanation: string = "";
  let id: string = "";
  // let selected_apods_value: number;
  // let nbr_apods_value: number;

  // const unsubscribeNbrSelectedCards = nbrSelectedCards.subscribe(
  //   (value: number) => {
  //     selected_apods_value = value;
  //   }
  // );

  // const unsubscribeNbrCards = nbrCards.subscribe((value: number) => {
  //   nbr_apods_value = value;
  // });

  function handleApodMessage(event: CustomEvent) {
    explanation = event.detail.explanation;
  }

  function redirectToApodPage() {
    if (id) {
      id = encodeURIComponent(id);
    }
  }

  // onDestroy(unsubscribeNbrSelectedCards);
  // onDestroy(unsubscribeNbrCards);
</script>

<RainbowTitle title="Mes superbes Apods !" />

<!--Accéder à un store via la syntaxe suivante $nomDuStore est un raccourci d'écriture qui remplace les étapes de subscribe et de unsubscribe -->
<h2>Number of selected apods : {$nbrSelectedCards} on {$nbrCards}</h2>

<div id="apodSearch">
  <input type="number" placeholder="Entrez l'id d'une apod" bind:value={id} />
  <Link to={`/apod/${id}`}>
    <button on:click={redirectToApodPage}>Rechercher</button>
  </Link>
</div>

<ApodSection on:message={handleApodMessage} />

<div id="apodDescription">
  <p>{explanation}</p>
</div>

<style>
  #apodDescription {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
  }

  #apodSearch {
    margin-bottom: 1rem;
  }
</style>
