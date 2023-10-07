<script lang="ts">
  import { Link } from "svelte-routing";
</script>

<header class="apodHeader">
  <!--A modifier, l'URL de départ doit être configurée à /~d170051/APOD/ et non en dur comme ci-dessous-->
  <nav>
    <ul>
      <li><Link to="/~d170051/APOD/" style="color: white;">Home</Link></li>
      <li>
        <Link to="/~d170051/APOD/my-apods" style="color: white;">My Apods</Link>
      </li>
    </ul>
  </nav>
</header>

<style>
  .apodHeader nav {
    background-color: rgba(0, 0, 0, 0.5);
  }

  .apodHeader ul {
    display: flex;

    margin: 0;
    padding: 2rem;
  }

  .apodHeader li {
    text-decoration: none;
    list-style: none;

    margin: 0 12px 0 12px;

    font-size: 1.2rem;
  }
</style>
