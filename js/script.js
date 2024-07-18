var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
);
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
});

let input = document.querySelector(".input");
input.placeholder = "Currently Calculator Off";
input.readOnly = true;
let ans = 0;

// on off
document.querySelector(".on").addEventListener("click", () => {
    console.log("hello");
    input.placeholder = "Currently Calculator On";
    input.value = "";
    input.readOnly = false;
});

document.querySelector(".off").addEventListener("click", () => {
    input.placeholder = "Currently Calculator Off";
    input.value = "";
    input.readOnly = true;
});

document.querySelector(".cr").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") input.value += "(";
});

document.querySelector(".cl").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") input.value += ")";
});

document.querySelector(".comma").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") input.value += ",";
});

document.querySelector(".seven").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") input.value += "7";
});

document.querySelector(".eight").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") input.value += "8";
});

document.querySelector(".nine").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") input.value += "9";
});

document.querySelector(".six").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") input.value += "6";
});

document.querySelector(".five").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") input.value += "5";
});

document.querySelector(".four").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") input.value += "4";
});

document.querySelector(".three").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") input.value += "3";
});

document.querySelector(".two").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") input.value += "2";
});

document.querySelector(".one").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") input.value += "1";
});

document.querySelector(".zero").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") input.value += "0";
});

document.querySelector(".mod").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") input.value += "%";
});

document.querySelector(".dot").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") input.value += ".";
});

document.querySelector(".ac").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") input.value = "";
});

document.querySelector(".del").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") {
        let str1 = input.value;
        input.value = str1.substring(0, str1.length - 1);
    }
});

document.querySelector(".div").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") input.value += "/";
});

document.querySelector(".mul").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") input.value += "*";
});

document.querySelector(".add").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") input.value += "+";
});

document.querySelector(".sub").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") input.value += "-";
});

document.querySelector(".pi").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") {
        input.value += "pi";
        console.log(ans);
    }
});

document.querySelector(".ncr").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") {
        let numbersString = input.value;
        let nums = numbersString.split(",");
        input.value = math.combinations(nums[0], nums[1]);
    }
});

document.querySelector(".npr").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") {
        let numbersString = input.value;
        let nums = numbersString.split(",");
        input.value = math.permutations(nums[0], nums[1]);
    }
});

document.querySelector(".sin").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") input.value = "sin(x)";
});

document.querySelector(".cos").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") input.value = "cos(x)";
});

document.querySelector(".tan").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") input.value = "tan(x)";
});

document.querySelector(".sec").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") input.value = "sec(x)";
});

document.querySelector(".cot").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") input.value = "cot(x)";
});

document.querySelector(".cosec").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") input.value = "csc(x)";
});

document.querySelector(".fact").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off")
        input.value = "factorial(x)";
});

document.querySelector(".log").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") input.value = "log10(x)";
});

document.querySelector(".x").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") {
        input.value = "pow(n,m)";
    }
});

document.querySelector(".sqrt").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") {
        input.value = "sqrt(x)";
    }
});

document.querySelector(".lcm").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") {
        input.value = "lcm(x,y)";
    }
});

document.querySelector(".hcf").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") {
        input.value = "gcd(a, b)";
    }
});

document.querySelector(".mean").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") {
        input.value = "mean(a,b,c,....)";
    }
});

document.querySelector(".median").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") {
        input.value = "median(a,b,c,....)";
    }
});

document.querySelector(".mode").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") {
        input.value = "mode(a,b,c,....)";
    }
});

document.querySelector(".min").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") {
        input.value = "min(a,b,c,....)";
    }
});

document.querySelector(".max").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") {
        input.value = "max(a,b,c,....)";
    }
});

document.querySelector(".vari").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") {
        input.value = "variance(a,b,c,....)";
    }
});

document.querySelector(".sd").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") {
        input.value = "std(a,b,c,....)";
    }
});

document.querySelector(".det").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") {
        let output = prompt("2d matrix press 1 \n 3d matrix press 0");
        if (output == 1) {
            input.value = "det([[a,b],[c,d]])";
        } else {
            input.value = "det([[a,b,c],[d,e,f],[g,h,i]])";
        }
    }
});

document.querySelector(".trace").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") {
        let output = prompt("2d matrix press 1 else 0");
        if (output == 1) {
            input.value = "trace([[a,b],[c,d]])";
        } else {
            input.value = "trace([[a,b,c],[d,e,f],[g,h,i]])";
        }
    }
});

document.querySelector(".transpose").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") {
        let output = prompt("2d matrix press 1 else 0");
        if (output == 1) {
            input.value = "transpose([[a,b],[c,d]])";
        } else {
            input.value = "transpose([[a,b,c],[d,e,f],[g,h,i]])";
        }
    }
});


document.querySelector(".ans").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") {
        ans = input.value;
        console.log(ans);
        input.value = "Ans";
        console.log(input.value);
    }
});

// equal  sign

document.querySelector(".equal").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") {
        let str2 = input.value;
        console.log(str2.includes("Ans"));
        if (str2.includes("Ans")) {
            input.value = math.evaluate(input.value, { Ans: ans });
        } else {
            input.value = math.evaluate(input.value);
        }
    }
});

// gsap

let count = 1;

document.querySelector(".matrix").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") {
        document.querySelector(".matrix-body").style.display = "block";
        (() => {
            if (count % 2 == 1) {
                gsap.to(".matrix-body", {
                    opacity: 1,
                    y: 500,
                    delay: 0.5,
                    duration: 0.5,
                });

                count++;
                console.log(count);
            } else {
                gsap.to(".matrix-body", {
                    opacity: 0,
                    y: -500,
                    delay: 0.5,
                    duration: 0.5,
                });
                count++;
                console.log(count);
            }
        })();
    }
});

count = 1;

document.querySelector(".stats").addEventListener("click", () => {
    if (input.placeholder != "Currently Calculator Off") {
        document.querySelector(".stat-body").style.display = "block";
        (() => {
            if (count % 2 == 1) {
                gsap.to(".stat-body", {
                    opacity: 1,
                    y: 500,
                    delay: 0.5,
                    duration: 0.5,
                });

                count++;
                console.log(count);
            } else {
                gsap.to(".stat-body", {
                    opacity: 0,
                    y: -500,
                    delay: 1,
                    duration: 0.6,
                });
                count++;
                console.log(count);
            }
        })();
    }
});
