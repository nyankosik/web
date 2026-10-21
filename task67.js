const elementA = document.getElementById("a");
const elementB = document.getElementById("b");
const elementC = document.getElementById("c");
const elementD = document.getElementById("d");
const elementResult = document.getElementById("result");
const elementVerify = document.getElementById("verify");

function verify() {
    const a = parseFloat(elementA.value);
    const b = parseFloat(elementB.value);
    const c = parseFloat(elementC.value);
    const d = parseFloat(elementD.value);
    console.log(a, b, c, d);

    if ((a < c && b < d) || (a < d && b < c)) {
        alert("успешно");
        console.log("успешно");
        elementResult.value = "поместится!";
                                              }
    else {
        alert("не поместится");
        console.log("не поместится");
        elementResult.value = "не поместится!";
         }
                   }

elementVerify.addEventListener("click", verify);


const elementSend = document.getElementById("send");
const elementForm = document.getElementById("UserEnter");

function send() {
    verify();
    if (elementResult.value === "поместится!") {
        elementForm.submit();
    }
}

elementSend.addEventListener("click", send);
