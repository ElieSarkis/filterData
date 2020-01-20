import React from "react";
import ReactDOM from "react-dom";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer class="page-footer font-small blue">
          <div class="footer-copyright text-center py-3 copyRight footer-light footer-shadow content container-fluid">
            <span class="footerName"> © 2020 Copyright:</span>
            <a href="https://github.com/ElieSarkis"> Elie Github</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
