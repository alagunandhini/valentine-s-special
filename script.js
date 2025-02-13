let list1=document.getElementsByClassName("list1")
let list_img=document.querySelectorAll(".list1 img")
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
                target.appendChild(selected);
            
            }
            selected=null;
        }
        //adding text after all elements are dragged 
        if (document.getElementById("right").children.length === 0) {
            document.getElementById("right").innerHTML = `
                <h2 style="color: palevioletred; font-family: 'coiny', cursive; font-size: 30px; text-align:center; padding:10px;" class="text">
                   
                </h2>
            `;
            quotes_generate();
        }

    });

//reset button 
function reset(){
location.reload()
}


    const quotes=["Are you HTML? Because you have got the perfect structure!",
"You must be a piece of well-written code, because you have got no bugs!",
"Are you a loop? Because I cant stop thinking about you!",
"You are the CSS to my HTML—without you, I had be so plain!",
"Are you a compiler? Because every time I see you, my heart stops for a second!",
"You must be an AI model, because you just predicted my hearts desires!",
"Are you a WiFi signal? Because I feel a strong connection!",
"You are not just my type—you are my favorite data structure!",
"You must be a front-end framework, because you make everything look better!",
"Are you a GitHub repo? Because I want to fork you and make you mine!",
"You are the CSS to my HTML—without you, life has no style!",
"Are you a semicolon? Because you complete me!",
"Our love is like an infinite loop—never-ending and always running!",
"You must be open-source, because I want to contribute to your happiness forever!",
"We are like a perfect function—smooth, efficient, and bug-free together!",
"You and I are like Git commits—always better together!",
"You must be a full-stack developer because you have coded your way into my heart!",
"You are my favorite dependency—I just cant run without you!",
"Our love is like a perfectly optimized algorithm—fast, efficient, and powerful!",
"Are you a database? Because you have stored all my love inside you!"]
function quotes_generate(){
let random_num=Math.floor(Math.random()*quotes.length)
document.querySelector(".text").textContent=quotes[random_num]
}

// function createHeart() {
//     const heart = document.createElement("div");
//     heart.classList.add("heart");
//     heart.innerHTML = "🩷";
//     document.body.appendChild(heart);

//     // Random horizontal position
//     heart.style.left = Math.random() * window.innerWidth + "px";

//     // Random size
//     const size = Math.random() * 20 + 10 + "px";
//     heart.style.fontSize = size;

//     // Random animation duration
//     heart.style.animationDuration = Math.random() * 3 + 2 + "s";

//     // Remove heart after animation
//     setTimeout(() => {
//         heart.remove();
//     }, 4000);
// }

// // Generate hearts every 500ms
// setInterval(createHeart, 500);