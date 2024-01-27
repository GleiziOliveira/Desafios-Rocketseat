
const clickLucky = document.querySelector("#clickLucky")
const btnTry = document.querySelector("#btnTry")


const fraseDaSorte = [
  "A sorte favorece os ousados.",
  "Siga seus sonhos, pois eles conhecem o caminho.",
  "O otimismo é a chave para o sucesso.",
  "Grandes realizações começam com pequenos passos.",
  "Acredite em você mesmo e tudo será possível.",
  "O destino não é uma questão de sorte, mas de escolha.",
  "A paciência é amarga, mas seus frutos são doces.",
  "Nada é impossível para aquele que persiste.",
  "A vida é uma jornada, aproveite o passeio.",
  "Seja a mudança que você quer ver no mundo.",
  "O sucesso está na jornada, não apenas no destino.",
  "Aprenda com o passado, viva no presente, planeje para o futuro.",
  "A sorte favorece a mente preparada.",
  "A esperança é a última que morre.",
  "A gentileza é uma linguagem que os surdos podem ouvir e os cegos podem ver.",
  "Cada novo dia é uma oportunidade para um novo começo.",
  "Acredite na magia que está dentro de você.",
  "A verdadeira sorte é ter uma mente positiva.",
  "O impossível é apenas uma opinião.",
  "A maior aventura que você pode fazer é viver a vida dos seus sonhos.",
  "O amor é a maior sorte da vida.",
  "Você é mais forte do que pensa que é.",
  "O sucesso começa com uma atitude positiva.",
  "A sorte é o que acontece quando a preparação encontra a oportunidade.",
  "A sorte é encontrar oportunidade onde os outros não a veem.",
  "A simplicidade é a chave da verdadeira grandeza.",
  "O conhecimento é o começo da sorte.",
  "A paciência é o segredo para boas coisas.",
  "Você nunca está velho demais para sonhar um novo sonho.",
  "Cada dia é uma nova chance para ser melhor.",
  "Não conte os dias, faça com que os dias contem.",
  "A sorte sorri para aqueles que continuam tentando.",
  "A alegria está na jornada, não no destino.",
  "Não tema as mudanças, abrace-as.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "A sorte segue a coragem.",
  "A sabedoria é mais valiosa do que o ouro.",
  "A fé move montanhas, mas o suor as escala.",
  "Seja a luz que ilumina o caminho para os outros.",
  "A felicidade está nas pequenas coisas da vida.",
  "O sorriso é a chave que abre muitos corações.",
  "A sorte está no equilíbrio.",
  "A jornada é tão importante quanto o destino.",
  "A generosidade é a verdadeira riqueza.",
  "O sucesso é uma jornada, não um destino final.",
  "A sorte favorece aqueles que se atrevem a seguir seus sonhos.",
  "Cada dia é uma página em branco, escreva sua história.",
  "A verdadeira sorte é estar em paz consigo mesmo.",
]

function handleLuckyClick(event) {
  event.preventDefault()

  const randomIndex = Math.floor(Math.random() * fraseDaSorte.length)
  const randomFrase = fraseDaSorte[randomIndex]

  document.getElementById("randomFraseDaSorte").innerText = randomFrase

  // Mostra a tela2 e oculta a tela1
  document.querySelector(".tela1").style.display = "none"
  document.querySelector(".tela2").style.display = "block"
}

btnTry.addEventListener("click", function () {
  // Mostra a tela1 e oculta a tela2
  document.querySelector(".tela1").style.display = "block"
  document.querySelector(".tela2").style.display = "none"
})

clickLucky.addEventListener("click", handleLuckyClick)