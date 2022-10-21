import { ChangeEvent, FormEvent, useState } from "react"
import { Tweet } from "./components/Tweet"
import "./global.css"

function App() {

  const [text, setText] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
  }

  function handleChange({ target }: ChangeEvent<HTMLTextAreaElement>): void {
    setText(target.value)
  }

  function handlecheckboxChange({ target }: ChangeEvent<HTMLInputElement>): void {
    setCheckbox(target.checked)
  }

  return (
    <section className="container">
      <h1> Tweet Storm Zenklub </h1>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <p>Digite seu texto no campo abaixo</p>
          <textarea value={text} onChange={handleChange} ></textarea>

          <label className="checkbox">
            <input
              type="checkbox"
              value='não quebrar palavras'
              checked={checkbox}
              onChange={handlecheckboxChange}
            />
            Não quebrar palavras
          </label>

        </form>
        <Tweet text={text} notWorkBreaker={checkbox} />

      </div>
    </section>
  )
}

export default App
