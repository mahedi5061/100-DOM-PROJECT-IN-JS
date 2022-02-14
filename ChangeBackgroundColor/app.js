//step-1 create onload handler.

window.onload = () =>{
    main();
}

//step-2 change the main elements
function main() {
    const root=document.getElementById("root");
    const btn=document.getElementById("change-btn");

    btn.addEventListener('click',function(){
        const bgColor=colorGenerator();
        root.style.backgroundColor = bgColor;
    })
}

//step-3 color generate.

function colorGenerator() {
    const red=Math.floor(Math.random() * 255);
    const green=Math.floor(Math.random() * 255);
    const blue=Math.floor(Math.random() * 255);

    return `rgb(${red},${green},${blue})`;
}