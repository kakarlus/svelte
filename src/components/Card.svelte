<script>
  export let link = "";
  export let poster = "";
  export let title = "";
</script>

<a href={link} class="card">
  <div class="poster">
    <img src={poster} alt={title} />
  </div>
  <span>{title}</span>
</a>

<style lang="scss">
  .card {
    text-decoration: none;
    color: black;
    font-size: 14px;
    max-width: 134px;
    display: flex;
    flex-direction: column;
    .poster {
      margin-bottom: 5px;
      img {
        width: 134px;
        height: 201px;
        object-fit: contain;
      }
    }
  }
</style>
