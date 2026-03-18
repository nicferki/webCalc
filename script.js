function clearAll() {
  document.getElementById("calculatorDisplay").innerText = ""
}
function display(character) {
  const SELECTOR_OPERATOR_EXCLUDE_DOT = /\D(?<!\.)/

  let elementDisplay = document.getElementById("calculatorDisplay")
  let operatorArray = elementDisplay.innerText.match(
    SELECTOR_OPERATOR_EXCLUDE_DOT,
  )
  if (character != "=") {
    function characterConcatenation() {
      return (elementDisplay.innerText = elementDisplay.innerText + character)
    }

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

    elementDisplay.innerText = characterConcatenation()
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
