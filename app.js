const menubutton=document.querySelector('.menu-button');
const content=document.querySelector('.content');
menubutton.addEventListener("click",()=>{
    menubutton.classList.toggle("active");
    content.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",()=>{
    menubutton.classList.remove("active");
    content.classList.remove("active");
}))