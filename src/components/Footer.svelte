<footer>
  <div class="wrapper">
    <ul class="links">
      <li><a href="#">Home</a></li>
      <li><a href="#">Terms and Conditions</a></li>
      <li><a href="#">Privacy Policy</a></li>
      <li><a href="#">Collection Statement</a></li>
      <li><a href="#">Help</a></li>
      <li><a href="#">Manage Account</a></li>
    </ul>
    <span>Copyright &copy; 2016 DEMO Streaming. All rights Reserved. </span>
    <div class="social">
      <ul>
        <li>
          <a href="#">
            <img src="./fb.png" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./tw.png" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./ig.png" />
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">
            <img src="./app-store.png" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./google-play.png" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./ms.png" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</footer>

<style lang="scss">
  footer {
    background-color: #1e1e1e;
    padding: 35px 0;
    color: white;
    display: flex;
    justify-content: center;
    font-size: 12px;
    @media only screen and (min-width: 768px) {
      font-size: 14px;
    }
  }

  footer .wrapper {
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
    max-width: 1024px;
    padding: 0 10px;
    @media only screen and (min-width: 1024px) {
      padding: 0;
    }
  }

  footer ul.links {
    padding: 0;
    margin: 0 0 20px;
    columns: 2;
    @media only screen and (min-width: 768px) {
      columns: 1;
    }
  }

  footer ul.links li {
    list-style: none;
    display: block;
    margin-bottom: 5px;
    @media only screen and (min-width: 768px) {
      border-right: 1px solid white;
      display: inline-block;
      padding: 0 10px;
      margin-bottom: 0px;
    }
  }

  footer ul.links li:first-child {
    @media only screen and (min-width: 768px) {
      padding: 0 10px 0 0;
    }
  }

  footer ul.links li:last-child {
    border: none;
  }

  footer span {
    color: #cccccc;
    margin-bottom: 35px;
  }

  footer a {
    color: inherit;
    text-decoration: none;
  }

  footer .social {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media only screen and (min-width: 768px) {
      flex-direction: row;
    }
  }

  footer .social ul {
    padding: 0;
    margin: 0 0 20ox;
  }

  footer .social ul li {
    list-style: none;
    margin-right: 15px;
    display: inline-block;
  }
</style>
