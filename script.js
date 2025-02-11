let list1=document.getElementsByClassName("list")
let list_img=document.querySelectorAll(".list img")
let right1=document.getElementById("right")
let left1=document.getElementById("left")
let selected=null
//drag image
list_img.forEach(img =>{
    img.addEventListener("dragstart",function(e){
        selected=e.target.parentElement;
       });

});

//drag over to left container
left1.addEventListener("dragover",function(e){
    e.preventDefault()
    });

//  drop in the left container 
    left1.addEventListener("drop",function(e){
        e.preventDefault();
        if(selected){
         
            
            let target=e.target.closest(".list");
            if(target){
                target.replaceWith(selected);
            
            }
            selected=null;
        }
        //adding text after all elements are dragged 
        if (document.getElementById("right").children.length === 0) {
            document.getElementById("right").innerHTML = `
                <h2 style="color: palevioletred; font-family: 'coiny', cursive; font-size: 30px; text-align:center; padding:10px;">
                   "You & I are like HTML & CSS, beautifully designed together! "
                </h2>
            `;
        }

    });

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "🩷";
    document.body.appendChild(heart);

    // Random horizontal position
    heart.style.left = Math.random() * window.innerWidth + "px";

    // Random size
    const size = Math.random() * 20 + 10 + "px";
    heart.style.fontSize = size;

    // Random animation duration
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";

    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// Generate hearts every 500ms
setInterval(createHeart, 500);