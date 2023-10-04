<script lang="ts">
    import Button from "./Button.svelte";

    export let source : string;
    export let description : string;
    export let onFavClick: () => void;
  </script>
  
<section class="apodArticle">
    <img src={source} alt={description.slice(0, 250)}/>
    <div class="buttonHolder">
        <Button label="Ajouter au favoris" onClick={onFavClick}></Button>
    </div>
    <p>{description}</p>
</section>

<style>
    .apodArticle {
        flex-basis: 0;
        box-sizing: border-box;

        margin-bottom: 12px;
        
        display: flex;
        flex-direction: column;
        background-color: whitesmoke;
        border: 4px solid black;
        border-radius: 8px;

        text-align: justify;
    }

    .apodArticle img {
        padding: 8px;

        height: 275px;
        width: 450px;
    }

    .buttonHolder {
        width: fit-content;
        align-self: center;
    }

    .apodArticle p {
        padding: 12px;
        color: black;
    }

</style>