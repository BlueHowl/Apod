<script lang="ts">
  import { Router, Route, Link } from 'svelte-routing';

  import ApodHolder from './lib/ApodHolder.svelte';
  import Footer from './lib/Footer.svelte';
  import Header from './lib/Header.svelte';
  import RainbowTitle from './lib/RainbowTitle.svelte';

  export let url = "";

</script>

<Router {url}>
  <Header></Header>

  <main class="app">
    <Route path="/nasa-apods" component={ApodHolder} />

    <Route path="/my-apods">
      <RainbowTitle title="Coucou !"></RainbowTitle>
    </Route>
  </main>
</Router>

<Footer></Footer>