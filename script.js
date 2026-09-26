window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.background = "rgba(8,8,8,.80)";

    }else{

        navbar.style.background = "rgba(8,8,8,.50)";

    }

});