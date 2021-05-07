import React, { useState } from "react";

function Header() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY === 0) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div>
      <header id="head" className={navbar ? "fixed" : ""}>
        <div id="logo">
          <span>Sparta</span>
        </div>

        <div id="about">
          <span>
            <a href="#overviev" title="about us">
              About us
            </a>
            <a href="#contacts" title="contacts">
              Registration
            </a>
            <a href="#FAQ" title="FAQ">
              FAQ
            </a>
          </span>
        </div>
      </header>
      <div id="backgroundMain">
        <h1>F*ck Excuses</h1>
      </div>
    </div>
  );
}

export default Header;
