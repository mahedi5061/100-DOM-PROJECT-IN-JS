//step-1 create onload handler.

window.onload = () =>{
    main();
}

//step-2 change the main elements
function main() {
    const root=document.getElementById("root");
    const btn=document.getElementById("change-btn");
    const output=document.getElementById("output")

    btn.addEventListener('click',function(){
        const bgColor=colorHexGenerator();
        root.style.backgroundColor = bgColor;
        output.value=bgColor;
    })
}

//step-3 color generate.

function colorHexGenerator() {
    const red=Math.floor(Math.random() * 255);
    const green=Math.floor(Math.random() * 255);
    const blue=Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}