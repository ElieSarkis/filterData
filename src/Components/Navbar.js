import React from "react";
function Navbar() {
  return (
    <div className="App">
      <nav class="navbar navbar-dark bg-dark navbar-expand-lg fixed-top">
        <a href="#" className="navbar-brand">
          My Website
        </a>

        <div class="main">
          <div class="input-group">
            <form class="form-inline">
              <i
                class="fa fa-search ml-3"
                aria-hidden="true"
                style={{ color: "white" }}
              ></i>
              <input
                class="form-control form-control-sm ml-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
              ></input>
            </form>
          </div>
        </div>

        <button
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav ml-auto">
            <li class="navbar-item">
              <a href="#" class="nav-link">
                Homepage
              </a>
            </li>
            <li class="navbar-item">
              <a href="#" class="nav-link">
                Blog
              </a>
            </li>
            <li class="navbar-item">
              <a href="#" class="nav-link">
                About Us
              </a>
            </li>
            <li class="navbar-item">
              <a href="#" class="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
