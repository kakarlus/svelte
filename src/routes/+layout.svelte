<script>
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
</script>

<Header />
<slot />
<Footer />

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap");
  @import "../variables.scss";

  :global(body) {
    margin: 0;
    padding: 0;
    font-family: $font-family;
  }

  :global(*) {
    box-sizing: border-box;
  }
</style>
