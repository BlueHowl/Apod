<script lang="ts">
  import { Router, Route } from "svelte-navigator";

  import Footer from "./lib/Footer.svelte";
  import Header from "./lib/Header.svelte";
  import RainbowTitle from "./lib/RainbowTitle.svelte";
  import Home from "./lib/Home.svelte";
  import ArticlePage from "./lib/ArticlePage.svelte";
    import TestPage from "./lib/TestPage.svelte";
  //import { createHistory, createMemorySource } from "svelte-navigator";

	//const history = createHistory(createMemorySource());

  let basepath = import.meta.env.BASE_URL;

  export let url = "";
</script>

<Router {url} basepath = {basepath} >
  <Header />
  <main class="app">
    <Route component={Home} />

    <Route path="/surprise">
      <RainbowTitle title="Coucou Mr Hendrikx !" />
      <img src="src\assets\rickroll.gif" alt="rickroll" style="position: fixed; bottom: 0px" />
    </Route>

    <Route path="/article-details" component={ArticlePage}></Route>

    <!-- Les deux solutions sont équivalente -->
    <Route path="blog/:id" component="{TestPage}" />
    <Route path="blog/:id" let:params>
      <TestPage id="{params.id}" />
    </Route>

  </main>
</Router>

<Footer />
