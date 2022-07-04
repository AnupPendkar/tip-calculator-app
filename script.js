const bill = document.querySelector(".bill-input");
const number_of_people = document.querySelector(".no-of-people-input");
const tip_container = Array.from(document.querySelectorAll(".tip"));
tip_container.pop();
const reset_btn = document.getElementsByClassName("reset-btn");
const amount = document.querySelectorAll(".real-value");
const bill_warning = document.querySelector(".bill-warning");
const people_warning = document.querySelector(".people-warning");
var tip_value = 0;





// ADDING BACKGROUND ON TIP BOXES AFTER CLICKING ON TIPS
const onClickingTipContainer = (clickedItem)=>{
    input_tip.value = "";
    tip_value = +clickedItem.children[0].innerHTML.split("%")[0];
    tip_container.forEach((item)=>{
        if(item.classList.contains("active")){
            item.classList.remove("active");
        }
    })
    clickedItem.classList.add("active");
}
tip_container.map((item)=>{
    item.addEventListener("click",()=>onClickingTipContainer(item))
})



// REMOVING BACKGROUND OF TIP BOXES AFTER CLICKING ON CUSTOM
const input_tip = document.querySelector(".custom-tip-value");
input_tip.addEventListener("click", ()=>{
    tip_container.map((item)=>item.classList.remove("active"));
});



// ON CLICKING RESET BUTTON
const reset_btn_clicked = ()=>{
    const bill_value = +bill.value;
    const no_of_people_value = +number_of_people.value;
    const custom_tip = input_tip.value;
    if(custom_tip){
        tip_value = +custom_tip
    }

    if(bill_value > 0 && no_of_people_value > 0){
        bill_warning.hidden = true;
        people_warning.hidden = true;
        const overall_tip = (bill_value * tip_value)/100;
        const tip_per_person = +(overall_tip / no_of_people_value).toFixed(2);
        amount[0].innerHTML = tip_per_person;
        amount[1].innerHTML = (bill_value / no_of_people_value) + tip_per_person;
    }else if(+bill.value <= 0){
        bill_warning.hidden = false;
    }else if(+number_of_people.value <= 0){
        people_warning.hidden = false;
    }
}