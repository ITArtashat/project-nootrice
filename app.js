
let x
function hamburger(){
    let menu = document.querySelector(".menu") ;
    let hamb = document.querySelector(".hamburger")
    x  = true
    let time
    menu.addEventListener("click",function(){
    document.body.classList.toggle("overflow")
    menu.classList.toggle("menuClick") ;
    let menuUl = document.querySelector(".menuUl")
    
    hamb.classList.toggle("hamburgerX")
    if(x == true){
        time =  setTimeout(() => {
             
            document.querySelector(".menuUl").style.display = "flex"
            document.querySelector(".menuUl").style.flexDirection = "column"
            document.querySelector(".menuUl").style.justifyContent = "center"
            }, 500); 
             x = false
            
    }else{
        document.querySelector(".menuUl").style.display = "none"
        x = true
        clearTimeout(time)
    }


})
}

document.addEventListener('mousemove', function(){
    if(window.innerWidth>900){
        document.querySelector(".menuUl").style.display = "none"
    }
});
hamburger()
