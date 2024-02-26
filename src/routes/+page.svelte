<script>
  import PageTitle from "../components/PageTitle.svelte";
  import Card from "../components/Card.svelte";
</script>

<PageTitle>Popular Titles</PageTitle>
<div class="home-page">
  <div class="wrapper">
    <ul>
      <li>
        <Card
          link={"/series"}
          title={"Popular Series"}
          poster={"./poster-series.png"}
        />
      </li>
      <li>
        <Card
          link={"/movies"}
          title={"Popular Movies"}
          poster={"./poster-movies.png"}
        />
      </li>
    </ul>
  </div>
</div>

<style lang="scss">
  .home-page {
    display: flex;
    justify-content: center;
    padding: 35px 10px;
    @media only screen and (min-width: 1024px) {
      padding: 35px 0px;
    }
    .wrapper {
      max-width: 1024px;
      display: flex;
      flex: 1;
    }
    ul {
      margin: 0;
      padding: 0;
      display: flex;
      gap: 15px;
      li {
        list-style: none;
        margin: 0;
        padding: 0;
      }
    }
  }
</style>
