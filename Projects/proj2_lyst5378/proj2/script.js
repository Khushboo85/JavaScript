const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// getComputedStyle
console.log("Hello");
console.log(window.getComputedStyle(red));
console.log(window.getComputedStyle(red).background);
console.log(window.getComputedStyle(red).backgroundColor);//background-color -> backgroundColor , font-family -> fontFamily

const getBGColor = (selectedElement) => {
return (window.getComputedStyle(selectedElement).backgroundColor);
}

console.log(getBGColor(red));
console.log( getBGColor(cyan));
//style : when we want to chaneg the style
//getComputedStyle : when we want to get the style which is already used
// pink.addEventListener('mouseenter', () =>{
//     center.style.backgroundColor= getBGColor(pink);
// }); 
//center.style.backgroundColor= "red";
 
//center is common to everycolor , therefore not necessary to pass it explicitly
// we can pass the color variable also, but here we are calculating for the element which is passed , therefore we can calculate it directly inside the function
const magicColorChanger = (element) => {
    return element.addEventListener('mouseenter', () =>{
        center.style.backgroundColor= getBGColor(element);
    })
}
magicColorChanger(red);
magicColorChanger(cyan);
magicColorChanger(violet);
magicColorChanger(orange);
magicColorChanger(pink);
