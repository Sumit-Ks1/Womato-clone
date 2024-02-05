
let first_click= document.querySelector(".first-first-head-part div");

["click", "mouseover"].forEach((point) => {
    first_click.addEventListener(point, () => {
        if(point=="click"){
            window.open("./index2.html");
        }
        if(point=="mouseover")
        {
            first_click.style.cursor="pointer";
        }
     }
    )
}
)
