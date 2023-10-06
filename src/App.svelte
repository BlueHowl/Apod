<script lang="ts">
  import { Router, Route, Link } from "svelte-routing";

  import Footer from "./lib/Footer.svelte";
  import Header from "./lib/Header.svelte";
  import RainbowTitle from "./lib/RainbowTitle.svelte";
  import Home from "./lib/Home.svelte";

  export let url = "";
</script>

<Router {url}
  ><!--basepath = "/~d170051/APOD" à modifier >-->
  <Header />
  <main class="app">
    <Route path="/~d170051/APOD/" component={Home} />

    <Route path="/~d170051/APOD/my-apods">
      <RainbowTitle title="Coucou Mr Hendrikx !" />
    </Route>
  </main>
</Router>

<Footer />
