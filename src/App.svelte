<script lang="ts">
  import { Router, Route } from "svelte-navigator";

  import Footer from "./lib/Footer.svelte";
  import Header from "./lib/Header.svelte";
  import RainbowTitle from "./lib/RainbowTitle.svelte";
  import Home from "./lib/Home.svelte";

  export let url = "";
</script>

<Router {url} basepath = "/~d170051/APOD" >
  <Header />
  <main class="app">
    <!--A modifier, l'URL de départ doit être configurée à /~d170051/APOD/ et non en dur comme ci-dessous-->
    <Route path="/" component={Home} />

    <Route path="/my-apods">
      <RainbowTitle title="Coucou Mr Hendrikx !" />
    </Route>
  </main>
</Router>

<Footer />
