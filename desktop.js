// nav = document.getElementsByClassName('navigation'),
// menubar= document.getElementsByClassName('menu');

// function navbutton(){
//     menubar.classList.toggle('navigation')
// }
// menuOpenImg = document.
menuOpen = document.querySelector("#menu-btn");
menuClose = document.querySelector("#menu-close");
const sideBar = document.querySelector("ul");

const nav = document.querySelector('.side-bar')



   // menuOpen.classList.toggle(nav)
    
   function start() {
      sideBar.style.display = "none";
    }
    start()

menuOpen.addEventListener("click", function menuOpenBtn(){
    sideBar.style.display = "block";
})
menuClose.addEventListener("click", function menuCloseBtn(){
    sideBar.style.display = "none";
})
// menuCloseBtn();
// menuOpenBtn();
