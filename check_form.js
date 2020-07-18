function checkForm() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");

    if (!email.checkValidity() && !name.checkValidity()) {
        micron.getEle("#name").interaction("shake").duration(".45").timing("ease-in-out");
    }   else if (!email.checkValidity() && name.checkValidity()) {
        micron.getEle("#email").interaction("shake").duration(".45").timing("ease-in-out");
    }   else if (email.checkValidity() && !name.checkValidity()) {
        micron.getEle("#name").interaction("shake").duration(".45").timing("ease-in-out");
    }
}






