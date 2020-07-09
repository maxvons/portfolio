/* Toggle between adding and removing the "responsive" class to navbar 
    when the user clicks on the menu icon */
    function toggleMobileMenu() {
        var x = document.getElementById("navbar");
        var m_div = document.getElementById("main-div");
        if (x.className === "topnav") {
            x.className += " responsive";
            m_div.className += " top-extra-padding";
        } else {
            x.className = "topnav";
            m_div.className = "top-padding";
        }
    }