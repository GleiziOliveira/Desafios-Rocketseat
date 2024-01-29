import state from "./state.js"
import * as el from "./elements.js"
import { reset } from "./actions.js"
import { kitchenTimer } from "./sounds.js"

export function countdown() {
  clearTimeout(state.countdownId)
  if (!state.isRunning) {
    return
  }

  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds--

  if (seconds < 0) {
    seconds = 59
    minutes--
  }

  if (minutes < 0) {
    reset()
    kitchenTimer.play()
    return
  }

  updateDisplay(minutes, seconds)

  // setTimeout (recebe um calback) é uma função que executa uma função depois de determinado tempo
  state.countdownId = setTimeout(() => countdown(), 1000)
  // o calback é quando uma função é passada como argumendo de outra função, para ser executada mais tarde.

  // Aqui esta sendo feito uma recursão quando um função chama ela mesmo, ela para quando tem uma ação exemplo clicar no pause/stop da aplicação
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  el.minutes.textContent = String(minutes).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")
}