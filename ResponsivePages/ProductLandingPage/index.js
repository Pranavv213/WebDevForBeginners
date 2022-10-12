let image = document.querySelectorAll(".small-img");
let prevId = 1;
for(let i = 0; i < 4; i++){
image[i].addEventListener('click',(event) => {
    let id = image[i].id;
    let imgSrc = "images/" + id + ".jpg";
    image[i].classList.add("active");
    image[prevId - 1].classList.remove("active"); 
    prevId = id;
    let bigImage = document.querySelector(".Thumbnail");
    bigImage.setAttribute("src",imgSrc)
});
}

let button = document.querySelectorAll(".add-icons")

for(let i  = 0; i < 3; i++){
    button[i].addEventListener('click',() => {
        let val = document.getElementById("value"); 
        let id = button[i].id;
        if(id == "add"){
            val.innerText++;
        }
        else{
            val.innerText--;
        }
    });
}



let addToCart = document.getElementById("addToCart");
  addToCart.addEventListener("click",() => {
    let message = document.querySelector(".success-message");

    setTimeout(() => {
        message.classList.add("visible");
    }, 500);
})

let cross = document.querySelector(".cross-btn");
cross.addEventListener("click",()=>{
    let message = document.querySelector(".success-message");
       message.classList.remove("visible")
})

const hamburger  = document.getElementById("hamburgerMenu");

hamburger.addEventListener("click",()=>{
   let menu = document.getElementsByClassName("menuContainer")[0];
   console.log(menu.style.transition)
   menu.classList.toggle("showMenu");
   console.log(menu);
})