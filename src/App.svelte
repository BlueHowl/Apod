<script lang="ts">
  import { Router, Route } from "svelte-navigator";

  import Footer from "./lib/Footer.svelte";
  import Header from "./lib/Header.svelte";
  import RainbowTitle from "./lib/RainbowTitle.svelte";
  import Home from "./lib/Home.svelte";
  import ArticlePage from "./lib/ArticlePage.svelte";
  import { createHistory, createMemorySource } from "svelte-navigator";

	const history = createHistory(createMemorySource());

  export let url = "";
</script>

<Router {url} history={history} basepath = "/~d170051/APOD" >
  <Header />
  <main class="app">
    <Route path="/" component={Home} />

    <Route path="/surprise">
      <RainbowTitle title="Coucou Mr Hendrikx !" />
      <img src="src\assets\rickroll.gif" alt="rickroll" style="position: fixed; bottom: 0px" />
    </Route>

    <Route path="/article-details" component={ArticlePage}></Route>
  </main>
</Router>

<Footer />
