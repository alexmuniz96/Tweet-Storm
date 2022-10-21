import { ChangeEvent, FormEvent, useState } from "react"
import { Tweet } from "./components/Tweet"
import "./global.css"

function App() {

  const [text, setText] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
  }

  function handleChange({ target }: ChangeEvent<HTMLTextAreaElement>): void {
    setText(target.value)
  }

  return (
    <section className="container">
      <h1> Tweet Storm Zenklub </h1>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <p>Digite seu texto no campo abaixo</p>
          <textarea value={text} onChange={handleChange} ></textarea>
          {/* <button>Dividir texto</button> */}
        </form>
        <Tweet text={text} />

      </div>
    </section>
  )
}

export default App
