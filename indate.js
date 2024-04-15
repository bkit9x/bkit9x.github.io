var currentYear = new Date().getFullYear();

if (currentYear >= 2025) {
    var elements = document.body.getElementsByTagName('*');

    for (var i = 0; i < elements.length; i++) {
        elements[i].style.opacity = "0";
        elements[i].style.visibility = "hidden";
    }
}
