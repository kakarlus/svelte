<script>
  import PageTitle from "./PageTitle.svelte";
  import IndefiniteLoader from "./IndefiniteLoader.svelte";
  import LoadError from "./LoadError.svelte";
  import Card from "./Card.svelte";

  export let data;
  export let type = "";
  let items = [];
  let isLoading = true;
  let hasError = false;

  $: items = data.entries
    .filter((entry) => entry.releaseYear >= 2010 && entry.programType === type)
    .sort((a, b) => a.title.localeCompare(b.title))
    .slice(0, 21);
</script>

<PageTitle>Popular {type === "series" ? "Series" : "Movies"}</PageTitle>
<div class="shows-container">
  <div class="wrapper">
    {#if !data}
      <IndefiniteLoader />
    {/if}
    {#if hasError}
      <LoadError />
    {/if}

    <ul>
      {#each items as item (item.title)}
        <li>
          <Card
            link={"/movies"}
            title={item.title}
            poster={item.images["Poster Art"].url}
          />
        </li>
      {/each}
    </ul>
  </div>
</div>

<style lang="scss">
  .shows-container {
    display: flex;
    justify-content: center;
    padding: 35px 10px;
    @media only screen and (min-width: 1024px) {
      padding: 35px 0;
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
      flex-direction: row;
      gap: 14px;
      flex-wrap: wrap;
      justify-content: center;
      li {
        list-style: none;
        margin: 0;
        padding: 0;
      }
    }
  }
</style>
