/*
let hamburger = document.getElementById('hamburger');
let menu_cross_icon = document.getElementById('menu_cross_icon');
*/
let media = window.matchMedia("(max-width: 768px)");

function navbarfun() {
  return `<nav class="navbar">
    <div class="logo"><a href="/"><img src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5ee401ee1f08215e6dbf0661_color-lettermark.svg" alt="" id="logoimg"></a></div>
    <!-- Navigation Menu -->
    <ul class="nav-links">
        <!-- Using Chebox hacks -->
        <input type="checkbox" id="chebox_toggle" />
        <label for="checkbox_toggle" id="hamburger" class="hamburger">&#9776;</label>
        <img src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e6c01bb8abd7722ca7d8e42_icon-x.svg" id="menu_cross_icon" />
        <div class="menu" id="menu">
            <li><a href="/">SERVICES</a></li>
            <li><a href="/">SECURITY</a></li>
            <li><a href="/">TEAM</a></li>
            <li><a href="/">CAREERS</a></li>
            <li><a href="/">INSIGHTS</a></li>
            <li><a href="/">CONTACT</a></li>
        </div>
    </ul>
</nav>`;
}

function footerfun() {
  return `<footer class="footer">
    <div class="footer_section">
        <div class="footer_container">
            <div class="footer_row">
                <div class="left_footer">
                    <a href="/" class="footer_logo">
                        <img src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e6edda6e64d7d84dcdae233_logo-white.png" alt="footer_img" >
                    </a>
                    <p class="large_footer_text">Medical coding automation</p>
                    <ul class="social_icon_list">
                        <li class="list-item"><a href="https://twitter.com/fathom" target="_blank" class="button-circle button-small bg-white w-inline-block"><img src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e6c01bb8abd7762ed7d8e63_twitter.svg" alt="" class="social_icon"></a></li>
                        <li class="list-item"><a href="https://www.linkedin.com/company/fathom-health/" target="_blank" class="button-circle button-small bg-white w-inline-block"><img src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e6c01bb8abd7768627d8e5d_linkedin.svg" alt="" class="social_icon"></a></li>
                        <li class="list-item"><a href="https://angel.co/company/fathom-health" target="_blank" class="button-circle button-small bg-white w-inline-block"><img src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e802c87d802d6155e87a90f_angel%20list.svg" alt="" class="social_icon"></a></li>
                    </ul>
                </div>
                <div class="right_footer">
                    <div class="footer_menu_col">
                        <div class="large_footer_text footer_header">Technology</div>
                        <ul class="footer_ul">
                            <li>
                                <a href="">Solutions</a>
                            </li>
                            <li>
                                <a href="">Security</a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer_menu_col">
                        <div class="large_footer_text footer_header">Company</div>
                        <ul class="footer_ul">
                            <li>
                                <a href="">Team</a>
                            </li>
                            <li>
                                <a href="">Contact</a>
                            </li>
                            <li>
                                <a href="">Careers</a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer_menu_col">
                        <div class="large_footer_text footer_header">Legal</div>
                        <ul class="footer_ul">
                            <li>
                                <a href="">Privacy policy</a>
                            </li>
                            <li>
                                <a href="">Cookies</a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer_menu_col">
                        <div class="large_footer_text footer_header">Resources</div>
                        <ul class="footer_ul">
                            <li>
                                <a href="">Articles</a>
                            </li>
                            <li>
                                <a href="">RFP guide for medical coding</a>
                            </li>
                            <li>
                                <a href="">Medical coding automation checklist</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer_lower_row">
                <div class="footer_copyright">
                    <p>© Fathom, Inc. 2022</p>
                </div>
            </div>
        </div>
    </div>
</footer>`;
}

// hamburger button script - responsive
// hamburger.addEventListener("click", hamburgerFun);

function hamburgerFun() {
  let menu = document.querySelector(".menu");
  // menu.setAttribute('id', 'menu');
  menu.style.display = "block";
  menu_cross_icon.style.display = "block";
  hamburger.style.display = "none";
}

function addmedia(media) {
  if (media.matches) {
    let menu = document.querySelector(".menu");
    menu.style.display = "none";
    menu_cross_icon.style.display = "none";
    hamburger.style.display = "block";
  } else {
    menu.style.display = "block";
  }
}

// Cross button script - responsive
// menu_cross_icon.addEventListener("click", menu_cross_iconFun);
function menu_cross_iconFun() {
  addmedia(media);
  //   media.addEventListener(addmedia);
}

export { navbarfun, footerfun, hamburgerFun, menu_cross_iconFun };
