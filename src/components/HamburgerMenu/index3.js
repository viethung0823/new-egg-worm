(function () {
	// styling

	const hamburgerStyle = `
  .hamburger-button {
    width: 38px;
    height: 38px;
    padding: 13px 0;
    position: fixed;
    top: 50px;
    right: 80px;
    cursor: pointer;
    mix-blend-mode: difference;
    z-index: 10002;
    will-change: transform;
    -webkit-transform-origin: 100% 0;
    -ms-transform-origin: 100% 0;
    transform-origin: 100% 0;
    -webkit-transition: -webkit-transform 1s cubic-bezier(0.16, 1, 0.3, 1);
    transition: -webkit-transform 1s cubic-bezier(0.16, 1, 0.3, 1);
    -o-transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1);
    transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1);
    transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1), -webkit-transform 1s cubic-bezier(0.16, 1, 0.3, 1);
    box-sizing: border-box;

    /* animation */
    opacity: 0;
    -webkit-transform: translateX(10px) scaleX(0);
    -ms-transform: translateX(10px) scaleX(0);
    transform: translateX(10px) scaleX(0);

    animation-name: fadeIn;
    animation-duration: 1s;
    animation-delay: 2s;
    animation-fill-mode: forwards;
  }

  .hamburger-button span {
    display: block;
    width: 100%;
    height: 1px;
    background-color: #fff;
    margin-bottom: 8px;
    -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: -webkit-transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    -o-transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    box-sizing: border-box;
    cursor: pointer;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      -webkit-transform: translateX(10px) scaleX(0);
      -ms-transform: translateX(10px) scaleX(0);
      transform: translateX(10px) scaleX(0);
    }

    to {
      opacity: 1;
      -webkit-transform: translateX(0px) scaleX(1);
      -ms-transform: translateX(0px) scaleX(1);
      transform: translateX(0px) scaleX(1);
    }
  }

  @media (min-width: 769px) {
    .hamburger-button:hover span:nth-of-type(1) {
      -webkit-transform: translateX(-5px);
      -ms-transform: translateX(-5px);
      transform: translateX(-5px);
    }

    .hamburger-button.active:hover span:nth-of-type(1) {
      -webkit-transform: translateY(5px) rotate(45deg);
      -ms-transform: translateY(5px) rotate(45deg);
      transform: translateY(5px) rotate(45deg);
    }

    .hamburger-button.active:hover span:nth-of-type(2) {
      -webkit-transform: translateY(-5px) rotate(-45deg);
      -ms-transform: translateY(-5px) rotate(-45deg);
      transform: translateY(-5px) rotate(-45deg);
    }


    .hamburger-button:hover span:nth-of-type(2) {
      -webkit-transform: translateX(5px);
      -ms-transform: translateX(5px);
      transform: translateX(5px);
    }
  }

  .hamburger-button.active span:nth-of-type(1) {
    -webkit-transform: translateY(5px);
    -ms-transform: translateY(5px);
    transform: translateY(5px);
  }

  .hamburger-button.active span:nth-of-type(2) {
    -webkit-transform: translateY(-4px);
    -ms-transform: translateY(-4px);
    transform: translateY(-4px);
  }
  `;
	const overlayMenuStyle = ``;
	const styleElm = document.createElement("style");
	styleElm.textContent = hamburgerStyle + overlayMenuStyle;
	document.head.appendChild(styleElm);

	// menu component
	const hamburgerMenuICon = document.createElement("div");
	hamburgerMenuICon.classList.add("hamburger-button");
	hamburgerMenuICon.id = "hamburgerMenu";
	hamburgerMenuICon.innerHTML = `
  <span></span>
  <span></span>
  <span></span>
  `;
	document.body.appendChild(hamburgerMenuICon);

	// overlay component
	const overlayMenu = document.createElement("div");
	overlayMenu.classList.add("menu-wrapper");
	overlayMenu.innerHTML = `
    <div class="menu-overlay"></div>
    <div class="menu">
    <div class="menu-inner">
        <div class="menu-bg"></div>
        <div class="menu-logo"></div>
        <ul class="footer-menu">
          <li class="footer-menu__item">
            <a href="/" class="">WHO WE ARE</a>
          </li>
          <li class="footer-menu__item ">
            <a href="/" class="">OUR SERVICES</a>
          </li>
          <li class="footer-menu__item ">
            <a href="/" class="">WORKS</a>
          </li>
          <li class="footer-menu__item ">
            <a href="/" class="">NEWS</a>
          </li>
        </ul>
        <div class="footer__sns"><a href="https://twitter.com" target="_blank" title="TWITTER" class="footer-twitter-link">TWITTER</a></div>
        <div class="footer__copyright">© <span class="footer__year">2023</span> Eggworm inc. All Rights Reserved.</div>
      </div>
    </div>
  `;
	document.body.appendChild(overlayMenu);

	// logic
	hamburgerMenuICon.addEventListener("click", function () {
		this.classList.toggle("active");

		const menuOverlay = document.querySelector(".menu-overlay");
		menuOverlay.classList.toggle("active");
		menuOverlay.classList.toggle("motion");

		const menu = document.querySelector(".menu");
		menu.classList.toggle("active");
		menu.classList.toggle("motion");
	});
})();
