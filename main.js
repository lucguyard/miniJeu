const ball = document.getElementById("ball");
const html = document.querySelector("html");
const p = document.querySelector("p");

let time;

let chrono = 2000 



/*recuperer la hauteur et la longueur de la fenetre
const style = getComputedStyle(html)
const heigthHtml = parseFloat(style.height)
const widthHtml = parseFloat(style.width)
*/
//recuperer la hauteur et la longueur de la fenetre
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

console.log(windowHeight, windowWidth)


function timeOut()
{
    time = setTimeout(() => {
        ball.style.display = "none";
        //ball.style.backgroundColor = "blue"; 
        window.alert("looser")
        p.innerText = "looser"
        p.style.marginTop = windowHeight /2  + "px"
        p.style.marginLeft = windowWidth /2 + "px"


    }, chrono -= 10 )

}


function moveBall()
{
    let randomheight = Math.random() * (windowHeight - 0) + 0;
    let randomwidth = Math.random() * (windowWidth - 0) + 0;
    ball.style.marginTop = randomheight.toString() + "px"; 
    ball.style.marginLeft = randomwidth.toString() + "px"; 

    clearTimeout(time)
    timeOut()
    console.log(time)

}


function main()
{

    timeOut()
    ball.addEventListener("click", () => { moveBall() })
    if (chrono == 500)
    {
        p.innerText = "winner"
    }

    
}

main()


















    














    
