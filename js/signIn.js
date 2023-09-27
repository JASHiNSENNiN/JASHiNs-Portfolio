function toggleForm() {
    var loginForm = document.getElementById("login-form");
    var signupForm = document.getElementById("signup-form");
    var toggleButton = document.getElementById("toggle-form-button");
    const event = new CustomEvent("formToggled");
    document.dispatchEvent(event);
  
    if (loginForm.style.display === "none") {
      loginForm.style.display = "block";
      signupForm.style.display = "none";
      toggleButton.innerHTML = "$~/.Sign-Up ----\\>";
      const terminalElements = document.querySelectorAll(".terminal-typing");
      for (let i = 0; i < terminalElements.length; i++) {
        const terminalElement = terminalElements[i];
        terminalElement.textContent = "./Sign-Up";
        const textToType = terminalElement.getAttribute("data-text");
        typeText(terminalElement, textToType);
      }
    } else {
      loginForm.style.display = "none";
      signupForm.style.display = "block";
      toggleButton.innerHTML = "$~/.Sign-In ----\\>";
      const terminalElements = document.querySelectorAll(".terminal-typing");
      for (let i = 0; i < terminalElements.length; i++) {
        const terminalElement = terminalElements[i];
        terminalElement.textContent = "./Sign-In";
        const textToType = terminalElement.getAttribute("data-text");
        typeText(terminalElement, textToType);
      }
    }
  }
  
  // Call the toggleForm function on page load
  window.onload = function () {
    toggleForm();
    toggleForm();
  };
  
  function typeText(targetElement, text) {
    let index = 0;
    const intervalId = setInterval(() => {
      targetElement.textContent = text.substring(0, index + 1);
      index++;
  
      if (index === text.length) {
        clearInterval(intervalId);
      }
    }, 50);
  }