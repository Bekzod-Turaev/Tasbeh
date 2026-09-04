const plusBtn = document.querySelector(".thero_start");
const thero_num = document.querySelector(".thero");
const minusBtn = document.querySelector(".delete");
const deletrAll = document.querySelector(".thero_icon");

let count_num = 0;

plusBtn.addEventListener("click", ()=> {
    count_num++
    thero_num.textContent = count_num
});

minusBtn.addEventListener("click", ()=> {
    if (count_num > 0) {
        count_num--
        thero_num.textContent = count_num

        localStorage.setItem("count", count_num);  //ie too
    }
});

deletrAll.addEventListener("click", ()=> {
    count_num = 0;
    thero_num.textContent = count_num;
});


// IE
count_num = localStorage.getItem("count") 
    ? parseInt(localStorage.getItem("count")) 
    : 0;
thero_num.textContent = count_num;
// IE















