showsigninform=()=>{
    signupform=document.querySelector(".signupform");
    signupform.classList.add("signupformshow")
    close=document.querySelector(".close")
    close.style.display="block"


}
showloginform=()=>{
    loginform=document.querySelector(".loginform");
    loginform.classList.add("signupformshow")
    close=document.querySelector(".close")
    close.style.display="block"


}
hideform=()=>{
    signupform=document.querySelector(".signupform");
    signupform.classList.remove("signupformshow")
    loginform=document.querySelector(".loginform");
    loginform.classList.remove("signupformshow")
    close=document.querySelector(".close")
    close.style.display="none"

}
close=document.querySelector(".close")
close.addEventListener("click",hideform)