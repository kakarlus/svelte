<div class="page-title">
  <div class="wrapper">
    <h2>
      <slot />
    </h2>
  </div>
</div>

<style lang="scss">
  .page-title {
    background-color: #414141;
    display: flex;
    flex: 1;
    justify-content: center;
    height: 56px;
    box-shadow:
      0 1px 1px #00000015,
      0 2px 2px #00000015,
      0 4px 4px #00000015,
      0 8px 8px #00000015,
      0 16px 16px #00000015;
    align-items: center;
    padding: 10px;
    @media only screen and (min-width: 1024px) {
      padding: 0;
    }
    .wrapper {
      max-width: 1024px;
      display: flex;
      flex: 1;
    }
    h2 {
      font-size: 18px;
      font-weight: 500;
      color: white;
      @media only screen and (min-width: 1024px) {
        padding: 0;
        font-size: 24px;
      }
    }
  }
</style>
