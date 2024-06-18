let home = document.querySelector('#home');
let events = document.querySelector('#events');
let ourteam = document.querySelector('#ourteam');
let gallery = document.querySelector('#gallery');

home.addEventListener('click',()=>{
    alert("Home");
    home.classList.add("border");
    ourteam.classList.remove("border");
    events.classList.remove("border");
    gallery.classList.remove("border");
})


ourteam.addEventListener('click',()=>{
    home.classList.remove("border");
    ourteam.classList.add("border");
    events.classList.remove("border");
    gallery.classList.remove("border");
})

ourteam.addEventListener('click',()=>{
    home.classList.remove("border");
    ourteam.classList.remove("border");
    events.classList.add("border");
    gallery.classList.remove("border");
})


gallery.addEventListener('click',()=>{
    home.classList.remove("border");
    ourteam.classList.remove("border");
    events.classList.remove("border");
    gallery.classList.add("border");
})