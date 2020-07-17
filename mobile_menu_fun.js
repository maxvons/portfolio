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

const toggleColorMode = e => {

    // Get logo 
    var logo = document.getElementById("logo");

    // Switch to light mode
    if (e.currentTarget.classList.contains("light-hidden")) {

        // Set custom html attribute
        document.documentElement.setAttribute("color-mode", "light");
        
        // Set pref in local storage
        localStorage.setItem("color-mode", "light");

        // Switch to black logo
        logo.src = "icons/icon_black.svg";

        // Switch to light portfolio pics
        var s_path = window.location.pathname;
        var s_page = s_path.substring(s_path.lastIndexOf('/') + 1);

        if (s_page == "portfolio.html") {
            var p_pic_land = document.getElementById("portfolio-pic1");
            var p_pic_proj = document.getElementById("portfolio-pic2");
            var p_pic_abt = document.getElementById("portfolio-pic3");
            var p_pic_ctc = document.getElementById("portfolio-pic4");

            p_pic_land.src = "pictures/portfolio_iphone_landing.png";
            p_pic_proj.src = "pictures/portfolio_iphone_projects.png";
            p_pic_abt.src = "pictures/portfolio_iphone_about.png";
            p_pic_ctc.src = "pictures/portfolio_iphone_contact.png";
        }
        return;
    }

    // Switch to dark mode
    document.documentElement.setAttribute("color-mode", "dark");

    // Set pref in local storage
    localStorage.setItem("color-mode", "dark");

    // Switch to white logo
    logo.src = "icons/icon_white.svg";

    // Switch to light portfolio pics
    var s_path = window.location.pathname;
    var s_page = s_path.substring(s_path.lastIndexOf('/') + 1);

    if (s_page == "portfolio.html") {
        var p_pic_land = document.getElementById("portfolio-pic1");
        var p_pic_proj = document.getElementById("portfolio-pic2");
        var p_pic_abt = document.getElementById("portfolio-pic3");
        var p_pic_ctc = document.getElementById("portfolio-pic4");

        p_pic_land.src = "pictures/portfolio_iphone_landing_dark.png";
        p_pic_proj.src = "pictures/portfolio_iphone_projects_dark.png";
        p_pic_abt.src = "pictures/portfolio_iphone_about_dark.png";
        p_pic_ctc.src = "pictures/portfolio_iphone_contact_dark.png";
    }
};
    
// Get the buttons in the DOM
const toggleColorButtons = document.querySelectorAll(".color-mode_btn");

// Set up event listeners
toggleColorButtons.forEach(btn => {
    btn.addEventListener("click", toggleColorMode);
});
    
    /*
    var b = document.getElementsByTagName("body");
    var logo = document.getElementById("logo");
    if (b[0].className === "hide-scroll") {
        b[0].className += " dark-mode";
        logo.src = "icons/icon_white.svg";
    }   else {
        b[0].className = "hide-scroll";
        logo.src="icons/portfolio_icon_fixed.svg";
    }
    */
