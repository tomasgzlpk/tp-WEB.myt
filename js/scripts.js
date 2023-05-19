const buttonMode = document.getElementById("btn_mode");
const mainColor = [...document.querySelectorAll(".priColor")];

if(buttonMode){
    buttonMode.addEventListener("click", () =>{
        changePrimaryColor();
    })
}

const changePrimaryColor = () =>{
    if(mainColor[0].classList.contains("secColor")){
        mainColor.map(i=>i.classList.remove("secColor"));
        // mainColor.classList.remove('secColor');
        buttonMode.textContent = "Dark Mode";
    } 
    else{
        buttonMode.textContent = "Bright Mode";
        mainColor.map(i=>i.classList.add("secColor"));
        // mainColor.classList.add('secColor');
    }
}

const form = document.getElementById("form")
const name = document.getElementById("input-name")
const email = document.getElementById("input-email")
const subject = document.getElementById("input-subject")
const msg = document.getElementById("input-msg")

const formIsValid = {
    name: false,
    email: false,
    subject: true,
    msg: false,
    // checkBtn: false,
    captcha: false
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    validateForm()
})

name.addEventListener("change", (e) => {
    if(e.target.value.trim().length > 0) formIsValid.name = true
})

email.addEventListener("change", (e) => {
    if(e.target.value.trim().length > 0) formIsValid.email = true
})

msg.addEventListener("change", (e) => {
    if(e.target.value.trim().length > 0)
    formIsValid.msg = true 
})

const validateForm = () => {
    const formValues = Object.values(formIsValid)
    const valid = formValues.findIndex(value => value == false)
    if(valid == -1) alert("Form valid")
    else alert('Form invalid')
}

// let form = document.getElementById("form");
// form.addEventListener("submit", agregar)
// let btn_form = document.getElementById("button-form");

// function agregar(e){
//     e.preventDefault();

//     let formData = new formData(form);
    
//     let name = formData.get("user_name")
//     let email = formData.get("user_email")
//     let subject= formData.get("user_subject")
//     let msg = formData.get("user_message")
// }


// Captcha
const captcha = document.querySelector(".captcha"),
reloadBtn = document.querySelector(".reload-btn"),
inputField = document.querySelector(".input-area input"),
checkBtn = document.querySelector(".check-btn"),
statusTxt = document.querySelector(".status-text");

//storing all captcha characters in array
let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                     'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
                     'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                     't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function getCaptcha(){
  for (let i = 0; i < 6; i++) { //getting 6 random characters from the array
    let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
    captcha.innerText += ` ${randomCharacter}`; //passing 6 random characters inside captcha innerText
  }
}
getCaptcha(); //calling getCaptcha when the page open
//calling getCaptcha & removeContent on the reload btn click
reloadBtn.addEventListener("click", ()=>{
  removeContent();
  getCaptcha();
});

checkBtn.addEventListener("click", e =>{
  e.preventDefault(); //preventing button from it's default behaviour
  statusTxt.style.display = "block";
  //adding space after each character of user entered values because I've added spaces while generating captcha
  let inputVal = inputField.value.split('').join(' ');
  if(inputVal == captcha.innerText){ //if captcha matched
    statusTxt.style.color = "#4db2ec";
    statusTxt.innerText = "Nice! You don't appear to be a robot.";
    setTimeout(()=>{ //calling removeContent & getCaptcha after 4 seconds
      removeContent();
      getCaptcha();
    }, 2000);
  }else{
    statusTxt.style.color = "#ff0000";
    statusTxt.innerText = "Captcha not matched. Please try again!";
  }
});

function removeContent(){
 inputField.value = "";
 captcha.innerText = "";
 statusTxt.style.display = "none";
}
