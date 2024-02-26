<header>
  <div class="wrapper">
    <h1><a href="/">DEMO Streaming</a></h1>
    <button
      on:click={() => {
        console.warn("open hamburger");
      }}
      class="mobile-nav"
    ></button>
    <nav>
      <ul>
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <a href="#" class="call-to-action">Start your free trial</a>
        </li>
      </ul>
    </nav>
  </div>
</header>

<style lang="scss">
  @import "../variables.scss";
  header {
    height: 60px;
    background: linear-gradient(#0098fe, #0166fc);
    display: flex;
    justify-content: center;
    color: white;
    box-shadow: $soft-shadow;
    z-index: 1;
    .wrapper {
      display: flex;
      flex: 1;
      flex-direction: row;
      align-items: center;
      height: 100%;
      max-width: 1024px;
      padding: 0 10px;
      @media only screen and (min-width: 1024px) {
        padding: 0;
      }
    }
    h1 {
      margin: 0;
      font-size: 24px;
      font-weight: bold;
      flex: 1;
      text-shadow: $soft-shadow;
      @media only screen and (min-width: 320px) {
        font-size: 28px;
      }
      @media only screen and (min-width: 768px) {
        font-size: 33px;
      }
      a {
        padding: 0;
      }
    }
    ul {
      margin: 0;
      padding: 0;
      display: none;
      @media only screen and (min-width: 1024px) {
        display: block;
      }
      li {
        list-style: none;
        display: inline-block;
        margin-left: 20px;
        font-size: 16px;
      }
    }
    a {
      text-decoration: none;
      color: inherit;
      padding: 5px 12px;
      &.call-to-action {
        border: 1px solid #454442;
        background: linear-gradient(#434446, #343434);
      }
    }
    .mobile-nav {
      width: 24px;
      height: 24px;
      border: none;
      padding: 0;
      background: linear-gradient(
        transparent,
        transparent 41.9%,
        white 42%,
        white 58%,
        transparent 58.01%
      );
      box-shadow:
        inset 0 4px white,
        inset 0 -4px white;
      @media only screen and (min-width: 1024px) {
        display: none;
      }
    }
  }
</style>
