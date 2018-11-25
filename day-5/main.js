                                                ///DOM ///


///Exercise 1 /// 


const right = function(){
    let right = parseInt(ball.style.left) || 0;
    if(right == 405){
        right = 405;
    }
    else{
        right += 15
    }
    ball.style.left = right + "px";
}

const left = function(){
    let left = parseInt(ball.style.left) || 0;
    left -= 15
    if(left ==  -15){
        left = 0;
    }
    ball.style.left = left + "px";
}

const down = function(){
    let down = parseInt(ball.style.top) || 0;
    if(down == 330){
        down = 330;
    }
    else{
        down += 15
    }
    ball.style.top = down + "px";
}

const up = function(){
    let up = parseInt(ball.style.top) || 0;
    up -= 15
    if(up ==  -15){
        up = 0;
    }
    ball.style.top = up + "px";
}

const ball = document.getElementById("block");

///Exercise 2/// 

const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
}

const checkReservation = function(){
    let value = document.getElementsByTagName("INPUT")[0].value;
    let lowerValue = value.toLowerCase();
    var textShow = document.getElementById("ex2");
    if(!value || typeof reservations[lowerValue] == "undefined"){
        let div = document.createElement("div");
        div.innerHTML = "You don't seem to have a reservation, " + value;
        textShow.appendChild(div);
    }
    else{
        for(let r in reservations){
            if(reservations[lowerValue].claimed === false){
                let div1 = document.createElement("div");
                div1.innerHTML = "Welcome, " + value;
                textShow.appendChild(div1);
                break;
             }
             else if(reservations[lowerValue].claimed === true){
                let div2 = document.createElement("div");
                div2.innerHTML = "Alas, your table has been claimed, " + value;
                textShow.appendChild(div2);
                break;
             }
         }
    }
}


///Exercise 3/// 

    let bigDiv = document.getElementById("container2");
    const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
    
        for(let i =0; i < 6; i++){
            let nweDiv = document.createElement("div");
            nweDiv.style.width = "50px";
            nweDiv.style.height = "50px";
            nweDiv.style.display = "inline-block"
            nweDiv.style.marginLeft = "5px"
            nweDiv.style.backgroundColor = "black";
            nweDiv.setAttribute("class", "changeColor")
            bigDiv.appendChild(nweDiv);
        }

            let changeColor = document.getElementsByClassName("changeColor");
            for(i=0; i<changeColor.length; i++){
                changeColor[i].onmouseover = function(){
                let index = Math.floor((Math.random() * 9) + 1);
                this.style.backgroundColor = `${niceColors[index]}`
                check();
                }
            }
           
    


///Exercise 4/// 
let name = document.getElementById("name");
let salary = document.getElementById("salary");
let brithday = document.getElementById("birtday");
let form = document.getElementById("form");
let ok = document.getElementById("ok");
let phone = document.getElementById("phone");
let error = document.getElementById("error");
const validate = function(){
    if(name.value.length < 2){
        let div = document.createElement("div");
        div.innerHTML ="Name must be longer than 2 characters";
        error.appendChild(div);
    }
    if(salary.value > 16000 || salary.value < 10000){
        let div = document.createElement("div");
        div.innerHTML ="Salary must be greater than 10,000 but less than 16,000";
        error.appendChild(div);
    }
    if(brithday.value == ""){
        let div = document.createElement("div");
        div.innerHTML ="Birthday may not be null";
        error.appendChild(div);
    }
    if(phone.value < 10){
        let div = document.createElement("div");
        div.innerHTML ="Phone must be 10 digits long";
        error.appendChild(div);
    }
    else{
        let div = document.createElement("div");
        div.innerHTML =`Welocme ${name.value}`;
        ok.appendChild(div);
       form.style.display = "none";
    }
}

let changeColor2 = document.getElementsByClassName("changeColor");
const check = function(){
let counter = 0;

while(counter < 6){
    console.log(counter)
        for(i=0; i< changeColor2.length; i++){
            for(j=1; j< changeColor2.length; j++){
                if(changeColor2[i].style.backgroundColor == changeColor2[j].style.backgroundColor && changeColor2[i].style.backgroundColor != "black"){
                    counter++;
                }
              
        }
    }
}

console.log("Good!")
}

