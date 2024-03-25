"use client"
import Image from "next/image"
import { Trash2, Stars } from "lucide-react"
import Editor from "react-simple-code-editor"
import { highlight, languages } from "prismjs"
import "prismjs/components/prism-sql"
import "prismjs/components/prism-css"
import { useState } from "react"
import { useCompletion } from "ai/react" // Certifique-se de que este pacote está instalado e acessível

export default function Home() {
  const [schema, setSchema] = useState("")

  const { completion, handleSubmit, input, handleInputChange } = useCompletion({
    api: "/api/generate-sql", // Corrigido o caminho do endpoint
    body: {
      schema,
    },
  })

  const result = completion
  return (
    <main className="max-w-[430px] mx-auto px-4 pt-12 pb-4">
      <header className="flex items-center justify-between">
        <Image
          src="./assets/logo.svg"
          alt="Logo escrito ASKSQL"
          width={150}
          height={150}
          className="me-2 ml-1"
        />
        <button type="button">
          <Trash2 className="h-8 w-8 text-snow" strokeWidth={1} />
        </button>
      </header>

      <form
        onSubmit={handleSubmit}
        className="py-8 w-full flex flex-col text-foam"
      >
        <label htmlFor="schema" className="text-lg font-light">
          Cole seu Código SQL Aqui:
        </label>

        <Editor
          textareaId="schema"
          value={schema}
          onValueChange={(code) => setSchema(code)}
          highlight={(code) => highlight(code, languages.sql, "sql")}
          padding={16}
          textareaClassName="outline-none scroll-y "
          overflow-scroll
          className="my-4 h-40 overflow-scroll bg-blueberry-600 font-mono border border-blueberry-300 rounded-md focus-within:ring-2 focus-within:ring-lime-500 "
        />

        <label htmlFor="question" className="text-lg font-light">
          Faça uma Pergunta sobre o código
        </label>
        <textarea
          className="my-4 bg-blueberry-600 border border-blueberry-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-lime-500 "
          name="question"
          id="question"
          value={input}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="text-pistachio flex items-center justify-center rounded-lg border border-pistachio h-14 gap-3 "
        >
          <Stars className="h-6 w-6" />
          Pergunte à IA suas dúvidas
        </button>
      </form>

      <div className="mt-8">
        <span className="text-lg font-light text-foam">Resposta</span>
        <Editor
          value={result}
          onValueChange={() => {}}
          highlight={(code) => highlight(code, languages.sql, "sql")}
          padding={16}
          textareaClassName="outline-none "
          readOnly
          className="my-4 w-full text-snow bg-transparent rounded-md font-mono border border-blueberry-300  "
        />
      </div>
    </main>
  )
}
