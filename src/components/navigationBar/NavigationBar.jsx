const NavigationBar =() => {
    return <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">LOGO</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Vehicle</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Rides</a>
          </li>
        </ul>
        <span class="navbar-text">
          {window.location.pathname != "/login" && window.location.pathname != "/register" && <a href="/login"><button className="btn btn-dark">Login</button></a>}
        </span>
      </div>
    </div>
  </nav>
}

export default NavigationBar;