let menu = document.getElementById("menu");
let pag = document.getElementById("page")

menu.addEventListener("click", function(){
    let main = document.getElementById('main')
     if(pag.classList.contains('show')){
        pag.classList.remove('show');
        main.style.display = "block"
     }
     else{
      main.style.display = "none"
      pag.classList.add('show');
      
     }

})

let s1 = document.getElementById("animestart");

window.addEventListener("load", function(){
   s1.classList.add('appear');
   
})

