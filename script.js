let radio1 = document.createElement("input");
let radio2 = document.createElement("input");
let radio3 = document.createElement("input");
let Div = document.createElement("Div");
let Btn = document.createElement("button");
let span1 = document.createElement("span");
let span2 = document.createElement("span");
let span3 = document.createElement("span");

radio1.setAttribute('type', 'radio');
radio2.setAttribute('type', 'radio');
radio3.setAttribute('type', 'radio');

document.body.append(Div);

Div.style.backgroundColor = "yellow";
Div.style.width = "800px";
Div.style.height = "200px";

Btn.style.width = "100px"
Btn.style.height = "30px"
Btn.style.backgroundColor = "blue"

radio1.value = "Yaslilar ucun"
radio2.value = "Boyukler ucun"
radio3.value = "Kicikler ucun"

span1.innerText = radio1.value
span2.innerText = radio2.value
span3.innerText = radio3.value


radio1.setAttribute('name', 'bir')
radio2.setAttribute('name', 'bir')
radio3.setAttribute('name', 'bir')

Div.append(span1, radio1, span2, radio2, span3, radio3, Btn)

Btn.innerText = "Add";
Btn.addEventListener("click", () => {

    let check = document.querySelector('input[name="bir"]:checked');
    console.log(check.value);

})

let Divall = document.createElement("div");
let div1 = document.createElement("div");
let input1 = document.createElement("input");
let button1 = document.createElement("button");
let button2 = document.createElement("button");


input1.setAttribute('type', 'text');


div1.style.cssText = "width:600px; height:100px";
Divall.style.cssText = "width:600px; height:300px; background-color:pink; margin-top:100px";
button1.style.cssText = "width:100px; height:30px; background-color:white; margin:20px; color:black; font-size:20px"
button2.style.cssText = "width:100px; height:30px; background-color:white; margin:20px; color:black; font-size:20px"
input1.style.cssText = "width:250px; height:30px; margin:20px;"


button1.innerText = "Close";
button2.innerText = "Open";


document.body.append(Divall);
Divall.append(div1);
div1.append(input1, button1, button2);


button2.disabled = true;

button1.addEventListener("click", () => {
    input1.disabled = true;
    button2.disabled = false;
    button1.disabled = true;

})

button2.addEventListener("click", () => {
    input1.disabled = false;
    button1.disabled = false;
    button2.disabled = true;
})


