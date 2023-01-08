document.onreadystatechange = function () {
    let x = document.getElementsByClassName("list-element-navbar");
    counter = 0
    while (counter < x.length){
        x[counter].addEventListener('click', function(event){
            location.href = "/"+event.target.innerText.toLowerCase();
        })
        counter++;
    }
    const hamburguer = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navbar");
    const close_menu = document.querySelector(".close-menu-hamburger")
    hamburguer.addEventListener("click", function(e){
        e.stopImmediatePropagation();
        hamburguer.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
    close_menu.addEventListener("click", function(e){
        e.stopImmediatePropagation();
        hamburguer.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
}
