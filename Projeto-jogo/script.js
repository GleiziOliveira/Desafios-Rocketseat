const tela1 = document.querySelector(".tela1")
const tela2 = document.querySelector(".tela2")

const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if (Number(inputNumber.value) == randomNumber) {
    tela1.classList.add("hide")
    tela2.classList.remove("hide")
    console.log(inputNumber.value)
    tela2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas`
  }
  inputNumber.value = ""
  xAttempts++
}

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", function () {
  tela1.classList.remove("hide")
  tela2.classList.add("hide")
  xAttempts = 1
})
