//chenge the bg color by genareting rgb color by clicking a button

//steps 1: create onload function
window.onload = function(){
    main();
};

function main(){
let mainbg =document.getElementById("mainbg");
let btn = document.getElementById("btn");
let hexcolorOutput = document.getElementById("colorOutput");
let copycolor = document.getElementById("copy");
btn.addEventListener("click",function(){
    const audio = document.getElementById("clickSound");

    let rgbCreated = genarateRGBcolor();

    mainbg.style.backgroundColor=rgbCreated;
    hexcolorOutput.value=rgbCreated;
    copycolor.textContent = 'Copy';
    // audio.play();
});

copycolor.addEventListener("click", function(){
    navigator.clipboard.writeText(hexcolorOutput.value);
    copycolor.textContent = 'Copied';
});
};




//step 2: random rgb color genarator function
function genarateRGBcolor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
    
};
genarateRGBcolor();

//step 3: collect all nessesary refarances
//step 4: handle the event