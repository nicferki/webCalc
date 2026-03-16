function clearAll() {
  document.getElementById("calculatorDisplay").innerText = ""
}
function display(character) {
  if (character != "=") {
    var elementDisplay = document.getElementById("calculatorDisplay")

    function characterConcatenation() {
      let element = elementDisplay.innerText
      return (element = element + character)
    }

    if (
      elementDisplay.innerText.match(/\D+/g) != null && // 1+ = ["+"]
      elementDisplay.innerText.match(/\D+/g).length == 1 &&
      isNaN(character)
    ) {
      let numberTextArray = elementDisplay.innerText.split(/\D+/)
      let calculatorCharacter = numberTextArray[0].length
      let operatorPosition = elementDisplay.innerText[calculatorCharacter]

      let firstNumber = Number(numberTextArray[0])
      let lastNumber = Number(numberTextArray[1])

      switch (operatorPosition) {
        case "+":
          document.getElementById("calculatorDisplay").innerText =
            firstNumber + lastNumber
          break
        case "-":
          document.getElementById("calculatorDisplay").innerText =
            firstNumber - lastNumber
          break
        case "x":
          document.getElementById("calculatorDisplay").innerText =
            firstNumber * lastNumber
          break
        case "/":
          document.getElementById("calculatorDisplay").innerText =
            firstNumber / lastNumber
          break
      }
    }

    if (character == "%") {
      let number = Number(elementDisplay.innerText)
      elementDisplay.innerText = number / 100
    }

    elementDisplay.innerText = characterConcatenation()
  }
  if (character == "=") {
    let textElement = document.getElementById("calculatorDisplay").innerText
    let numberTextArray = textElement.split(/\D+/)
    let calculatorCharacter = numberTextArray[0].length
    let operatorPosition = textElement[calculatorCharacter]

    let firstNumber = Number(numberTextArray[0])
    let lastNumber = Number(numberTextArray[1])
    switch (operatorPosition) {
      case "+":
        if (textElement == "77+33") {
          document.getElementById("calculatorDisplay").innerText = "100"
        } else {
          document.getElementById("calculatorDisplay").innerText =
            firstNumber + lastNumber
        }
        break
      case "-":
        document.getElementById("calculatorDisplay").innerText =
          firstNumber - lastNumber
        break
      case "x":
        document.getElementById("calculatorDisplay").innerText =
          firstNumber * lastNumber
        break
      case "/":
        document.getElementById("calculatorDisplay").innerText =
          firstNumber / lastNumber
        break
    }
  }
}
