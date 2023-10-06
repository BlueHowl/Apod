<script lang="ts">
    import ApodSection from "./ApodSection.svelte";
    import RainbowTitle from "./RainbowTitle.svelte";

    let explanation : string = "";

    function handleApodMessage(event : CustomEvent) {
    explanation = event.detail.explanation;
  }

</script>


<RainbowTitle title="Mes superbes Apods !"></RainbowTitle>

<ApodSection on:message={handleApodMessage}></ApodSection>

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
    }
</style>