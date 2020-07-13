/* Toggle between adding and removing the "responsive" class to navbar 
    when the user clicks on the menu icon */
function toggleMobileMenu() {
    var x = document.getElementById("navbar");
    var menu_icon = document.getElementById("menu-icon");
    var m_div = document.getElementById("main-div");
    if (x.className === "topnav") {
        x.className += " responsive";
        menu_icon.className += " rotate";
        m_div.className += " top-extra-padding";
    } else {
        x.className = "topnav";
        menu_icon.className = "nav-icon";
        m_div.className = "top-padding";
    }
}

function toggleDarkMode() {
    var b = document.getElementsByTagName("body");
    var logo = document.getElementById("logo");
    if (b[0].className === "hide-scroll") {
        b[0].className += " dark-mode";
        logo.src = "icons/icon_white.svg";
    }   else {
        b[0].className = "hide-scroll";
        logo.src="icons/portfolio_icon_fixed.svg";
    }
}