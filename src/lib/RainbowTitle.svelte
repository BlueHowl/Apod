<script lang="ts">
    export let title: string;
</script>

<h1 class="apodTitle">
    {title}
</h1>

<style>
    /* Define the rainbow animation */
    @keyframes rainbow {
      0% { color: red; }
      14% { color: orange; }
      28% { color: yellow; }
      42% { color: green; }
      57% { color: blue; }
      71% { color: indigo; }
      85% { color: violet; }
      100% { color: red; }
    }
  
    /* Apply the animation to the text */
    .apodTitle {
        margin-bottom: 6rem;

        animation: rainbow 5s linear infinite;
    }
    
  </style>