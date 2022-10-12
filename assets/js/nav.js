(function(){
    var btnContainer = document.getElementById("_nav_links");

    var btns = btnContainer.getElementsByClassName("dash_link");

    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("activese");

            if (current.length > 0) {
            current[0].className = current[0].className.replace(" activese", "");
            }

            this.className += " activese";
        });
    }
})();