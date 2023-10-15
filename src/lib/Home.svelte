<script lang="ts">
  // import { onDestroy } from "svelte";
  import ApodSection from "./ApodSection.svelte";
  import RainbowTitle from "./RainbowTitle.svelte";
  import { nbrSelectedCards, nbrCards } from "./stores";

  let explanation: string = "";
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

  // onDestroy(unsubscribeNbrSelectedCards);
  // onDestroy(unsubscribeNbrCards);
</script>

<RainbowTitle title="Mes superbes Apods !" />

<!--Accéder à un store via la syntaxe suivante $nomDuStore est un raccourci d'écriture qui remplace les étapes de subscribe et de unsubscribe -->
<h2>Number of selected apods : {$nbrSelectedCards} on {$nbrCards}</h2>

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
</style>
