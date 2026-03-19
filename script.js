let elementDisplay = document.getElementById("calculatorDisplay")

function clearAll() {
  document.getElementById("calculatorDisplay").innerText = ""
}
function characterConcatenation(character) {
  return (elementDisplay.innerText = elementDisplay.innerText + character)
}

function display(character) {
  const SELECTOR_OPERATOR_EXCLUDE_DOT = /\D(?<!\.)/

  let operatorArray = elementDisplay.innerText.match(
    SELECTOR_OPERATOR_EXCLUDE_DOT,
  )
  if (character != "=") {
    if (
      operatorArray != null &&
      operatorArray.length == 1 &&
      (character == "+" ||
        character == "-" ||
        character == "x" ||
        character == "/")
    ) {
      let numberTextArray = elementDisplay.innerText.split(
        SELECTOR_OPERATOR_EXCLUDE_DOT,
      )

      let firstNumber = parseFloat(numberTextArray[0])
      let lastNumber = parseFloat(numberTextArray[1])

      switch (operatorArray[0]) {
        case "+":
          elementDisplay.innerText = (firstNumber + lastNumber)
            .toFixed(2)
            .replace(/\.?0+$/, "")
          break
        case "-":
          elementDisplay.innerText = (firstNumber - lastNumber)
            .toFixed(2)
            .replace(/\.?0+$/, "")
          break
        case "x":
          elementDisplay.innerText = (firstNumber * lastNumber)
            .toFixed(2)
            .replace(/\.?0+$/, "")
          break
        case "/":
          elementDisplay.innerText = (firstNumber / lastNumber)
            .toFixed(2)
            .replace(/\.?0+$/, "")
          break
      }
    }

    elementDisplay.innerText = characterConcatenation(character)
  }
  if (character == "=") {
    let numberTextArray = elementDisplay.innerText.split(
      SELECTOR_OPERATOR_EXCLUDE_DOT,
    )

    let firstNumber = parseFloat(numberTextArray[0])
    let lastNumber = parseFloat(numberTextArray[1])

    switch (operatorArray[0]) {
      case "+":
        elementDisplay.innerText = (firstNumber + lastNumber)
          .toFixed(2)
          .replace(/\.?0+$/, "")
        break
      case "-":
        elementDisplay.innerText = (firstNumber - lastNumber)
          .toFixed(2)
          .replace(/\.?0+$/, "")
        break
      case "x":
        elementDisplay.innerText = (firstNumber * lastNumber)
          .toFixed(2)
          .replace(/\.?0+$/, "")
        break
      case "/":
        elementDisplay.innerText = (firstNumber / lastNumber)
          .toFixed(2)
          .replace(/\.?0+$/, "")
        break
    }
  }
}
