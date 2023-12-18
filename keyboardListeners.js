let elements = ["num0","num1","num2","num3","num4","num5","num6","num7","num8","num9","button+","button-","button*","button/","backspace","enter"];
let keycodes = [96,97,98,99,100,101,102,103,104,105,107,109,106,111,8,13];

for (let i = 0; i < elements.length; i++) {
    document.getElementById("body")
    .addEventListener("keydown", function(event) {
    event.preventDefault();
    if (event.keyCode === keycodes[i]) {
        document.getElementById(elements[i]).click();
    }
});  
}

