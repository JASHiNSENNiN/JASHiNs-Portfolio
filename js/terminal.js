const terminalData = [
  {
    text: "",
    additionalMessage: document.createElement("div")
  },
];

const terminalElements = document.getElementsByClassName("terminal");

function writeText() {
  let currentIndex = 0;
  function typeText() {
    const targetElement = terminalElements[currentIndex];
    const terminal = terminalData[currentIndex];
    const text = targetElement.getAttribute("text");
    let index = 0;
    const initialText = targetElement.textContent;

    const intervalId = setInterval(() => {
      targetElement.textContent = initialText + text.substring(0, index + 1);
      index++;

      if (index === text.length) {
        clearInterval(intervalId);

        const extraMessageElement = terminal.additionalMessage;
        extraMessageElement.classList.add("extra-message");
        targetElement.parentNode.insertBefore(
          extraMessageElement,
          targetElement.nextSibling
        );

        const cursorElement = document.createElement("span");
        cursorElement.classList.add("cursor");
        cursorElement.textContent = "|"; // Set the cursor text or symbol

        // Append the cursor only if the additional message is not empty
        if (terminal.additionalMessage.innerHTML.trim() !== "") {
          extraMessageElement.appendChild(cursorElement);
        }

        currentIndex++; // Move to the next terminal

        if (currentIndex < terminalElements.length) {
          // If there are more terminals, type the next one with a slight delay
          setTimeout(typeText, 500);
        }
      }
    }, 200); // Adjust the interval duration (in milliseconds) to control the speed of typing
  }

  // Start typing the first terminal
  typeText();
}

writeText();
