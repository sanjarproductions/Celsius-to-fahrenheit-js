const c = document.querySelector("#celsius");
const f = document.querySelector("#fahrenheit");

window.addEventListener("load", () => c.focus());

c.addEventListener("input", () => {
    f.value = ((c.value * 9) / 5 + 32).toFixed(2)
})

f.addEventListener("input", () => {
    if (f.value >= 32) {
        c.value = (((f.value - 32) * 5) / 9).toFixed(2)
    }
    else{
        
    }
})