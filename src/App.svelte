<script lang="ts">
  import { Router, Route } from "svelte-navigator";

  import Footer from "./lib/Footer.svelte";
  import Header from "./lib/Header.svelte";
  import RainbowTitle from "./lib/RainbowTitle.svelte";
  import Home from "./lib/Home.svelte";
  import ArticlePage from "./lib/ArticlePage.svelte";
  import ApodPage from "./lib/ApodPage.svelte";

  import surpriseImage from "./assets/rickroll.gif";

  let basepath = import.meta.env.BASE_URL;
  let url = "";
</script>

<Router {url} {basepath}>
  <Header />
  <main class="app">
    <Route component={Home} />

    <Route path="/surprise">
      <RainbowTitle title="Coucou Mr Hendrikx !" />
      <img
        src={surpriseImage}
        alt="rickroll"
        style="position: fixed; bottom: 0px"
      />
    </Route>

    <Route path="/article-details" component={ArticlePage} />

    <!-- Les deux solutions ci-dessous sont équivalentes -->
    <Route path="/apod/:id" component={ApodPage} />
    <Route path="/apod/:id" let:params>
      <ApodPage id={params.id} />
    </Route>
  </main>
</Router>

<Footer />
