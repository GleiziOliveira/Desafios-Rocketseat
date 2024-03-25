const { OpenAIApi, Configuration } = require("openai-edge")
const { OpenAIStream, StreamingTextResponse } = require("ai")

// Set the runtime to edge for best performance
const runtime = "edge"

const apiConfig = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(apiConfig)

async function POST(req) {
  const { schema, prompt } = await req.json()

  const message = `
    O seu trabalho é criar queries em SQL a partir de um schema SQL abaixo.
    
    
    Schema SQL:
    """
    ${schema}
    """

    a partir do schema acima, escreva uma querie SQL a partir da solicitação abaixo
    Me retorne somente o código SQL 

    Solicitação: ${prompt}
  `.trim()

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [{ role: "user", content: message }],
  })

  // Convert the response into a friendly text-stream
  const stream = new OpenAIStream(response) // Use "new" para criar uma instância de OpenAIStream
  // Respond with the stream
  return new StreamingTextResponse(stream)
}

module.exports = { POST }
