const form = document.querySelector(".container-form");
const successContainer = document.querySelector(".container-success-confirmation")


  function validateEmail(event) {
    event.preventDefault();
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let err;
    
    if (!emailPattern.test(email)) {
       err = document.querySelector(".error").style.visibility = "visible";
      return false;
    }
    err = document.querySelector(".error").style.visibility = "hidden";
    form.style.display = "none";
    successContainer.style.display = "block";
    document.querySelector("span").textContent = email;
    return true;
  }

  function dismissMessage(){
    form.style.display = "block";
    successContainer.style.display = "none";
  }
