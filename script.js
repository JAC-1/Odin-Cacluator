let numberKeys = document.querySelector(".buttons");
let calc = document.querySelector(".calculator");
let scr = document.querySelector(".screen");
let zeroKey = document.querySelector(".zero-key");

// assemble the number keys
for (let i = 1; i < 10; i++) {
  let numberKey = document.createElement("div");
  let keyNumber = document.createElement("a");
  numberKey.classList.add("button");
  keyNumber.classList.add("number");
  keyNumber.setAttribute("value", `${i}`);
  keyNumber.textContent = `${i}`;
  numberKeys.appendChild(numberKey);
  numberKey.appendChild(keyNumber);
}

// add zero
let numberZero = document.createElement("div");
let numberZeroA = document.createElement("a");
numberZero.classList.add("zero");
numberZeroA.textContent = "0";
numberZero.setAttribute("value", "0");
zeroKey.appendChild(numberZero);
numberZero.appendChild(numberZeroA);



let equals = document.createElement("div");
equals.classList.add("equals");

let keys = document.querySelectorAll(".button .number");
let keyPressCount = 0;
let n = "";
keys.forEach((key) => {
  key.addEventListener("click", () => {
    let value = key.getAttribute("value");
    if (keyPressCount < 14 && value != ".") {
      let scrNum = document.createElement("p");
      scr.classList.add("screen-num");
      scrNum.textContent = value;
      scr.appendChild(scrNum);
      keyPressCount += 1;
        n += value;
        
    }
    });
});


let zeroButton = document.querySelector(".zero");
zeroButton.addEventListener("click", () => {
  let value = zeroButton.getAttribute("value");
  if (keyPressCount < 14) {
    let scrNum = document.createElement("p");
    scr.classList.add("screen-num");
    scrNum.textContent = value;
    scr.appendChild(scrNum);
    keyPressCount += 1;
      n += value;
  }
});

// Add period/dot, but make sure one isn't already present. 

const DOT = document.querySelector("#dot");
let dde = false;
DOT.addEventListener("click", () => {
    let value = DOT.getAttribute("value");
    if (keyPressCount < 14 && dde == false) {
        let scrNum = document.createElement("p");
        scr.classList.add("screen-num");
        scrNum.textContent = value;
        scr.appendChild(scrNum);
        keyPressCount += 1;
        n += value;
        dde = true;
      }
});


let scrNum = document.querySelectorAll(".screen-num");
if (scrNum.length > 8) {
  console.log("over");
}



// Actually do some math
let num1 = "";
let num2 = "";
const SCREEN = document.querySelector(".screen");
const MULTIPLY = document.querySelector("#multipy");
const DEVIDE = document.querySelector("#devide");
const MINUS = document.querySelector("#subtract");
const PLUSE = document.querySelector("#add");
const CLEAR = document.querySelector("#question");
let opp = "";
let total = null;
let count = 0;
MULTIPLY.addEventListener("click", () => {
    opp = "*";
    // insert functions here to get num and do somethings with it
    // make sure to update total and clear screen when necessary
    if (num1.length == 0) {
        num1 = n;
        SCREEN.innerHTML = "";
    } else if (total) {
        num1 = total;
        SCREEN.innerHTML = "";
    } else {
        num2 = opporate(opp, num1, n);
        num1 = num2;
        SCREEN.innerHTML = "";
    }

    keyPressCount = 0;
    n = "";
    dde = false;


});

PLUSE.addEventListener("click", () => {
    opp = "+";
    if (num1.length == 0) {
        num1 = n;
        SCREEN.innerHTML = "";
    } else if (total) {
        num1 = total;
        SCREEN.innerHTML = "";
    } else {
        num2 = opporate(opp, num1, n);
        num1 = num2;
        SCREEN.innerHTML = "";
    }
    keyPressCount = 0;
    n = "";
    dde = false;
});

MINUS.addEventListener("click", () => {
    opp = "-";
    if (num1.length == 0) {
        num1 = n;
        SCREEN.innerHTML = "";
    } else if (total) {
        num1 = total;
        SCREEN.innerHTML = "";
    } else {
        num2 = opporate(opp, num1, n);
        num1 = num2;
        SCREEN.innerHTML = "";
    }
    keyPressCount = 0;
    n = "";
    dde = false;
});

DEVIDE.addEventListener("click", () => {
    opp = "/";
    if (num1.length == 0) {
        num1 = n;
        SCREEN.innerHTML = "";
    } else if (total) {
        num1 = total;
        SCREEN.innerHTML = "";
    } else {
        num2 = opporate(opp, num1, n);
        num1 = num2;
        SCREEN.innerHTML = "";
    }
    keyPressCount = 0;
    n = "";
    dde = false;
});

function getNum() {
    nums = SCREEN.querySelectorAll("p");
    let numbers = "";
    for (let i = 0; i < nums.length; i++) {
        let number = parseFloat(nums[i].innerHTML);
        if (number) {
            numbers += number;
        }
    }
    return parseFloat(numbers);
}

function printNum(x) {
    // Add it so it doesnt print with no num1
    if (x == n) {
        return
    } else { 
        SCREEN.innerHTML = "";
        for (let i = 0; i < x.length; i++) {
            let tp = document.createElement("p");
            SCREEN.appendChild(tp);
            tp.innerHTML = `${x[i]}`;
        }
    }
} 

function opporate(opp, num1, num2) {
    if (opp == "*") {
        return String(parseFloat(num1) * parseFloat(num2));
    } else if (opp == "+") {
        return String(parseFloat(num1) + parseFloat(num2));
    } else if (opp == "-") {
        return String(parseFloat(num1) - parseFloat(num2));
    } else if (opp == "/") {
        return String(parseFloat(num1) / parseFloat(num2));
    }
}

function round(value, precision) {
    let multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}



function longToShort(str) {
    if (str.length < 14) {
        return str;
    } else {
        let exponential = Number.parseFloat(str).toExponential(9);
        // Use a regex to find-out if the exponent notation is too long
        // if so return E
        if (exponential.match(/(\+)(\d{3,})/g)) {
            return "E";
        } else {
            return exponential;
        }
    }

}

// add zero infront of a naked dot
function addZero(num) {
    let rx = num.match(/\./g);
    if (num.match(/\.?/g) && num.match(/0\.?/g)) {
        return
    } else {
        return n = "0" + n;
    }
}

equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
    // account for no total
//    if (String(total).length >= 16 ) {
//        total = round(total, 16);
//        // if over seventeen convert to x.yyyy pattern
//        // add e + count of TOTAL ys
//    }  
    if (num1.length == 0) {
        printNum(longToShort(String(n)));

    } else {
        total = opporate(opp, num1, n);
        printNum(longToShort(String(total)));
    }

//
});


CLEAR.addEventListener("click", () => {
    location.reload();
});


