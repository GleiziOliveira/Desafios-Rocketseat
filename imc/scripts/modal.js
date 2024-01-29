// Aqui foi criado um objeto para abrir e fechar o modal e as propriedades do modal
export const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal #message-modal"),
  buttonClose: document.querySelector(".modal button.close"),

  open() {
    Modal.wrapper.classList.add("open") // esta pegando o modal e adicionando open na class
  },
  close() {
    Modal.wrapper.classList.remove("open")
  },
}

// como é apenas uma linha pode tirar os {} e deixar assim
Modal.buttonClose.onclick = () => Modal.close()


// função criada para usar o botão ESC do teclado
window.addEventListener('keydown', handleKeydown)
function handleKeydown(event) {
  if(event.key === 'Escape'){
    Modal.close()
  }
}