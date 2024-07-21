
let nav = document.querySelector("#nav");

let open = document.querySelector("#open");

let close = document.querySelector("#close");

open.addEventListener("click", () =>{
    nav.classList.add("visible");
})


close.addEventListener("click", () =>{
    nav.classList.remove("visible");
})

